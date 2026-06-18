import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';
import { Capacitor } from '@capacitor/core';
import Footer from '../components/Footer';

const MainLayout = () => {
  const isNative = Capacitor.isNativePlatform();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col relative pb-16 md:pb-0">
      <TopNav />
      <main className="flex-grow w-full"> 
        <Outlet />
      </main>
      {!isNative && <Footer />}
      {/* Bottom Nav only shows on mobile (hidden on md screens and up) */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
