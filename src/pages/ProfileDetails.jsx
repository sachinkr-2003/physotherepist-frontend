import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProfileDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    bloodGroup: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/auth');

        const response = await fetch(import.meta.env.VITE_API_URL + '/api/users/profile', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name || '',
            email: data.email || '',
            age: data.age || '',
            gender: data.gender || '',
            address: data.address || '',
            bloodGroup: data.bloodGroup || ''
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        Swal.fire('Saved!', 'Profile updated successfully', 'success');
      } else {
        Swal.fire('Error', 'Failed to update profile', 'error');
      }
    } catch (err) {
      Swal.fire('Error', 'Something went wrong', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 mb-6 hover:text-brand-green">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-brand-blue">My Details</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" placeholder="Enter your email" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green" placeholder="e.g. O+" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-brand-green focus:border-brand-green"></textarea>
        </div>
        
        <button type="submit" disabled={saving} className="w-full flex items-center justify-center py-3 px-4 bg-brand-green text-white rounded-md font-medium hover:bg-green-700 transition">
          {saving ? 'Saving...' : <><Save className="w-4 h-4 mr-2" /> Save Details</>}
        </button>
      </form>
    </div>
  );
};

export default ProfileDetails;
