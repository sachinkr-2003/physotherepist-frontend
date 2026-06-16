import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, CalendarPlus } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the matching service
  const service = servicesData.find(s => s.slug === slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
        <Link to="/services" className="text-brand-green font-medium hover:underline">
          Go back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen md:pb-12 pb-6">

      {/* Hero Banner */}
      <div className="relative h-64 md:h-96 w-full">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-black/20 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-full bg-white text-brand-blue`}>
              <service.icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-8 md:mt-12 space-y-8">
        
        {/* Description */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Treatments List */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-blue mb-6">What We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.treatments.map((treatment, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                <span className="font-medium text-gray-700">{treatment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-brand-green p-8 md:p-12 rounded-2xl shadow-md text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <CalendarPlus className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to start your recovery?</h2>
          <p className="mb-8 text-green-50 relative z-10 max-w-lg mx-auto">
            Book an appointment today with our expert therapists for {service.title.toLowerCase()}.
          </p>
          <Link 
            to="/book-appointment" 
            className="inline-block bg-white text-brand-green hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-lg transition-transform active:scale-95 text-lg relative z-10"
          >
            Book Appointment Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
