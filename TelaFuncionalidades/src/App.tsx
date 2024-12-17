import React from 'react';
import { Header } from './components/layout/Header';
import { AIAssistant } from './components/ai/AIAssistant';
import { SmartPlanner } from './components/planner/SmartPlanner';
import { StudyMethods } from './components/study/StudyMethods';
import { FocusTools } from './components/focus/FocusTools';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIAssistant />
          <SmartPlanner />
          <StudyMethods />
          <FocusTools />
        </div>
      </main>
    </div>
  );
}

export default App;