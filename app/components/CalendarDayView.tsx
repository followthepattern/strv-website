import React, { useEffect, useRef } from 'react';

interface CalendarEvent {
  id: string;
  title: string;
  startTime: string; // Format: "HH:MM"
  endTime: string;   // Format: "HH:MM"
  type: 'training' | 'coaching' | 'activity';
  color: string;
}

const defaultEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Morning Cardio',
    startTime: '06:00',
    endTime: '07:00',
    type: 'training',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Nutrition Planning',
    startTime: '08:30',
    endTime: '09:00',
    type: 'activity',
    color: 'bg-green-500'
  },
  {
    id: '3',
    title: 'Client Check-in: Sarah M.',
    startTime: '10:00',
    endTime: '11:00',
    type: 'coaching',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    title: 'Strength Training',
    startTime: '14:00',
    endTime: '15:30',
    type: 'training',
    color: 'bg-blue-500'
  },
  {
    id: '5',
    title: 'Client Session: John D.',
    startTime: '16:00',
    endTime: '17:00',
    type: 'coaching',
    color: 'bg-purple-500'
  },
  {
    id: '6',
    title: 'Meal Prep',
    startTime: '18:00',
    endTime: '19:00',
    type: 'activity',
    color: 'bg-green-500'
  }
];

const hours = Array.from({ length: 24 }, (_, i) => i);

function timeToPosition(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes) / 60;
}

function calculateEventStyle(startTime: string, endTime: string) {
  const start = timeToPosition(startTime);
  const end = timeToPosition(endTime);
  const duration = end - start;

  return {
    top: `${(start / 24) * 100}%`,
    height: `${(duration / 24) * 100}%`
  };
}

export default function CalendarDayView({ events = defaultEvents }: { events?: CalendarEvent[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to 2 PM (14:00) on mount
    if (scrollContainerRef.current) {
      const hourHeight = 60; // Height per hour in pixels
      const targetHour = 14; // 2 PM
      const scrollPosition = targetHour * hourHeight - 100; // Subtract 100 to show a bit before 2 PM
      scrollContainerRef.current.scrollTop = scrollPosition;
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden h-[500px] flex flex-col">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Today</h3>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto relative">
        <div className="relative" style={{ height: `${24 * 60}px` }}>
          {/* Time slots */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="absolute w-full border-b border-gray-100"
              style={{
                top: `${(hour / 24) * 100}%`,
                height: '60px'
              }}
            >
              <div className="flex">
                <div className="w-16 pr-2 text-right">
                  <span className="text-xs text-gray-500">
                    {hour.toString().padStart(2, '0')}:00
                  </span>
                </div>
                <div className="flex-1 border-l border-gray-200"></div>
              </div>
            </div>
          ))}

          {/* Events */}
          <div className="absolute left-16 right-0 top-0 bottom-0 pl-2 pr-2">
            {events.map((event) => {
              const style = calculateEventStyle(event.startTime, event.endTime);
              return (
                <div
                  key={event.id}
                  className={`absolute left-0 right-0 ${event.color} text-white rounded-md px-2 py-1 text-xs shadow-md overflow-hidden mx-1`}
                  style={style}
                >
                  <div className="font-semibold truncate">{event.title}</div>
                  <div className="text-xs opacity-90">
                    {event.startTime} - {event.endTime}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-gray-600">Training</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-gray-600">Coaching</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-gray-600">Activity</span>
        </div>
      </div>
    </div>
  );
}
