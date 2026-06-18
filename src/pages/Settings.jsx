import React from 'react';
import { ArrowLeft, Settings as SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Settings = () => {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire('Saved', 'Your preferences have been updated.', 'success');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 mb-6 hover:text-brand-green">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-brand-blue flex items-center">
        <SettingsIcon className="w-6 h-6 mr-2 text-gray-500" /> Settings
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Notifications</h3>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-green rounded" defaultChecked />
              <span className="text-gray-700">SMS Reminders for Appointments</span>
            </label>
            <label className="flex items-center space-x-3 mt-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-green rounded" defaultChecked />
              <span className="text-gray-700">Promotional Offers</span>
            </label>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Security</h3>
            <button type="button" className="text-blue-600 font-medium hover:underline text-sm">
              Change Password
            </button>
          </div>

          <button type="submit" className="w-full bg-brand-green text-white py-3 rounded-md font-medium hover:bg-green-700 transition mt-6">
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
