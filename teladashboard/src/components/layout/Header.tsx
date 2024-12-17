import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold text-gray-900">Mind Focus</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Biblioteca</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Agenda</a>
          <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Perfil</a>
        </div>
      </nav>
    </header>
  );
}