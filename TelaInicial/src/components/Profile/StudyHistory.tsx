import React from 'react';
import { ChevronDown, Clock, BookOpen } from 'lucide-react';

interface StudySession {
  id: string;
  date: string;
  duration: string;
  subject: string;
  progress: number;
}

interface StudyHistoryProps {
  sessions: StudySession[];
}

export function StudyHistory({ sessions }: StudyHistoryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Estudos</h3>
      
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{session.subject}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{session.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{session.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="text-sm font-medium text-gray-900">
                    {session.progress}%
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${session.progress}%` }}
                    />
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}