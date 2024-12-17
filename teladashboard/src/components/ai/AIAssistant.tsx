import React from 'react';
import { MessageSquare, Sparkles, LineChart } from 'lucide-react';

export function AIAssistant() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-purple-600" />
        Assistente IA
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <MessageSquare className="w-6 h-6 text-purple-600" />
          <div>
            <h3 className="font-medium text-gray-900">Chatbot Inteligente</h3>
            <p className="text-sm text-gray-600 mt-1">Tire suas dúvidas em tempo real com nosso assistente virtual</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <Sparkles className="w-6 h-6 text-purple-600" />
          <div>
            <h3 className="font-medium text-gray-900">Recomendações Personalizadas</h3>
            <p className="text-sm text-gray-600 mt-1">Receba sugestões de estudo baseadas no seu perfil</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
          <LineChart className="w-6 h-6 text-purple-600" />
          <div>
            <h3 className="font-medium text-gray-900">Análise de Desempenho</h3>
            <p className="text-sm text-gray-600 mt-1">Acompanhe seu progresso em tempo real</p>
          </div>
        </div>
      </div>
    </div>
  );
}