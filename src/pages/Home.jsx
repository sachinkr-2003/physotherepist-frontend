import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Home as HomeIcon, MessageCircle, Phone, Users, Stethoscope, Activity, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 0,
      title: "Expert Care For Your Better Health",
      titleHighlight: "Better Health",
      description: "Move Better, Live Better. We provide complete physiotherapy care for a better tomorrow.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1,
      title: "Advanced Physiotherapy",
      titleHighlight: "Equipment",
      description: "State-of-the-art facilities designed to accelerate your recovery and relieve pain effectively.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Personalised Treatment",
      titleHighlight: "Plans",
      description: "Our expert therapists craft dedicated recovery plans tailored specifically to your body's needs.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section with Slider */}
      <div className="px-4 md:px-8 mt-4 md:mt-8 max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl md:min-h-[450px] min-h-[350px] bg-brand-blue">
          
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Background Image */}
              <img src={slide.image} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 md:opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center p-6 md:p-16">
                <div className="w-full md:w-2/3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
                    {slide.title.replace(slide.titleHighlight, '')} 
                    <span className="text-brand-green">{slide.titleHighlight}</span>
                  </h1>
                  <p className="text-sm md:text-xl text-blue-100 mb-8 max-w-lg md:max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                     <Link to="/book-appointment" className="bg-brand-green hover:bg-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold shadow-lg transition-transform active:scale-95 text-sm md:text-base">
                       Book Appointment
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls - Desktop Only */}
          <button onClick={prevSlide} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center text-white transition-colors border border-white/20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center text-white transition-colors border border-white/20">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 h-2 bg-brand-green' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:px-8 md:mt-8 mt-2">
        <Link to="/book-appointment" className="bg-white p-4 md:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 md:gap-4 border border-gray-100 hover:shadow-md hover:border-brand-green/30 transition-all group">
          <div className="bg-green-50 group-hover:bg-brand-green group-hover:text-white transition-colors p-3 md:p-5 rounded-full text-brand-green">
            <Calendar className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <span className="text-xs md:text-base font-semibold text-gray-700 text-center">Book<br className="md:hidden"/> Appointment</span>
        </Link>
        
        <button className="bg-white p-4 md:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 md:gap-4 border border-gray-100 hover:shadow-md hover:border-brand-blue/30 transition-all group">
          <div className="bg-blue-50 group-hover:bg-brand-blue group-hover:text-white transition-colors p-3 md:p-5 rounded-full text-brand-blue">
            <HomeIcon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <span className="text-xs md:text-base font-semibold text-gray-700 text-center">Home Visit<br className="md:hidden"/> Booking</span>
        </button>

        <button className="bg-white p-4 md:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 md:gap-4 border border-gray-100 hover:shadow-md hover:border-orange-500/30 transition-all group">
          <div className="bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-colors p-3 md:p-5 rounded-full text-orange-500">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <span className="text-xs md:text-base font-semibold text-gray-700 text-center">Online<br className="md:hidden"/> Consultation</span>
        </button>

        <button className="bg-white p-4 md:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 md:gap-4 border border-gray-100 hover:shadow-md hover:border-purple-600/30 transition-all group">
          <div className="bg-purple-50 group-hover:bg-purple-600 group-hover:text-white transition-colors p-3 md:p-5 rounded-full text-purple-600">
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <span className="text-xs md:text-base font-semibold text-gray-700 text-center">Call<br className="md:hidden"/> Now</span>
        </button>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-20">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Clinic Interior" className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md" />
          </div>
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green font-semibold rounded-full text-sm">About Us</div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-blue">VK Physiotherapy Centre</h2>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              VK Physiotherapy Centre is a leading physiotherapy clinic committed to providing advanced, evidence-based treatment to help you recover, restore and stay healthy.
            </p>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              Our expert team focuses on personalised care, modern techniques & advanced equipment for faster recovery.
            </p>
            <button className="bg-brand-blue hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-20">
        <div className="bg-brand-green rounded-2xl p-6 md:p-12 text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          
          <h2 className="text-center font-bold text-xl md:text-3xl mb-8 md:mb-12 relative z-10">Why Choose Us?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center relative z-10">
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <div className="bg-white/10 p-4 md:p-5 rounded-full">
                <Users className="w-8 h-8 md:w-10 md:h-10 opacity-100" />
              </div>
              <span className="text-sm md:text-lg font-medium leading-tight">Experienced<br/> Therapists</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <div className="bg-white/10 p-4 md:p-5 rounded-full">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 opacity-100" />
              </div>
              <span className="text-sm md:text-lg font-medium leading-tight">Advanced<br/> Equipment</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <div className="bg-white/10 p-4 md:p-5 rounded-full">
                <Activity className="w-8 h-8 md:w-10 md:h-10 opacity-100" />
              </div>
              <span className="text-sm md:text-lg font-medium leading-tight">Personalised<br/> Treatment</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <div className="bg-white/10 p-4 md:p-5 rounded-full">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 opacity-100" />
              </div>
              <span className="text-sm md:text-lg font-medium leading-tight">Proven<br/> Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Therapists Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-20">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-semibold rounded-full text-sm mb-4">Experts</div>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-blue">Our Therapists</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Doctor 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" alt="Dr. Vikas Kumar" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-lg text-gray-900">Dr. Vikas Kumar</h3>
              <p className="text-xs font-semibold text-brand-green mt-1">BPT, MPT</p>
              <p className="text-sm text-gray-600 mt-2">Senior Physiotherapist</p>
              <p className="text-xs text-gray-500 mt-1">10+ Years Experience</p>
            </div>
          </div>
          
          {/* Doctor 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80" alt="Dr. Neha Sharma" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-lg text-gray-900">Dr. Neha Sharma</h3>
              <p className="text-xs font-semibold text-brand-green mt-1">BPT, MPT</p>
              <p className="text-sm text-gray-600 mt-2">Neurological Specialist</p>
              <p className="text-xs text-gray-500 mt-1">8+ Years Experience</p>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" alt="Dr. Rohit Singh" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-lg text-gray-900">Dr. Rohit Singh</h3>
              <p className="text-xs font-semibold text-brand-green mt-1">BPT, MPT</p>
              <p className="text-sm text-gray-600 mt-2">Sports Physiotherapist</p>
              <p className="text-xs text-gray-500 mt-1">7+ Years Experience</p>
            </div>
          </div>

          {/* Doctor 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" alt="Dr. Priya Verma" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-lg text-gray-900">Dr. Priya Verma</h3>
              <p className="text-xs font-semibold text-brand-green mt-1">BPT, MPT</p>
              <p className="text-sm text-gray-600 mt-2">Women's Health Specialist</p>
              <p className="text-xs text-gray-500 mt-1">6+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green font-semibold rounded-full text-sm mb-4">Reviews</div>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-blue">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
            </div>
            <p className="text-gray-600 italic mb-6">"Excellent treatment for my back pain. Very professional staff and great environment."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">AS</div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Anita Singh</h4>
                <p className="text-xs text-gray-500">Back Pain Patient</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
            </div>
            <p className="text-gray-600 italic mb-6">"Great experience and effective treatment. Highly recommend VK Physiotherapy Centre."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-brand-green flex items-center justify-center font-bold">MB</div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Manvi Bajaj</h4>
                <p className="text-xs text-gray-500">Sports Injury</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="w-5 h-5" />
            </div>
            <p className="text-gray-600 italic mb-6">"Best physiotherapy centre with advanced equipment. Very good care and personal attention."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">PS</div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Priya S.</h4>
                <p className="text-xs text-gray-500">Post Surgery Rehab</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="text-brand-blue font-semibold hover:underline">View All Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
