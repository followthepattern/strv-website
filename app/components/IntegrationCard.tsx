import React from 'react';

interface IntegrationCardProps {
  icon: React.ReactNode;
  name: string;
  bg: string;
}

export default function IntegrationCard({ icon, name, bg }: IntegrationCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
        {icon}
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight">{name}</span>
    </div>
  );
}
