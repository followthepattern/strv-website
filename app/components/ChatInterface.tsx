'use client'

import { Play, Send } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const waveBarHeights = [35, 55, 70, 45, 80, 60, 90, 50, 65, 40, 75, 55, 85, 45, 60, 70, 40, 80, 55, 65];

function VoiceBubble({ duration }: { duration: string }) {
  return (
    <div className="bg-lime-600 rounded-2xl rounded-br-sm px-3 py-2 flex items-center gap-2 min-w-[160px]">
      <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
      </button>
      <div className="flex items-center gap-px h-6 flex-1">
        {waveBarHeights.map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-white/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <span className="text-white/80 text-xs shrink-0">{duration}</span>
    </div>
  );
}

export default function ChatInterface() {
  const { t } = useTranslation();

  const messages = [
    { role: 'user' as const, type: 'voice' as const, duration: '0:08' },
    { role: 'ai' as const, type: 'text' as const, text: t('chatAiMessage1') },
    { role: 'user' as const, type: 'text' as const, text: t('chatUserMessage2') },
    { role: 'ai' as const, type: 'text' as const, text: t('chatAiMessage2') },
  ];

  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col bg-gradient-to-br from-sky-800 to-teal-900">
      {/* App bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white/10 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">S</div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{t('chatAssistantName')}</p>
          <p className="text-white/50 text-xs">{t('chatOnline')}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col p-4 gap-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'voice' ? (
              <VoiceBubble duration={msg.duration} />
            ) : (
              <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                msg.role === 'user'
                  ? 'bg-lime-600 text-white rounded-br-sm'
                  : 'bg-white/15 text-white/90 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-t border-white/10">
        <input
          type="text"
          placeholder={t('chatInputPlaceholder')}
          className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/40 outline-none"
          readOnly
        />
        <button className="w-8 h-8 rounded-full bg-lime-600 flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
