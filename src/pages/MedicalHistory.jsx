import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicalHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/auth');

        const response = await fetch(import.meta.env.VITE_API_URL + '/api/users/history', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [navigate]);

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 mb-6 hover:text-brand-green">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-brand-blue flex items-center">
        <FileText className="w-6 h-6 mr-2 text-purple-500" /> My Medical History
      </h1>
      
      {loading ? (
        <div className="text-center py-12">Loading history...</div>
      ) : history.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No medical history records found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((record) => (
            <div key={record._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-start mb-4 border-b pb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{record.condition}</h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(record.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Treatment / Prescription</h4>
                <p className="text-gray-600 text-sm whitespace-pre-wrap">{record.treatment}</p>
              </div>
              {record.notes && (
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                  <h4 className="text-xs font-semibold text-purple-800 mb-1">Doctor's Notes</h4>
                  <p className="text-purple-700 text-sm">{record.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
