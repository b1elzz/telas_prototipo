import React from 'react';
import { ProfileHeader } from '../components/Profile/ProfileHeader';
import { StudyHistory } from '../components/Profile/StudyHistory';
import { DeleteAccount } from '../components/Profile/DeleteAccount';

const mockSessions = [
  {
    id: '1',
    date: '15 Mar 2024',
    duration: '2h 30min',
    subject: 'Cálculo III',
    progress: 75,
  },
  {
    id: '2',
    date: '14 Mar 2024',
    duration: '1h 45min',
    subject: 'Física Quântica',
    progress: 60,
  },
  {
    id: '3',
    date: '13 Mar 2024',
    duration: '3h',
    subject: 'Estrutura de Dados',
    progress: 90,
  },
];

export function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ProfileHeader
        name="João Silva"
        plan="Premium"
        userType="Estudante Universitário"
        streak={47}
      />
      <StudyHistory sessions={mockSessions} />
      <div className="mt-12">
        <DeleteAccount />
      </div>
    </div>
  );
}