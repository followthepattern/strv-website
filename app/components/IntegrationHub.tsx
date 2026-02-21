'use client'

import React from 'react';

interface HubItem {
  name: string;
  bg: string;
  icon: React.ReactNode;
  cx: number; // percentage 0–100 across container
  cy: number; // percentage 0–100 down container
}

const items: HubItem[] = [
  {
    name: 'Telegram',
    bg: '#229ED9',
    cx: 50, cy: 6,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.7-4.24c.2-.18-.04-.28-.32-.1l-5.8 3.66-2.5-.78c-.54-.17-.55-.54.12-.8l9.77-3.77c.45-.17.84.1.81.66z" />
      </svg>
    ),
  },
  {
    name: 'Garmin',
    bg: '#003087',
    cx: 85, cy: 19,
    icon: <span className="text-white font-black text-lg leading-none">G</span>,
  },
  {
    name: 'Apple Health',
    bg: '#FF3B30',
    cx: 93, cy: 50,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 21.593c-.425-.394-8.591-7.948-8.591-12.39C3.409 5.374 6.303 3 9.193 3c1.82 0 3.403.97 4.807 2.393C15.408 3.97 16.985 3 18.807 3c2.89 0 5.784 2.374 5.784 6.203 0 4.442-8.166 11.996-8.591 12.39-.597.557-1.403.557-2 0z" />
      </svg>
    ),
  },
  {
    name: 'Strava',
    bg: '#FC4C02',
    cx: 85, cy: 81,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    bg: '#25D366',
    cx: 50, cy: 94,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.878-1.42A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.077-1.112l-.293-.174-3.033.883.857-3.063-.191-.315A8 8 0 1 1 12 20z" />
      </svg>
    ),
  },
  {
    name: 'Apple Watch',
    bg: '#1C1C1E',
    cx: 15, cy: 81,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <rect x="7" y="6" width="10" height="12" rx="3" />
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="9" y="18" width="6" height="4" rx="1" />
        <line x1="12" y1="9" x2="12" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="12" x2="14" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Polar',
    bg: '#C8102E',
    cx: 7, cy: 50,
    icon: <span className="text-white font-black text-lg leading-none">P</span>,
  },
  {
    name: 'Google Fit',
    bg: '#4285F4',
    cx: 15, cy: 19,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-7h2v7zm0-9h-2V5.5h2V7.5z" />
      </svg>
    ),
  },
];

const CENTER = { x: 50, y: 50 };

export default function IntegrationHub() {
  return (
    <div className="relative w-full h-[420px] sm:h-[500px] max-w-2xl mx-auto select-none">
      {/* SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -8; }
            }
            .hub-line {
              stroke-dasharray: 2 2;
              animation: dash 2s linear infinite;
            }
          `}</style>
        </defs>
        {items.map((item) => (
          <line
            key={item.name}
            className="hub-line"
            x1={CENTER.x}
            y1={CENTER.y}
            x2={item.cx}
            y2={item.cy}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      {/* Center — STRV */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDuration: '2.5s' }} />
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-600 to-teal-700 border-2 border-white/30 shadow-2xl flex flex-col items-center justify-center gap-0.5">
          <img src="/strv-white.svg" alt="STRV" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="text-white text-[10px] font-bold tracking-wide opacity-80">STRV.AI</span>
        </div>
      </div>

      {/* Integration icons */}
      {items.map((item) => (
        <div
          key={item.name}
          className="absolute z-10 flex flex-col items-center gap-1.5"
          style={{
            left: `${item.cx}%`,
            top: `${item.cy}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: item.bg }}
          >
            {item.icon}
          </div>
          <span className="text-white/70 text-[10px] font-medium whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
