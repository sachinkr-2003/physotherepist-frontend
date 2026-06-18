import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requireAdmin }) => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  
  if (!token || !userStr) {
    return <Navigate to="/auth" replace />;
  }

  try {
    const user = JSON.parse(userStr);
    
    if (requireAdmin && user.role !== 'admin') {
      return <Navigate to="/profile" replace />;
    }
    
    return <Outlet />;
  } catch (err) {
    return <Navigate to="/auth" replace />;
  }
};

export default ProtectedRoute;
