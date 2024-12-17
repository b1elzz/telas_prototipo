import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Lembrete de Estudo', message: 'Sua sessão de estudos começa em 15 minutos', time: '5min' },
    { id: 2, title: 'Nova Recomendação', message: 'Confira o novo material personalizado', time: '1h' },
  ]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100 rounded-lg"
      >
        <Bell size={20} />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
          <h3 className="px-4 py-2 text-sm font-semibold text-gray-700">Notificações</h3>
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div key={notification.id} className="px-4 py-3 hover:bg-gray-50">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">{notification.title}</span>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}