import React, { useState } from 'react';
import { ArrowLeft, LockKeyhole, CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    service: '',
    date: '',
    timeSlot: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your appointment has been requested successfully.',
      icon: 'success',
      confirmButtonColor: '#00875a',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen md:py-12 pb-6 pt-6">
      {/* Desktop Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Side Information - Desktop Only */}
        <div className="hidden md:flex flex-col w-1/3 pt-8">
          <div className="bg-brand-blue rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <CalendarCheck className="w-12 h-12 mb-6 text-brand-green relative z-10" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Schedule Your Visit</h2>
            <p className="text-blue-100 mb-8 relative z-10 leading-relaxed">
              Book a consultation with our expert physiotherapists. Choose a time that works best for you and start your journey to a pain-free life.
            </p>
            <div className="space-y-4 text-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                <span>No Wait Times</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                <span>Expert Diagnosis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                <span>Personalised Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-2/3 bg-transparent md:bg-white md:p-8 md:rounded-2xl md:shadow-lg md:border md:border-gray-100">
          
          <h2 className="hidden md:block text-2xl font-bold text-brand-blue mb-6">Patient Details</h2>

          {/* Step Indicator */}
          <div className="flex justify-center items-center py-6 md:py-0 md:pb-8 gap-2 md:gap-4">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-semibold transition-colors ${
                  step === 1 ? 'bg-brand-green text-white shadow-md' : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}>
                  {step}
                </div>
                {index < 4 && <div className="w-4 md:w-12 h-[2px] bg-gray-200"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 md:px-0 space-y-4 md:space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Enter your name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-white transition-all shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobileNumber"
                  placeholder="Enter your mobile number" 
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-white transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-white appearance-none text-gray-600 transition-all shadow-sm cursor-pointer"
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="orthopedic">Orthopedic Physiotherapy</option>
                <option value="neurological">Neurological Rehabilitation</option>
                <option value="sports">Sports Physiotherapy</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-white text-gray-600 transition-all shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Time Slot</label>
                <input 
                  type="time" 
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-white text-gray-600 transition-all shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="pt-4 pb-2 md:pt-6">
              <button type="submit" className="w-full bg-brand-green hover:bg-green-700 text-white py-3.5 md:py-4 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-all text-lg">
                Continue
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
              <LockKeyhole className="w-4 h-4 text-brand-green" />
              <span>Your information is safely encrypted.</span>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
