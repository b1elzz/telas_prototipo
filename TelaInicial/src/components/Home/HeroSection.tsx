import React from 'react';
import { Brain, Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10">
          <Brain className="w-72 h-72 text-indigo-600" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Sparkles className="w-72 h-72 text-purple-600" />
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Potencialize seus estudos com IA
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubra uma nova forma de estudar com nossa plataforma inteligente que se adapta ao seu estilo de aprendizagem
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="w-full px-6 py-3 rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
            <button className="w-full sm:w-auto whitespace-nowrap px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-100 rounded-full">
                <Brain className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-600">IA Personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-100 rounded-full">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Métodos Comprovados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}