'use client'

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TrendingUp, Dumbbell, Scale } from 'lucide-react';
import { useTranslation } from "@/hooks/useTranslation";

type ProgressPoint = {
  week: string;
  bodyWeight: number;
  squat: number;
};

const data: ProgressPoint[] = [
  { week: "W1", bodyWeight: 95, squat: 92 },
  { week: "W2", bodyWeight: 94, squat: 94 },
  { week: "W3", bodyWeight: 92, squat: 98 },
  { week: "W4", bodyWeight: 91, squat: 112 },
  { week: "W5", bodyWeight: 91, squat: 117 },
  { week: "W6", bodyWeight: 90, squat: 121 },
  { week: "W7", bodyWeight: 89, squat: 123 },
];

export default function ProgressGraph() {
  const { t } = useTranslation();

  // Calculate improvements
  const squatImprovement = data[data.length - 1].squat - data[0].squat;
  const weightChange = data[data.length - 1].bodyWeight - data[0].bodyWeight;
  const squatPercent = ((squatImprovement / data[0].squat) * 100).toFixed(1);
  const weightPercent = ((Math.abs(weightChange) / data[0].bodyWeight) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="text-lg font-semibold text-gray-900">{t("progressGraphTitle")}</h3>
        <p className="text-xs text-gray-500 mt-1">{t("progressGraphSubtitle")}</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 py-3 grid grid-cols-2 gap-3 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center">
              <Dumbbell className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-700">{t("progressGraphSquat")}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{data[data.length - 1].squat}</span>
            <span className="text-xs text-gray-500">{t("progressGraphKg")}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <span className="text-xs text-green-600 font-semibold">+{squatImprovement} kg ({squatPercent}%)</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 border border-purple-200 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-sky-800 rounded flex items-center justify-center">
              <Scale className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">{t("progressGraphBodyWeight")}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{data[data.length - 1].bodyWeight}</span>
            <span className="text-xs text-gray-500">{t("progressGraphKg")}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-600 rotate-180" />
            <span className="text-xs text-green-600 font-semibold">{weightChange} kg ({weightPercent}%)</span>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="flex-1 px-4 py-3 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              domain={[70, 150]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />

            {/* Squat - solid green line */}
            <Line
              type="monotone"
              dataKey="squat"
              name={t("progressGraphSquatLegend")}
              stroke="#82ca9d"
              strokeWidth={3}
              dot={{ r: 4, fill: '#82ca9d', strokeWidth: 2, stroke: 'white' }}
              activeDot={{ r: 6 }}
            />

            {/* Body weight - dashed blue line */}
            <Line
              type="monotone"
              dataKey="bodyWeight"
              name={t("progressGraphBodyWeightLegend")}
              stroke="#8884d8"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ r: 4, fill: '#8884d8', strokeWidth: 2, stroke: 'white' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend - Custom */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-0.5 bg-[#82ca9d]"></div>
            <div className="w-2 h-2 bg-[#82ca9d] rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <span className="text-gray-600">{t("progressGraphStrength")} ↑</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="16" height="2" className="mt-0.5">
              <line x1="0" y1="1" x2="16" y2="1" stroke="#8884d8" strokeWidth="2" strokeDasharray="3 2" />
            </svg>
            <div className="w-2 h-2 bg-[#8884d8] rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <span className="text-gray-600">{t("progressGraphWeight")} ↓</span>
        </div>
      </div>
    </div>
  );
}
