import React, { useState } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { ForgotPasswordDialog } from '../components/auth/ForgotPasswordDialog';

export function LoginPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Implement actual login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleForgotPassword = async (email: string) => {
    // Implement actual password recovery logic here
    console.log('Password recovery for:', email);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Mind Focus
        </h1>
        
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <LoginForm
            onSubmit={handleLogin}
            onForgotPassword={() => setShowForgotPassword(true)}
          />
        </div>
      </div>

      <ForgotPasswordDialog
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onSubmit={handleForgotPassword}
      />
    </div>
  );
}