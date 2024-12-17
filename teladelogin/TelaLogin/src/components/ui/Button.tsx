import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  isLoading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500",
    link: "text-indigo-600 hover:text-indigo-700 hover:underline px-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} ${
        isLoading ? 'opacity-75 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}