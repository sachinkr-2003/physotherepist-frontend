import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-white font-bold text-3xl tracking-tighter">VK</div>
              <div className="flex flex-col">
                <span className="text-brand-green font-bold text-sm leading-tight tracking-wider">PHYSIOTHERAPY</span>
                <span className="text-white font-bold text-xs leading-tight tracking-widest">CENTRE</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Move Better, Live Better. We are committed to providing advanced, evidence-based treatment to help you recover, restore and stay healthy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-green">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/book-appointment" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-green">Our Services</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/services/orthopedic-physiotherapy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Orthopedic Physiotherapy</Link></li>
              <li><Link to="/services/neurological-rehabilitation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Neurological Rehabilitation</Link></li>
              <li><Link to="/services/sports-physiotherapy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Sports Physiotherapy</Link></li>
              <li><Link to="/services/post-surgical-rehabilitation" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Post Surgical Rehab</Link></li>
              <li><Link to="/services/womens-health" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Women's Health</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-green">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-brand-green" />
                <span>123 Health Avenue, Medical District, City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-green" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-brand-green" />
                <span>contact@vkphysio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 mt-6 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} VK Physiotherapy Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
