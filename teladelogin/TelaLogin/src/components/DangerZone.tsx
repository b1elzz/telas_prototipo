import React, { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type: 'warning' | 'danger';
}

function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, type }: ConfirmDialogProps) {
  if (!isOpen) return null;

  const bgColor = type === 'warning' ? 'bg-yellow-50' : 'bg-red-50';
  const buttonColor = type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className={`${bgColor} rounded-lg p-6 max-w-md w-full`}>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-white ${buttonColor} transition-colors`}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export function DangerZone() {
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Trash2 className="w-5 h-5 text-yellow-600" />
          <span className="font-medium">Excluir Histórico de Estudos</span>
        </div>
        <button
          onClick={() => setShowHistoryDialog(true)}
          className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
        >
          Excluir
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <span className="font-medium">Excluir Conta</span>
        </div>
        <button
          onClick={() => setShowAccountDialog(true)}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Excluir
        </button>
      </div>

      <ConfirmDialog
        isOpen={showHistoryDialog}
        onClose={() => setShowHistoryDialog(false)}
        onConfirm={() => {
          // Handle history deletion
          setShowHistoryDialog(false);
        }}
        title="Excluir Histórico de Estudos"
        message="Tem certeza que deseja excluir todo o seu histórico de estudos? Esta ação não pode ser desfeita."
        type="warning"
      />

      <ConfirmDialog
        isOpen={showAccountDialog}
        onClose={() => setShowAccountDialog(false)}
        onConfirm={() => {
          // Handle account deletion
          setShowAccountDialog(false);
        }}
        title="Excluir Conta"
        message="Tem certeza que deseja excluir sua conta? Todos os seus dados serão perdidos permanentemente."
        type="danger"
      />
    </div>
  );
}