import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const sugestoes = [
  'Como posso melhorar minha técnica de estudo?',
  'Qual o melhor horário para estudar?',
  'Como fazer resumos eficientes?',
  'Dicas para manter o foco nos estudos',
];

const respostasAutomaticas: Record<string, string> = {
  'oi': 'Olá! Como posso ajudar você hoje?',
  'bom dia': 'Bom dia! Em que posso ser útil?',
  'boa tarde': 'Boa tarde! Como posso ajudar?',
  'boa noite': 'Boa noite! Precisa de ajuda com algo?',
};

export function AIAssistant() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Olá! Como posso ajudar você com seus estudos hoje?', isUser: false },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setChat((prev) => [...prev, { text: userMessage, isUser: true }]);
    setMessage('');

    // Simula resposta automática
    const resposta = respostasAutomaticas[userMessage.toLowerCase()] || 
      'Entendi sua dúvida. Vou ajudar você com isso!';
    
    setTimeout(() => {
      setChat((prev) => [...prev, { text: resposta, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <MessageSquare className="text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Assistente de Estudos</h2>
      </div>

      <div className="h-64 bg-gray-50 rounded-md p-4 mb-4 overflow-y-auto">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                msg.isUser
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Sugestões:</div>
        <div className="flex flex-wrap gap-2">
          {sugestoes.map((sugestao, index) => (
            <button
              key={index}
              onClick={() => setMessage(sugestao)}
              className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
            >
              {sugestao}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua dúvida..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <Send className="h-4 w-4 mr-2" />
          Enviar
        </button>
      </form>
    </div>
  );
}