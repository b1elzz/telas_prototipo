import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'Grátis',
    features: [
      'Timer Pomodoro',
      'Biblioteca básica de métodos',
      'Calendário simples',
      'Limite de 5 cronogramas'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 29,90/mês',
    features: [
      'Todas as features do plano Básico',
      'Assistente de IA ilimitado',
      'Cronogramas ilimitados',
      'Sincronização com Google Calendar',
      'Relatórios detalhados',
      'Suporte prioritário'
    ]
  },
  {
    name: 'Premium',
    price: 'R$ 49,90/mês',
    features: [
      'Todas as features do plano Pro',
      'Mentoria personalizada',
      'Análise avançada de desempenho',
      'Recursos exclusivos de IA',
      'Acesso antecipado a novidades'
    ]
  }
];

export function Pricing() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comece gratuitamente e evolua conforme suas necessidades
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-2xl font-bold text-indigo-600">{plan.price}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Começar agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}