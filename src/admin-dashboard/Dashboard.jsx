import React, { useState, useEffect } from 'react';
import { Users, Calendar as CalendarIcon, Activity, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    completedAppointments: 0,
    patients: 0
  });
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        
        // Fetch all appointments for stats
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/appointments/all', { headers });
        if (response.ok) {
          const data = await response.json();
          
          const pending = data.filter(a => a.status === 'Pending').length;
          const completed = data.filter(a => a.status === 'Completed').length;
          
          // Estimate unique patients by mobile number
          const uniquePatients = new Set(data.map(a => a.mobileNumber)).size;

          setStats({
            totalAppointments: data.length,
            pendingAppointments: pending,
            completedAppointments: completed,
            patients: uniquePatients || 0
          });

          setRecentAppointments(data.slice(0, 5));
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({ title, value, icon: Icon, color, bg }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${bg} ${color}`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{loading ? '...' : value}</h3>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500 mt-1">Welcome back, Admin. Here is what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard 
          title="Total Appointments" 
          value={stats.totalAppointments} 
          icon={CalendarIcon} 
          color="text-blue-600" 
          bg="bg-blue-50" 
        />
        <StatCard 
          title="Pending Requests" 
          value={stats.pendingAppointments} 
          icon={Activity} 
          color="text-orange-600" 
          bg="bg-orange-50" 
        />
        <StatCard 
          title="Completed Sessions" 
          value={stats.completedAppointments} 
          icon={CheckCircle} 
          color="text-green-600" 
          bg="bg-green-50" 
        />
        <StatCard 
          title="Total Patients" 
          value={stats.patients} 
          icon={Users} 
          color="text-purple-600" 
          bg="bg-purple-50" 
        />
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Recent Appointments</h3>
          <Link to="/admin/appointments" className="text-sm font-medium text-brand-green hover:text-green-700">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                <th className="p-4 font-medium">Patient Name</th>
                <th className="p-4 font-medium">Service</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-400">Loading data...</td>
                </tr>
              ) : recentAppointments.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-400">No recent appointments found.</td>
                </tr>
              ) : (
                recentAppointments.map((apt) => (
                  <tr key={apt._id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{apt.fullName}</td>
                    <td className="p-4 text-gray-600 capitalize">{apt.service}</td>
                    <td className="p-4 text-gray-600">{new Date(apt.date).toLocaleDateString()} at {apt.timeSlot}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        apt.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                        apt.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                        apt.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
