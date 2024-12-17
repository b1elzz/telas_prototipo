import React, { useState } from 'react';
import { Menu, X, Home, Calendar, Book, Settings, Moon, Sun } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="flex flex-col h-full pt-16 pb-6">
        <nav className="flex-1">
          <MenuItem icon={<Home />} label="Dashboard" isOpen={isOpen} />
          <MenuItem icon={<Calendar />} label="Agenda" isOpen={isOpen} />
          <MenuItem icon={<Book />} label="Estudos" isOpen={isOpen} />
          <MenuItem icon={<Settings />} label="Configurações" isOpen={isOpen} />
        </nav>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors ${isOpen ? 'mx-2 rounded-lg' : 'justify-center'}`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          {isOpen && <span>Modo {isDarkMode ? 'Claro' : 'Escuro'}</span>}
        </button>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, isOpen }: { icon: React.ReactNode; label: string; isOpen: boolean }) {
  return (
    <button className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 transition-colors ${isOpen ? 'mx-2 rounded-lg' : 'justify-center'}`}>
      {icon}
      {isOpen && <span>{label}</span>}
    </button>
  );
}