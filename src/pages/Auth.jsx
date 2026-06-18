import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Phone, Lock, User, LogIn, UserPlus, Activity, ArrowRight, X } from 'lucide-react';

const Auth = ({ isPopup = false, onClose = () => {} }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Mobile number must be 10 digits',
        icon: 'warning',
        confirmButtonColor: '#00875a',
      });
      return;
    }

    if (formData.password.length < 6) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Password must be at least 6 characters',
        icon: 'warning',
        confirmButtonColor: '#00875a',
      });
      return;
    }

    setLoading(true);

    const url = isLogin ? import.meta.env.VITE_API_URL + '/api/auth/login' : import.meta.env.VITE_API_URL + '/api/auth/register';
    const payload = isLogin 
      ? { mobile: formData.mobile, password: formData.password }
      : formData;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        
        Swal.fire({
          title: 'Success!',
          text: isLogin ? 'Logged in successfully' : 'Registered successfully',
          icon: 'success',
          confirmButtonColor: '#00875a',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          if (isPopup) {
            onClose();
            window.location.reload();
          } else if (data.role === 'admin') {
            window.location.href = '/#/admin';
          } else {
            window.location.href = '/#/profile';
          }
        }, 1500);
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message || 'Authentication failed',
          icon: 'error',
          confirmButtonColor: '#00875a',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#00875a',
      });
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className={`w-full max-w-md bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-gray-100 p-8 sm:p-10 relative z-10 transition-all duration-500 ${isPopup ? 'mx-auto my-auto' : ''}`}>
      
      {isPopup && (
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Logo/Icon */}
      <div className={`${!isPopup && 'lg:hidden'} flex justify-center mb-6`}>
        <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg">
           <Activity className="w-7 h-7 text-brand-green" />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-500 font-medium">
          {isLogin ? 'Enter your details to securely sign in' : 'Sign up to get started with our services'}
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
              </div>
              <input
                name="name"
                type="text"
                required={!isLogin}
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all text-gray-900 font-medium"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Mobile Number</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              name="mobile"
              type="tel"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all text-gray-900 font-medium"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Password</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all text-gray-900 font-medium"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-4 px-4 rounded-xl shadow-lg shadow-brand-green/30 text-base font-bold text-white bg-brand-green hover:bg-green-700 hover:shadow-brand-green/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-all disabled:bg-green-400 disabled:shadow-none active:scale-[0.98]"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="flex items-center gap-2">
                {isLogin ? 'Sign in securely' : 'Create account'}
                <ArrowRight className="w-5 h-5" />
              </span>
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)} 
            className="font-bold text-brand-blue hover:text-brand-green transition-colors underline decoration-2 underline-offset-4"
          >
            {isLogin ? 'Register now' : 'Sign in instead'}
          </button>
        </p>
      </div>
    </div>
  );

  if (isPopup) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="w-full max-w-md animate-in zoom-in-95 duration-200">
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Hidden on Mobile, Shows on Desktop */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-blue items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-[#001a33] opacity-90 z-0"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-green rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 w-full max-w-lg px-12 text-white">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8 border border-white/20 shadow-xl">
            <Activity className="w-8 h-8 text-brand-green" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Welcome to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">VK Physiotherapy</span>
          </h1>
          <p className="text-lg text-blue-100/90 mb-10 leading-relaxed font-medium">
            Your journey to a pain-free life starts here. Book appointments, manage your medical history, and get personalized expert care.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-blue-50">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-brand-green font-bold text-lg">1</span>
              </div>
              <p className="font-medium text-lg">Create your patient profile</p>
            </div>
            <div className="flex items-center gap-4 text-blue-50">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-brand-green font-bold text-lg">2</span>
              </div>
              <p className="font-medium text-lg">Book appointments easily</p>
            </div>
            <div className="flex items-center gap-4 text-blue-50">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-brand-green font-bold text-lg">3</span>
              </div>
              <p className="font-medium text-lg">Track your recovery progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login/Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        {/* Subtle mobile background decoration */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-64 bg-brand-blue z-0 rounded-b-[3rem]"></div>
        {formContent}
      </div>
    </div>
  );
};

export default Auth;
