import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      <Navbar />
      <ProfilePage />
    </div>
  );
}

export default App;