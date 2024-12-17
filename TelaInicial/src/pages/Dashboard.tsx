import React from 'react';
import { AIAnalysis } from '../components/Dashboard/AIAnalysis';
import { Calendar } from '../components/Dashboard/Calendar';
import { StudyTimer } from '../components/Dashboard/StudyTimer';
import { AIAssistant } from '../components/Dashboard/AIAssistant';

export function Dashboard() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Bem-vindo ao Mind Focus</h1>
            <p className="text-gray-600">
              Otimize seus estudos com nossas ferramentas alimentadas por IA e metodologias comprovadas.
            </p>
          </div>
          <StudyTimer />
        </div>
        <AIAssistant />
      </div>
      <div className="mt-6">
        <AIAnalysis />
        <Calendar />
      </div>
    </main>
  );
}