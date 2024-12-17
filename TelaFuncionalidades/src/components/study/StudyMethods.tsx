import React from 'react';
import { BookOpen, Play, UserCheck } from 'lucide-react';

export function StudyMethods() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-purple-600" />
        Metodologias de Estudo
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
          <Play className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="font-medium text-gray-900">Técnica Pomodoro</h3>
            <p className="text-sm text-gray-600 mt-1">Gerencie seu tempo de forma eficiente</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
          <UserCheck className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="font-medium text-gray-900">Método Feynman</h3>
            <p className="text-sm text-gray-600 mt-1">Aprenda ensinando outros</p>
          </div>
        </div>
      </div>
    </div>
  );
}