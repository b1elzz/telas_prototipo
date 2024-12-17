import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { validateEmail } from '../../utils/validation';

interface ForgotPasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
}

export function ForgotPasswordDialog({ isOpen, onClose, onSubmit }: ForgotPasswordDialogProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Digite um email válido');
      return;
    }

    try {
      setIsLoading(true);
      await onSubmit(email);
      setIsSuccess(true);
    } catch (error) {
      setError('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">
          {isSuccess ? 'Email Enviado' : 'Recuperar Senha'}
        </h2>

        {isSuccess ? (
          <div className="space-y-4">
            <p className="text-gray-600">
              Enviamos um email com instruções para redefinir sua senha.
            </p>
            <Button onClick={onClose} className="w-full">
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-gray-600">
              Digite seu email para receber instruções de recuperação de senha.
            </p>

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <div className="flex justify-end space-x-3">
              <Button type="button" variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" isLoading={isLoading}>
                Enviar
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}