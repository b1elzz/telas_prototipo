import React from 'react';
import { UserHeader } from '../components/profile/UserHeader';
import { StudyMetrics } from '../components/profile/StudyMetrics';
import { WeeklyProgress } from '../components/profile/WeeklyProgress';
import { DangerZone } from '../components/profile/DangerZone';

const mockUser = {
  name: 'Ana Silva',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120',
  plan: 'premium' as const,
};

const mockStudyMethods = [
  { name: 'Pomodoro', count: 42, icon: 'pomodoro' },
  { name: 'Técnica Feynman', count: 28, icon: 'active-recall' },
  { name: 'Mapeamento Mental', count: 15, icon: 'mind-mapping' },
  { name: 'Revisão De Estudos', count: 33, icon: 'spaced-repetition' },
];

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <UserHeader user={mockUser} />
        
        <div className="grid gap-6 md:grid-cols-2">
          <StudyMetrics methods={mockStudyMethods} />
          <WeeklyProgress />
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Configurações</h2>
          <DangerZone />
        </div>
      </div>
    </div>
  );
}