import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ClipboardList, CalendarPlus, Image as ImageIcon, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: ClipboardList },
    { name: 'Book', path: '/book-appointment', icon: CalendarPlus },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive ? 'text-brand-green' : 'text-gray-500 hover:text-brand-blue'
              }`
            }
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
