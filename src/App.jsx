import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Gallery from './pages/Gallery';
import ServiceDetail from './pages/ServiceDetail';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import MedicalHistory from './pages/MedicalHistory';
import Settings from './pages/Settings';
import HelpSupport from './pages/HelpSupport';
import Appointments from './pages/Appointments';
import Auth from './pages/Auth';
import AdminLayout from './admin-dashboard/AdminLayout';
import AdminDashboard from './admin-dashboard/Dashboard';
import AdminAppointmentsList from './admin-dashboard/AppointmentsList';
import PatientsList from './admin-dashboard/PatientsList';
import PatientDetail from './admin-dashboard/PatientDetail';
import AdminSettings from './admin-dashboard/AdminSettings';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Platform-specific auth logic
    const isNative = Capacitor.isNativePlatform();
    const token = localStorage.getItem('token');
    
    if (!token) {
      if (isNative) {
        // Mobile App: Force login page
        if (location.pathname !== '/auth' && !location.pathname.startsWith('/admin')) {
          navigate('/auth', { replace: true });
        }
      } else {
        // Website: Show popup once per session (if not on auth page)
        if (location.pathname !== '/auth' && !sessionStorage.getItem('authPopupShown')) {
          setShowAuthPopup(true);
          sessionStorage.setItem('authPopupShown', 'true');
        }
      }
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms loader on route change

    return () => clearTimeout(timer);
  }, [location.pathname]);



  return (
    <>
      {loading && <Loader />}
      {showAuthPopup && <Auth isPopup={true} onClose={() => setShowAuthPopup(false)} />}
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/details" element={<ProfileDetails />} />
        <Route path="profile/history" element={<MedicalHistory />} />
        <Route path="profile/settings" element={<Settings />} />
        <Route path="profile/help" element={<HelpSupport />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="auth" element={<Auth />} />
      </Route>
      
      {/* Admin Routes */}
      <Route element={<ProtectedRoute requireAdmin={true} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="appointments" element={<AdminAppointmentsList />} />
          <Route path="patients" element={<PatientsList />} />
          <Route path="patients/:id" element={<PatientDetail />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>
      </Routes>
    </>
  );
}

export default App;
