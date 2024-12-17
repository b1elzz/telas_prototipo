import React, { useState } from 'react';
import { Camera, Crown, Star, User } from 'lucide-react';

interface UserHeaderProps {
  user: {
    name: string;
    avatar: string;
    plan: 'basic' | 'pro' | 'premium';
  };
}

const planConfig = {
  basic: {
    color: 'bg-gray-400',
    icon: User,
    label: 'Básico'
  },
  pro: {
    color: 'bg-primary',
    icon: Star,
    label: 'Pro'
  },
  premium: {
    color: 'bg-primary-dark',
    icon: Crown,
    label: 'Premium'
  }
};

export function UserHeader({ user }: UserHeaderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const plan = planConfig[user.plan];

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <div
          className="w-32 h-32 rounded-full overflow-hidden relative cursor-pointer shadow-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          {isHovering && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity">
              <Camera className="w-8 h-8 text-white" />
            </div>
          )}
        </div>
      </div>

      <h1 className="mt-4 text-2xl font-semibold font-heading text-gray-900">
        {user.name}
      </h1>

      <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full space-x-2 text-white text-sm ${plan.color}`}>
        <plan.icon className="w-4 h-4" />
        <span>{plan.label}</span>
      </div>
    </div>
  );
}