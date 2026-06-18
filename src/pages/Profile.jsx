import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, Calendar, FileText, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      // Fetch latest profile
      fetch(import.meta.env.VITE_API_URL + '/api/users/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch(err => console.error('Failed to fetch profile', err));
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const menuItems = [
    { name: 'My Appointments', icon: Calendar, path: '/appointments', color: 'text-brand-green' },
    { name: 'My Details', icon: User, path: '/profile/details', color: 'text-blue-500' },
    { name: 'Medical History', icon: FileText, path: '/profile/history', color: 'text-purple-500' },
    { name: 'Settings', icon: Settings, path: '/profile/settings', color: 'text-gray-500' },
    { name: 'Help & Support', icon: HelpCircle, path: '/profile/help', color: 'text-orange-500' },
  ];

  const handleLinkClick = (e, path, name) => {
    // Navigate directly since we removed the # links
  };

  return (
    <div className="bg-gray-50 min-h-screen md:pb-12 pb-6">

      {/* Desktop Header */}
      <div className="hidden md:flex flex-col items-center justify-center px-8 pt-10 pb-6 text-center">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Your Profile</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Manage your account, view your appointments, and update your medical history.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 mt-6">
        
        {/* User Card */}
        {user && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-green/10 rounded-full flex items-center justify-center overflow-hidden shrink-0 text-brand-green font-bold text-3xl">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-500 font-medium">
                {user.mobile ? `+91 ${user.mobile}` : 'Mobile not set'}
              </p>
              {user.email && <p className="text-gray-400 text-sm">{user.email}</p>}
              <div className="flex gap-2 mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-brand-green text-xs font-semibold rounded-full">
                  Patient
                </span>
                {user.patientId && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    ID: {user.patientId}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Menu List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              onClick={(e) => handleLinkClick(e, item.path, item.name)}
              className="flex items-center justify-between p-5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors border border-gray-100`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <span className="font-semibold text-gray-800 text-base">{item.name}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-colors" />
            </Link>
          ))}
          
          {/* Logout Button */}
          <button onClick={handleLogout} className="w-full flex items-center justify-between p-5 hover:bg-red-50 transition-colors group cursor-pointer text-left">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors border border-gray-100">
                <LogOut className="w-6 h-6 text-red-500" />
              </div>
              <span className="font-semibold text-red-600 text-base">Logout</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
