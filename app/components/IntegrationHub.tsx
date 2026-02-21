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
    cx: 14, cy: 43,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.7-4.24c.2-.18-.04-.28-.32-.1l-5.8 3.66-2.5-.78c-.54-.17-.55-.54.12-.8l9.77-3.77c.45-.17.84.1.81.66z" />
      </svg>
    ),
  },
  {
    name: 'Apple Health',
    bg: '#FF3B30',
    cx: 86, cy: 43,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <path d="M12 21.593c-.425-.394-8.591-7.948-8.591-12.39C3.409 5.374 6.303 3 9.193 3c1.82 0 3.403.97 4.807 2.393C15.408 3.97 16.985 3 18.807 3c2.89 0 5.784 2.374 5.784 6.203 0 4.442-8.166 11.996-8.591 12.39-.597.557-1.403.557-2 0z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    bg: '#25D366',
    cx: 72, cy: 69,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.878-1.42A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.077-1.112l-.293-.174-3.033.883.857-3.063-.191-.315A8 8 0 1 1 12 20z" />
      </svg>
    ),
  },
  {
    name: 'Google Calendar',
    bg: '#4285F4',
    cx: 50, cy: 26,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    ),
  },
  {
    name: 'Smart Watches',
    bg: '#1C1C1E',
    cx: 28, cy: 69,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <rect x="7" y="6" width="10" height="12" rx="3" />
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="9" y="18" width="6" height="4" rx="1" />
        <line x1="12" y1="9" x2="12" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="12" x2="14" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      {/* Center — STRV */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black shadow-2xl flex items-center justify-center">
          <img src="/strv-white.svg" alt="STRV" className="w-13 h-13 sm:w-16 sm:h-16" />
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
          <span className="text-gray-500 text-[10px] font-medium whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
