import React from 'react';
import { Clock, BookOpen, Brain, Target } from 'lucide-react';

type StudyMethod = {
  name: string;
  count: number;
  icon: 'pomodoro' | 'active-recall' | 'mind-mapping' | 'spaced-repetition';
};

interface StudyMethodCardProps {
  method: StudyMethod;
}

const iconMap = {
  'pomodoro': Clock,
  'active-recall': BookOpen,
  'mind-mapping': Brain,
  'spaced-repetition': Target,
};

export function StudyMethodCard({ method }: StudyMethodCardProps) {
  const Icon = iconMap[method.icon];
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{method.name}</h3>
          <p className="text-sm text-gray-500">{method.count} sessões</p>
        </div>
      </div>
    </div>
  );
}