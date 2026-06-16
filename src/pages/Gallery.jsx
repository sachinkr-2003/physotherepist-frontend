import React from 'react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  // Placeholder images for clinic, equipment, and therapy
  const images = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="bg-gray-50 min-h-screen md:pb-12 pb-6">

      {/* Desktop Header */}
      <div className="hidden md:flex flex-col items-center justify-center px-8 pt-12 pb-8 text-center bg-white shadow-sm mb-8 border-b border-gray-100">
        <div className="bg-brand-green/10 p-4 rounded-full mb-4">
          <ImageIcon className="w-8 h-8 text-brand-green" />
        </div>
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Our Clinic Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a tour of our state-of-the-art facilities, advanced equipment, and comfortable treatment rooms designed for your recovery.
        </p>
      </div>

      {/* Grid */}
      <div className="p-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Number indicator */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-brand-green rounded-full text-white text-xs md:text-sm flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
