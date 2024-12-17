import React, { useState } from 'react';
import { Bell, Lock, Upload } from 'lucide-react';

interface Preferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  profilePrivacy: 'public' | 'private';
}

export function UserPreferences() {
  const [preferences, setPreferences] = useState<Preferences>({
    emailNotifications: true,
    pushNotifications: true,
    profilePrivacy: 'public',
  });

  const handleChange = (key: keyof Preferences, value: boolean | string) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Preferências</h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
            <Bell className="w-4 h-4 mr-2" />
            Notificações
          </h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.emailNotifications}
                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Receber notificações por e-mail
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.pushNotifications}
                onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Receber notificações push
              </span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
            <Lock className="w-4 h-4 mr-2" />
            Privacidade
          </h4>
          <select
            value={preferences.profilePrivacy}
            onChange={(e) => handleChange('profilePrivacy', e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="public">Perfil Público</option>
            <option value="private">Perfil Privado</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
            <Upload className="w-4 h-4 mr-2" />
            Foto de Perfil
          </h4>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Carregar arquivo</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG até 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salvar Preferências
        </button>
      </div>
    </div>
  );
}