import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Home, ClipboardList, CalendarPlus, ImageIcon } from 'lucide-react';

const TopNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: ClipboardList },
    { name: 'Book Appointment', path: '/book-appointment', icon: CalendarPlus },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-1.5 md:gap-2">
            <div className="text-brand-blue font-bold text-2xl md:text-3xl tracking-tighter">VK</div>
            <div className="flex flex-col">
              <span className="text-brand-green font-bold text-[10px] md:text-sm leading-tight tracking-wider">PHYSIOTHERAPY</span>
              <span className="text-brand-blue font-bold text-[8px] md:text-xs leading-tight tracking-widest">CENTRE</span>
            </div>
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive 
                      ? 'text-brand-green border-b-2 border-brand-green pb-1' 
                      : 'text-gray-600 hover:text-brand-blue hover:border-b-2 hover:border-brand-blue pb-1'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <NavLink 
              to="/profile" 
              onClick={() => window.scrollTo(0, 0)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-brand-green transition-colors"
            >
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </NavLink>
            <NavLink 
              to="/book-appointment" 
              className="hidden md:flex bg-brand-blue hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm"
            >
              Consult Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
