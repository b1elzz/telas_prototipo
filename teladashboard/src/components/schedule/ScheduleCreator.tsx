import React, { useState } from 'react';
import { Plus, Clock, Flag, Calendar as CalendarIcon } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  datetime: string;
  priority: 'high' | 'medium' | 'low';
  duration: number;
}

export function ScheduleCreator() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Task>({
    id: '',
    name: '',
    datetime: '',
    priority: 'medium',
    duration: 30
  });

  const priorityColors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-green-600 bg-green-50'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <Plus size={20} />
        Criar Cronograma
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Criar Nova Tarefa</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Tarefa
                </label>
                <input
                  type="text"
                  value={task.name}
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o nome da tarefa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data e Hora
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="datetime-local"
                    value={task.datetime}
                    onChange={(e) => setTask({ ...task, datetime: e.target.value })}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prioridade
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['high', 'medium', 'low'] as const).map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setTask({ ...task, priority })}
                      className={`px-3 py-2 rounded-lg border ${
                        task.priority === priority
                          ? priorityColors[priority]
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <Flag size={16} className="mx-auto mb-1" />
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duração (minutos)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={task.duration}
                    onChange={(e) => setTask({ ...task, duration: parseInt(e.target.value) })}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="5"
                    step="5"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  // Handle task creation
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Criar Tarefa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}