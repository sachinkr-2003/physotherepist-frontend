import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, FileText, Plus } from 'lucide-react';
import Swal from 'sweetalert2';

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [showForm, setShowForm] = useState(false);
  const [historyForm, setHistoryForm] = useState({ condition: '', treatment: '', notes: '' });

  const fetchPatientData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(import.meta.env.VITE_API_URL + `/api/users/patients/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setData(await response.json());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientData();
  }, [id]);

  const handleHistorySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(import.meta.env.VITE_API_URL + `/api/users/patients/${id}/history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(historyForm)
      });
      if (response.ok) {
        Swal.fire('Added', 'Medical history added successfully', 'success');
        setShowForm(false);
        setHistoryForm({ condition: '', treatment: '', notes: '' });
        fetchPatientData(); // Refresh data
      }
    } catch (err) {
      Swal.fire('Error', 'Failed to add history', 'error');
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!data) return <div className="p-8">Patient not found</div>;

  const { patient, history, appointments } = data;

  return (
    <div>
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 mb-6 hover:text-brand-green">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Patients
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-1 h-fit">
          <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-3xl mb-4 mx-auto">
            {patient.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">{patient.name}</h2>
          <p className="text-center text-gray-500 mb-6">+91 {patient.mobile}</p>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Age:</span>
              <span className="font-medium text-gray-900">{patient.age || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Gender:</span>
              <span className="font-medium text-gray-900">{patient.gender || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Blood Group:</span>
              <span className="font-medium text-gray-900">{patient.bloodGroup || 'N/A'}</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-gray-500">Address:</span>
              <span className="font-medium text-gray-900 text-right">{patient.address || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* Medical History & Appointments */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Medical History Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-500" /> Medical History
              </h3>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="flex items-center text-sm bg-brand-green text-white px-3 py-1.5 rounded-md hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-1" /> Add Record
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleHistorySubmit} className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200 space-y-3">
                <input 
                  type="text" required placeholder="Condition / Diagnosis" 
                  value={historyForm.condition} onChange={e => setHistoryForm({...historyForm, condition: e.target.value})}
                  className="w-full p-2 border rounded-md"
                />
                <textarea 
                  required placeholder="Treatment / Prescription" rows="2"
                  value={historyForm.treatment} onChange={e => setHistoryForm({...historyForm, treatment: e.target.value})}
                  className="w-full p-2 border rounded-md"
                ></textarea>
                <textarea 
                  placeholder="Private Admin Notes (Optional)" rows="2"
                  value={historyForm.notes} onChange={e => setHistoryForm({...historyForm, notes: e.target.value})}
                  className="w-full p-2 border rounded-md bg-white"
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-600 bg-white border rounded-md">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-white bg-brand-green rounded-md">Save Record</button>
                </div>
              </form>
            )}

            {history.length === 0 ? (
              <p className="text-gray-500 text-sm italic">No medical records found for this patient.</p>
            ) : (
              <div className="space-y-4">
                {history.map(record => (
                  <div key={record._id} className="border border-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{record.condition}</h4>
                      <span className="text-xs text-gray-500">{new Date(record.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{record.treatment}</p>
                    {record.notes && (
                      <p className="text-xs text-purple-700 bg-purple-50 p-2 rounded border border-purple-100">
                        <strong>Note:</strong> {record.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Appointments Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" /> Recent Appointments
            </h3>
            {appointments.length === 0 ? (
               <p className="text-gray-500 text-sm italic">No appointments found.</p>
            ) : (
              <div className="space-y-3">
                {appointments.map(apt => (
                  <div key={apt._id} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{apt.service}</h4>
                      <p className="text-xs text-gray-500">{new Date(apt.date).toLocaleDateString()} at {apt.timeSlot}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      apt.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                      apt.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
