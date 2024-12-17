import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw } from 'lucide-react';

export function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setType(type === 'work' ? 'break' : 'work');
      setTime(type === 'work' ? 5 * 60 : 25 * 60);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time, type]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const reset = () => {
    setTime(25 * 60);
    setIsActive(false);
    setType('work');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Timer className="w-5 h-5 text-purple-600" />
        Pomodoro Timer
      </h2>

      <div className="text-center">
        <div className="text-4xl font-bold mb-4">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            {isActive ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={reset}
            className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="text-sm text-gray-600">
          {type === 'work' ? 'Tempo de Foco' : 'Tempo de Descanso'}
        </div>
      </div>
    </div>
  );
}