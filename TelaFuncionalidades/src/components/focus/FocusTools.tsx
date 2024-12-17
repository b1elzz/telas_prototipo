import React from 'react';
import { Shield, Timer, Trophy } from 'lucide-react';

export function FocusTools() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Shield className="w-5 h-5 text-purple-600" />
        Foco e Produtividade
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
          <Shield className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className="font-medium text-gray-900">Bloqueador de Distrações</h3>
            <p className="text-sm text-gray-600 mt-1">Mantenha o foco no que importa</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
          <Timer className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className="font-medium text-gray-900">Timer Inteligente</h3>
            <p className="text-sm text-gray-600 mt-1">Otimize seus períodos de estudo</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
          <Trophy className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className="font-medium text-gray-900">Gamificação</h3>
            <p className="text-sm text-gray-600 mt-1">Ganhe pontos e conquiste objetivos</p>
          </div>
        </div>
      </div>
    </div>
  );
}