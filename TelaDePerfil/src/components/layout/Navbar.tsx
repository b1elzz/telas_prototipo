import React from 'react';
import { Brain } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-[#6C5CE7]" />
            <span className="ml-2 text-xl font-semibold text-[#6C5CE7]">Mind Focus</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#6C5CE7]">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-[#6C5CE7]">Planos</a>
            <a href="#" className="text-gray-600 hover:text-[#6C5CE7]">Sobre Nós</a>
            <button className="bg-[#6C5CE7] text-white px-4 py-2 rounded-lg hover:bg-[#5849e4] transition-colors">
              Perfil
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}