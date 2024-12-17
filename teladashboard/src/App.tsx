import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Notifications } from './components/dashboard/Notifications';
import { Chatbot } from './components/dashboard/Chatbot';
import { Calendar } from './components/dashboard/Calendar';
import { PomodoroTimer } from './components/dashboard/PomodoroTimer';
import { ScheduleCreator } from './components/schedule/ScheduleCreator';
import { StudyTechniques } from './components/study/StudyTechniques';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      
      <div className="ml-20 lg:ml-64 min-h-screen">
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Calendar />
              <StudyTechniques />
            </div>
            <div className="space-y-6">
              <PomodoroTimer />
            </div>
          </div>
        </main>
      </div>

      <ScheduleCreator />
      <Chatbot />
    </div>
  );
}