import React, { useState } from 'react';
import { Timer, Book, ChevronDown, ChevronUp } from 'lucide-react';

interface TechniqueProps {
  title: string;
  description: string;
  steps: string[];
  icon: React.ReactNode;
}

function Technique({ title, description, steps, icon }: TechniqueProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-white flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-left">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export function StudyTechniques() {
  return (
    <div className="space-y-4">
      <Technique
        title="Técnica Pomodoro"
        description="Maximize sua produtividade com intervalos estratégicos"
        icon={<Timer className="w-6 h-6 text-blue-600" />}
        steps={[
          "Defina uma tarefa específica para trabalhar",
          "Configure o timer para 25 minutos",
          "Trabalhe com foco total até o timer tocar",
          "Faça uma pausa curta de 5 minutos",
          "Após 4 pomodoros, faça uma pausa longa de 15 minutos"
        ]}
      />

      <Technique
        title="Método Feynman"
        description="Aprenda conceitos complexos explicando-os de forma simples"
        icon={<Book className="w-6 h-6 text-blue-600" />}
        steps={[
          "Escolha e estude o conceito que deseja aprender",
          "Explique o conceito como se estivesse ensinando a um iniciante",
          "Identifique lacunas no seu conhecimento",
          "Revise e simplifique sua explicação",
          "Repita o processo até dominar completamente o assunto"
        ]}
      />
    </div>
  );
}