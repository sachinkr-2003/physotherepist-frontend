import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Activity, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Back Pain Treatment',
      date: '20 May 2024, Mon',
      time: '10:00 AM - 11:00 AM',
      status: 'Confirmed',
      statusColor: 'text-brand-green bg-green-100'
    },
    {
      id: 2,
      service: 'Knee Rehabilitation',
      date: '25 May 2024, Sat',
      time: '11:30 AM - 12:30 PM',
      status: 'Confirmed',
      statusColor: 'text-brand-green bg-green-100'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      service: 'Neck Pain Treatment',
      date: '10 May 2024, Fri',
      time: '09:00 AM - 10:00 AM',
      status: 'Completed',
      statusColor: 'text-gray-600 bg-gray-100'
    }
  ];

  const displayAppointments = activeTab === 'upcoming' ? upcomingAppointments : pastAppointments;

  return (
    <div className="bg-gray-50 min-h-screen md:pb-12 pb-6">

      {/* Desktop Header */}
      <div className="hidden md:flex flex-col items-center justify-center px-8 pt-10 pb-6 text-center">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Your Appointments</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Track your upcoming sessions and review your past treatment history.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 mt-4 md:mt-8">
        
        {/* Tabs */}
        <div className="flex bg-gray-200/50 p-1 rounded-xl mb-6 shadow-inner">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-white text-brand-blue shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'past' 
                ? 'bg-white text-brand-blue shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Past
          </button>
        </div>

        {/* Appointment List */}
        <div className="space-y-4">
          {displayAppointments.length > 0 ? (
            displayAppointments.map((apt) => (
              <div key={apt.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{apt.service}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{apt.time}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${apt.statusColor}`}>
                    {apt.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-brand-green font-medium bg-green-50 p-3 rounded-lg border border-green-100">
                  <Activity className="w-4 h-4" />
                  <span>VK Physiotherapy Centre</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-700 mb-2">No {activeTab} appointments</h3>
              <p className="text-gray-500 mb-6 text-sm">You don't have any appointments scheduled.</p>
              {activeTab === 'upcoming' && (
                <button 
                  onClick={() => navigate('/book-appointment')}
                  className="bg-brand-green hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                >
                  Book New Appointment
                </button>
              )}
            </div>
          )}
        </div>

        {/* Floating Book Button for Mobile */}
        {activeTab === 'upcoming' && displayAppointments.length > 0 && (
           <div className="fixed bottom-24 left-0 right-0 px-4 md:hidden z-20">
             <button 
               onClick={() => navigate('/book-appointment')}
               className="w-full bg-brand-green text-white py-4 rounded-xl font-bold shadow-xl active:scale-[0.98] transition-transform text-lg"
             >
               Book New Appointment
             </button>
           </div>
        )}
        {/* Desktop Book Button */}
        {activeTab === 'upcoming' && displayAppointments.length > 0 && (
           <div className="hidden md:flex justify-center mt-8">
             <button 
               onClick={() => navigate('/book-appointment')}
               className="bg-brand-green hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform text-lg"
             >
               Book New Appointment
             </button>
           </div>
        )}

      </div>
    </div>
  );
};

export default Appointments;
