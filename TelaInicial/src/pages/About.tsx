import React from 'react';
import { Brain, Target, Users, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre o Mind Focus
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Somos uma plataforma dedicada a revolucionar a forma como as pessoas estudam,
            combinando tecnologia de ponta com métodos comprovados de aprendizagem.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nossa Missão</h3>
              <p className="mt-2 text-gray-600">
                Capacitar estudantes com ferramentas e métodos inovadores para
                maximizar seu potencial de aprendizagem.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Brain className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nossa Visão</h3>
              <p className="mt-2 text-gray-600">
                Ser a principal plataforma de otimização de estudos,
                transformando a educação através da tecnologia.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nossa Equipe</h3>
              <p className="mt-2 text-gray-600">
                Formada por especialistas em educação, desenvolvedores e
                pesquisadores comprometidos com a excelência.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Por que escolher o Mind Focus?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Metodologia Comprovada
              </h4>
              <p className="text-gray-600">
                Combinamos técnicas tradicionais com inovação tecnológica para
                oferecer a melhor experiência de estudo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Tecnologia de Ponta
              </h4>
              <p className="text-gray-600">
                Nossa IA avançada se adapta ao seu estilo de aprendizagem para
                maximizar seus resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}