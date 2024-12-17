import React, { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  type: 'warning' | 'danger';
  requirePassword?: boolean;
}

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  type,
  requirePassword
}: DeleteModalProps) {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const bgColor = type === 'warning' ? 'bg-[#F59E0B]' : 'bg-[#DC2626]';
  const lightBgColor = type === 'warning' ? 'bg-yellow-50' : 'bg-red-50';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${lightBgColor} rounded-lg p-6 max-w-md w-full`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {requirePassword && (
          <input
            type="password"
            placeholder="Digite sua senha para confirmar"
            className="w-full px-3 py-2 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-white ${bgColor} hover:opacity-90 transition-colors`}
            disabled={requirePassword && !password}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export function DangerZone() {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  return (
    <div className="space-y-4 max-w-lg">
      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Trash2 className="w-5 h-5 text-[#F59E0B]" />
          <span className="font-medium">Excluir Histórico de Estudos</span>
        </div>
        <button
          onClick={() => setShowHistoryModal(true)}
          className="px-4 py-2 rounded-lg bg-[#F59E0B] text-white hover:opacity-90 transition-colors"
        >
          Excluir
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-5 h-5 text-[#DC2626]" />
          <span className="font-medium">Excluir Conta</span>
        </div>
        <button
          onClick={() => setShowAccountModal(true)}
          className="px-4 py-2 rounded-lg bg-[#DC2626] text-white hover:opacity-90 transition-colors"
        >
          Excluir
        </button>
      </div>

      <DeleteModal
        isOpen={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
        onConfirm={() => {
          console.log('Deleting history...');
          setShowHistoryModal(false);
        }}
        title="Excluir Histórico de Estudos"
        description="Esta ação irá apagar todo o seu histórico de estudos. Esta ação não pode ser desfeita."
        type="warning"
      />

      <DeleteModal
        isOpen={showAccountModal}
        onClose={() => setShowAccountModal(false)}
        onConfirm={() => {
          console.log('Deleting account...');
          setShowAccountModal(false);
        }}
        title="Excluir Conta"
        description="Esta ação irá excluir permanentemente sua conta e todos os dados associados. Esta ação não pode ser desfeita."
        type="danger"
        requirePassword
      />
    </div>
  );
}