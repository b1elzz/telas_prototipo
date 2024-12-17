import React from 'react';
import { StudyMethodCard } from '../StudyMethodCard';

interface StudyMetricsProps {
  methods: Array<{
    name: string;
    count: number;
    icon: 'pomodoro' | 'active-recall' | 'mind-mapping' | 'spaced-repetition';
  }>;
}

export function StudyMetrics({ methods }: StudyMetricsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Métodos de Estudo</h2>
      <div className="grid gap-4">
        {methods.map((method) => (
          <div
            key={method.name}
            className="transform hover:scale-[1.02] transition-transform duration-300"
          >
            <StudyMethodCard method={method} />
          </div>
        ))}
      </div>
    </div>
  );
}