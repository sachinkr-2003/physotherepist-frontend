import React from 'react';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import Swal from 'sweetalert2';

const AdminSettings = () => {
  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire('Saved', 'Admin settings updated successfully.', 'success');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <SettingsIcon className="w-6 h-6 mr-2 text-gray-500" /> Admin Settings
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-2xl">
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">General Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                <input type="text" defaultValue="VK Physiotherapy Centre" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <input type="email" defaultValue="support@vkphysio.com" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Security</h3>
            <button type="button" className="text-blue-600 font-medium hover:underline text-sm">
              Change Admin Password
            </button>
          </div>

          <button type="submit" className="w-full flex items-center justify-center py-3 px-4 bg-brand-green text-white rounded-md font-medium hover:bg-green-700 transition mt-6">
            <Save className="w-4 h-4 mr-2" /> Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
