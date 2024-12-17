import React from 'react';
import { Brain, Check, X } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">Mind Focus</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Planos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Sobre Nós</a>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Entrar</a>
          </div>
        </nav>
      </header>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comece gratuitamente e evolua conforme suas necessidades
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">Básico</h3>
            <p className="mt-4 text-3xl font-bold text-purple-600">Grátis</p>
            <p className="mt-2 text-sm text-gray-500">Para começar sua jornada</p>

            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Timer Pomodoro</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Biblioteca básica de métodos</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Calendário simples</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Limite de 5 cronogramas</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-gray-400" />
                <span className="ml-3 text-gray-400">Assistente de IA ilimitado</span>
              </li>
            </ul>

            <button className="mt-8 w-full bg-purple-100 text-purple-600 py-3 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors">
              Começar agora
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-600 flex flex-col relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2">
              <span className="bg-purple-600 text-white text-sm py-1 px-3 rounded-full">Popular</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <p className="mt-4 text-3xl font-bold text-purple-600">R$ 29,90<span className="text-lg font-normal text-gray-500">/mês</span></p>
            <p className="mt-2 text-sm text-gray-500">Para usuários avançados</p>

            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Todas as features do plano Básico</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Assistente de IA ilimitado</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Cronogramas ilimitados</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Sincronização com Google Calendar</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Relatórios detalhados</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Suporte prioritário</span>
              </li>
            </ul>

            <button className="mt-8 w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Começar agora
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
            <p className="mt-4 text-3xl font-bold text-purple-600">R$ 49,90<span className="text-lg font-normal text-gray-500">/mês</span></p>
            <p className="mt-2 text-sm text-gray-500">Para máxima produtividade</p>

            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Todas as features do plano Pro</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Mentoria personalizada</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Análise avançada de desempenho</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Recursos exclusivos de IA</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Acesso antecipado a novidades</span>
              </li>
            </ul>

            <button className="mt-8 w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Começar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;