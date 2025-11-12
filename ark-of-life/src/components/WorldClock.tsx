'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const TIMEZONES = [
  'UTC',
  'Europe/London',
  'Europe/Berlin',
  'Europe/Paris',
  'Europe/Kyiv',
  'Europe/Moscow',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Sao_Paulo',
  'Asia/Dubai',
  'Asia/Kolkata',
  'Asia/Shanghai',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Pacific/Auckland',
];

export default function WorldClock() {
  const [selectedZone, setSelectedZone] = useState<string>('Europe/Kyiv');
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Використовуємо toZonedTime для конвертації поточного часу в обрану часову зону
  const zoned = toZonedTime(now, selectedZone);
  const timeStr = format(zoned, 'HH:mm:ss');
  const dateStr = format(zoned, 'dd LLL yyyy');

  return (
    <div className="world-clock">
      <div className="world-clock__controls mb-3">
        <label htmlFor="tz-select" className="me-2">Timezone:</label>
        <select
          id="tz-select"
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
        >
          {TIMEZONES.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>

      <div className="world-clock__display">
        <div className="world-clock__date">{dateStr}</div>
        <div className="world-clock__time display-5 fw-bold">{timeStr}</div>
        <div className="world-clock__zone text-muted mt-1">{selectedZone}</div>
      </div>
    </div>
  );
}