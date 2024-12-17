import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const suggestions = [
    'Como funciona o método Pomodoro?',
    'Qual o melhor horário para estudar?',
    'Como criar um cronograma eficiente?',
  ];

  return (
    <div className="fixed bottom-6 right-6">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-purple-600 text-white">
            <h3 className="font-semibold">Assistente Virtual</h3>
          </div>
          
          <div className="h-96 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="bg-purple-50 rounded-lg p-3 ml-auto max-w-[80%]">
                Como posso ajudar você hoje?
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Sugestões:</p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="block text-sm text-purple-600 hover:text-purple-700"
                    onClick={() => setMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}