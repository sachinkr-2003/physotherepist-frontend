import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen md:pb-12 pb-6">

      {/* Desktop Header */}
      <div className="hidden md:block px-8 pt-10 pb-6 text-center">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Complete Physiotherapy Care</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of specialized therapies designed to help you recover faster and live a pain-free life.</p>
      </div>

      {/* Services Grid */}
      <div className="p-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
        {servicesData.map((service) => (
          <Link 
            to={`/services/${service.slug}`} 
            key={service.id} 
            className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 flex md:flex-col items-center md:items-start shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 mb-0 md:mb-4 transition-colors ${service.color} ${service.hoverColor}`}>
              <service.icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            
            <div className="ml-4 md:ml-0 flex-1 md:w-full">
              <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-1">{service.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{service.shortDescription}</p>
            </div>
            
            <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 ml-2 md:hidden" />
            
            <div className="hidden md:flex mt-6 text-brand-green font-medium text-sm items-center opacity-0 group-hover:opacity-100 transition-opacity">
              View Details <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
