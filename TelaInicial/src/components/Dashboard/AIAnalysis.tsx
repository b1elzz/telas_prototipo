import React from 'react';
import { Brain, TrendingUp, Clock } from 'lucide-react';

export function AIAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Brain className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Análise Inteligente</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Sugestões Personalizadas</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-indigo-600" />
              <span>Melhor horário para estudos: 9h - 11h</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
              <span>Produtividade aumentou 15% esta semana</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-4">Progresso Semanal</h3>
          <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
            {/* Placeholder para gráfico */}
            <span className="text-gray-400">Gráfico de Progresso</span>
          </div>
        </div>
      </div>
    </div>
  );
}