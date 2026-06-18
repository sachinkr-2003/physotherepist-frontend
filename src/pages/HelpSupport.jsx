import React from 'react';
import { ArrowLeft, HelpCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HelpSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 mb-6 hover:text-brand-green">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6 text-brand-blue flex items-center">
        <HelpCircle className="w-6 h-6 mr-2 text-orange-500" /> Help & Support
      </h1>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-brand-green" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-brand-green" />
              <span>support@vkphysio.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-brand-green shrink-0 mt-1" />
              <span>VK Physiotherapy Centre,<br/>123 Health Avenue, Medical District,<br/>City, State - 123456</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">How do I cancel an appointment?</h4>
              <p className="text-sm text-gray-500 mt-1">Please call our clinic directly at least 24 hours before your scheduled time to cancel or reschedule.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">What should I bring to my first visit?</h4>
              <p className="text-sm text-gray-500 mt-1">Please bring any relevant medical records, X-rays, or MRI reports related to your condition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
