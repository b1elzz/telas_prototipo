import React from 'react';
import { Calendar, Target, Clock } from 'lucide-react';

export function SmartPlanner() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-purple-600" />
        Planejador Inteligente
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <Target className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-medium text-gray-900">Cronogramas Adaptáveis</h3>
            <p className="text-sm text-gray-600 mt-1">Planejamento automático baseado em IA</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <Clock className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-medium text-gray-900">Intervalos Otimizados</h3>
            <p className="text-sm text-gray-600 mt-1">Sugestões de pausas para máxima produtividade</p>
          </div>
        </div>
      </div>
    </div>
  );
}