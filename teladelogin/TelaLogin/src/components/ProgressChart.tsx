import React from 'react';
import { TrendingUp } from 'lucide-react';

export function ProgressChart() {
  const progress = 75; // Example progress percentage

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">Progresso nos Estudos</h3>
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
              Progresso
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-green-600">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-50">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  );
}