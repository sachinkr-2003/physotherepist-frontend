import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-green rounded-full animate-spin"></div>
        <div className="absolute w-10 h-10 border-4 border-gray-100 border-b-brand-blue rounded-full animate-spin direction-reverse" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default Loader;
