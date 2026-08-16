"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  phase: number;
  speedX: number;
  speedY: number;
  color: [number, number, number, number];
}

const PARTICLE_COUNT = 420;
let seed = 37;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = compileShader(
    gl,
    gl.VERTEX_SHADER,
    `
      attribute vec2 a_position;
      attribute vec2 a_speed;
      attribute float a_size;
      attribute float a_phase;
      attribute vec3 a_color;
      attribute float a_alpha;

      uniform float u_time;
      uniform vec2 u_pointer;

      varying vec4 v_color;

      void main() {
        float stream = fract(u_time * 0.08 * a_speed.x + a_phase * 0.173);
        float current = sin((stream + a_phase) * 6.28318530718);
        float counter = cos((stream * 0.84 + a_phase) * 6.28318530718);
        vec2 drift = vec2(
          sin(u_time * a_speed.x + a_phase) * a_speed.y,
          cos(u_time * (a_speed.x * 0.73) + a_phase * 0.71) * a_speed.y * 0.74
        );
        vec2 flow = vec2(
          current * a_speed.y * 2.2,
          (stream - 0.5) * a_speed.y * 4.4 + counter * a_speed.y * 0.8
        );
        vec2 position = a_position + drift + flow;
        vec2 pointerDelta = u_pointer - position;
        float pointerDistance = max(length(pointerDelta), 0.001);
        vec2 pointer = pointerDelta * (0.014 / (1.0 + pointerDistance * 8.0));
        float pulse = 1.0 + sin(u_time * 1.1 + a_phase) * 0.2;

        gl_Position = vec4(position + pointer, 0.0, 1.0);
        gl_PointSize = a_size * pulse;
        v_color = vec4(a_color, a_alpha * (0.72 + stream * 0.28));
      }
    `,
  );
  const fragmentShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    `
      precision mediump float;

      varying vec4 v_color;

      void main() {
        vec2 point = gl_PointCoord - vec2(0.5);
        float distanceFromCenter = length(point);
        float alpha = smoothstep(0.5, 0.0, distanceFromCenter);
        float core = smoothstep(0.22, 0.0, distanceFromCenter);

        gl_FragColor = vec4(v_color.rgb, v_color.a * (alpha * 0.68 + core * 0.32));
      }
    `,
  );

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function randomBetween(min: number, max: number) {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return min + (seed / 4294967296) * (max - min);
}

function createParticles() {
  const clusters = [
    { x: 0.28, y: 0.58, rx: 0.16, ry: 0.28, color: [1, 0.52, 0.16, 0.32] },
    { x: 0.5, y: 0.3, rx: 0.2, ry: 0.36, color: [0.98, 0.42, 0.14, 0.38] },
    { x: 0.68, y: 0.56, rx: 0.18, ry: 0.34, color: [0.78, 0.54, 1, 0.34] },
    { x: 0.56, y: -0.14, rx: 0.24, ry: 0.34, color: [0.56, 0.78, 0.38, 0.34] },
    { x: 0.8, y: -0.22, rx: 0.18, ry: 0.36, color: [0.72, 0.5, 1, 0.36] },
    { x: 0.36, y: -0.52, rx: 0.18, ry: 0.24, color: [0.66, 0.82, 0.44, 0.3] },
    { x: 0.86, y: 0.14, rx: 0.14, ry: 0.38, color: [1, 0.67, 0.24, 0.3] },
  ] as const;
  const particles: Particle[] = [];

  seed = 37;

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const cluster = clusters[index % clusters.length];
    const angle = randomBetween(0, Math.PI * 2);
    const radius = Math.sqrt(randomBetween(0, 1));
    const colorNoise = randomBetween(-0.05, 0.07);

    particles.push({
      x: cluster.x + Math.cos(angle) * cluster.rx * radius,
      y: cluster.y + Math.sin(angle) * cluster.ry * radius,
      size: randomBetween(2.6, 8.4),
      phase: randomBetween(0, Math.PI * 2),
      speedX: randomBetween(0.1, 0.42),
      speedY: randomBetween(0.006, 0.024),
      color: [
        Math.min(cluster.color[0] + colorNoise, 1),
        Math.min(cluster.color[1] + colorNoise, 1),
        Math.min(cluster.color[2] + colorNoise, 1),
        cluster.color[3],
      ],
    });
  }

  return particles;
}

export default function ParticleOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallViewport = window.matchMedia("(max-width: 768px)");

    if (!canvas || reducedMotion.matches || smallViewport.matches) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });

    if (!gl) {
      return;
    }

    const program = createProgram(gl);

    if (!program) {
      return;
    }

    const particles = createParticles();
    const stride = 10;
    const particleData = new Float32Array(particles.length * stride);

    particles.forEach((particle, index) => {
      const offset = index * stride;
      particleData[offset] = particle.x;
      particleData[offset + 1] = particle.y;
      particleData[offset + 2] = particle.speedX;
      particleData[offset + 3] = particle.speedY;
      particleData[offset + 4] = particle.size;
      particleData[offset + 5] = particle.phase;
      particleData[offset + 6] = particle.color[0];
      particleData[offset + 7] = particle.color[1];
      particleData[offset + 8] = particle.color[2];
      particleData[offset + 9] = particle.color[3];
    });

    const particleBuffer = gl.createBuffer();
    let animationFrame = 0;
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
      const width = Math.floor(window.innerWidth * pixelRatio);
      const height = Math.floor(window.innerHeight * pixelRatio);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const setAttribute = (
      name: string,
      size: number,
      offset: number,
    ) => {
      const location = gl.getAttribLocation(program, name);

      if (location === -1 || !particleBuffer) {
        return;
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(
        location,
        size,
        gl.FLOAT,
        false,
        stride * Float32Array.BYTES_PER_ELEMENT,
        offset * Float32Array.BYTES_PER_ELEMENT,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.y = (1 - event.clientY / window.innerHeight) * 2 - 1;
    };

    const handlePointerLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };

    if (particleBuffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, particleData, gl.STATIC_DRAW);
    }

    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    setAttribute("a_position", 2, 0);
    setAttribute("a_speed", 2, 2);
    setAttribute("a_size", 1, 4);
    setAttribute("a_phase", 1, 5);
    setAttribute("a_color", 3, 6);
    setAttribute("a_alpha", 1, 9);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const pointerLocation = gl.getUniformLocation(program, "u_pointer");

    const render = (time: number) => {
      resize();
      pointer.x += (pointerTarget.x - pointer.x) * 0.035;
      pointer.y += (pointerTarget.y - pointer.y) * 0.035;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(pointerLocation, pointer.x, pointer.y);
      gl.drawArrays(gl.POINTS, 0, particles.length);

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      gl.deleteBuffer(particleBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="landing-particles" aria-hidden="true" />;
}
