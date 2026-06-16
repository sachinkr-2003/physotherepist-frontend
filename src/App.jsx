import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Gallery from './pages/Gallery';
import ServiceDetail from './pages/ServiceDetail';
import Profile from './pages/Profile';
import Appointments from './pages/Appointments';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
