import React from 'react';
import { Camera, Fire } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  plan: string;
  userType: string;
  streak: number;
  avatarUrl?: string;
}

export function ProfileHeader({ name, plan, userType, streak, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-2xl">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        <h2 className="mt-4 text-2xl font-bold text-gray-900">{name}</h2>
        
        <div className="mt-2 flex items-center space-x-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            {plan}
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600">{userType}</span>
        </div>
        
        <div className="mt-4 flex items-center text-orange-500">
          <Fire className="w-5 h-5 mr-2" />
          <span className="font-semibold">{streak} dias consecutivos</span>
        </div>
      </div>
    </div>
  );
}