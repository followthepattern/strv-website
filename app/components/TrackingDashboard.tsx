'use client'

import { Flame, Moon, Scale, Zap, CheckCircle2, Circle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const weekDays = [
  { key: 'dashboardMon', done: true, intensity: 100 },
  { key: 'dashboardTue', done: true, intensity: 85 },
  { key: 'dashboardWed', done: true, intensity: 70 },
  { key: 'dashboardThu', done: false, intensity: 0 },
  { key: 'dashboardFri', done: false, intensity: 0 },
];

const recentActivity = [
  { icon: '🏋️', labelKey: 'dashboardActivity1', valueKey: 'dashboardActivity1Value' },
  { icon: '🍽️', labelKey: 'dashboardActivity2', valueKey: 'dashboardActivity2Value' },
  { icon: '😴', labelKey: 'dashboardActivity3', valueKey: 'dashboardActivity3Value' },
];

export default function TrackingDashboard() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col text-sm">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{t('dashboardTitle')}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{t('dashboardSubtitle')}</p>
        </div>
        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{t('dashboardLive')}</span>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-4 gap-2 px-3 py-3 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="bg-white rounded-xl p-2.5 border border-orange-100 shadow-sm flex flex-col gap-1">
          <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
            <Flame className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 leading-none">2,340</span>
          <span className="text-[10px] text-gray-500 leading-none">{t('dashboardKcal')}</span>
        </div>

        <div className="bg-white rounded-xl p-2.5 border border-indigo-100 shadow-sm flex flex-col gap-1">
          <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
            <Moon className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 leading-none">7.5h</span>
          <span className="text-[10px] text-gray-500 leading-none">{t('dashboardSleep')}</span>
        </div>

        <div className="bg-white rounded-xl p-2.5 border border-sky-100 shadow-sm flex flex-col gap-1">
          <div className="w-6 h-6 rounded-md bg-sky-600 flex items-center justify-center">
            <Scale className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 leading-none">89<span className="text-xs font-normal">kg</span></span>
          <span className="text-[10px] text-gray-500 leading-none">{t('dashboardWeight')}</span>
        </div>

        <div className="bg-white rounded-xl p-2.5 border border-lime-100 shadow-sm flex flex-col gap-1">
          <div className="w-6 h-6 rounded-md bg-lime-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 leading-none">12🔥</span>
          <span className="text-[10px] text-gray-500 leading-none">{t('dashboardStreak')}</span>
        </div>
      </div>

      {/* Weekly training */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('dashboardWeekTitle')}</p>
        <div className="flex flex-col gap-1.5">
          {weekDays.map((day) => (
            <div key={day.key} className="flex items-center gap-2">
              <span className="w-7 text-xs text-gray-500 shrink-0">{t(day.key as any)}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500"
                  style={{ width: `${day.intensity}%` }}
                />
              </div>
              {day.done
                ? <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                : <Circle className="w-3.5 h-3.5 text-gray-300 shrink-0" />
              }
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="px-4 py-3 border-t border-gray-100 flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('dashboardRecentTitle')}</p>
        <div className="flex flex-col gap-2">
          {recentActivity.map((item) => (
            <div key={item.labelKey} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-xs text-gray-700">{t(item.labelKey as any)}</span>
              </div>
              <span className="text-xs text-gray-400">{t(item.valueKey as any)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
