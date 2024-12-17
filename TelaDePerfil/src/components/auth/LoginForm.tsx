import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { validateEmail, validatePassword } from '../../utils/validation';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  onForgotPassword: () => void;
}

export function LoginForm({ onSubmit, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate fields
    const newErrors: Record<string, string> = {};
    
    if (!validateEmail(email)) {
      newErrors.email = 'Digite um email válido';
    }
    
    if (!validatePassword(password)) {
      newErrors.password = 'A senha deve ter pelo menos 8 caracteres';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    try {
      setIsLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setErrors({ submit: 'Email ou senha incorretos' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        error={errors.email}
        icon={<Mail className="w-5 h-5 text-gray-400" />}
      />

      <Input
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        error={errors.password}
        icon={<Lock className="w-5 h-5 text-gray-400" />}
      />

      {errors.submit && (
        <div className="text-sm text-red-600 text-center">
          {errors.submit}
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="link"
          onClick={onForgotPassword}
        >
          Esqueceu sua senha?
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        Entrar
      </Button>
    </form>
  );
}