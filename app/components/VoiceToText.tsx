'use client'

import React from 'react';
import { Mic, CheckCircle2, Calendar, Dumbbell, Apple } from 'lucide-react';
import { useTranslation } from "@/hooks/useTranslation";

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  textKey: string;
  category: 'training' | 'nutrition' | 'schedule';
  color: string;
}

export default function VoiceToText() {
  const { t } = useTranslation();

  const actionItems: ActionItem[] = [
    {
      id: '1',
      icon: <Dumbbell className="w-4 h-4" />,
      textKey: 'voiceToTextAction1',
      category: 'training',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      icon: <Apple className="w-4 h-4" />,
      textKey: 'voiceToTextAction2',
      category: 'nutrition',
      color: 'bg-green-500'
    },
    {
      id: '3',
      icon: <Calendar className="w-4 h-4" />,
      textKey: 'voiceToTextAction3',
      category: 'schedule',
      color: 'bg-purple-500'
    }
  ];
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden h-full max-h-[500px] flex flex-col">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="text-lg font-semibold text-gray-900">{t("voiceToTextTitle")}</h3>
        <p className="text-xs text-gray-500 mt-1">{t("voiceToTextSubtitle")}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {/* Voice Message Bubble */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-sky-800 to-teal-950 flex items-center justify-center">
            <span className="text-white font-bold text-sm">SM</span>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-sky-800 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="h-6 flex items-center gap-0.5">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-sky-800 rounded-full"
                        style={{
                          height: `${Math.random() * 100}%`,
                          opacity: 0.7
                        }}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-mono">0:42</span>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                {t("voiceToTextProcessing")}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">{t("voiceToTextUser")}</p>
          </div>
        </div>

        {/* Action Items */}
        <div className="ml-13">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-900">{t("voiceToTextActionItems")}</span>
              <span className="text-xs text-gray-500">{actionItems.length} {t("voiceToTextItems")}</span>
            </div>
            <div className="space-y-2">
              {actionItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100"
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className={`flex-shrink-0 w-6 h-6 ${item.color} rounded flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{t(item.textKey as any)}</p>
                    <span className="text-xs text-gray-500 capitalize">{t(`voiceToTextCategory${item.category.charAt(0).toUpperCase() + item.category.slice(1)}` as any)}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
