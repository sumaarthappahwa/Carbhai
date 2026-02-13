
import React, { useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import ServiceCard from './components/ServiceCard.tsx';
import FloatingCall from './components/FloatingCall.tsx';
import BrandMarquee from './components/BrandMarquee.tsx';
import DiscountPopup from './components/DiscountPopup.tsx';
import { SERVICE_PACKAGES } from './constants.tsx';

const App: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "7011196837";

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const keywords = [
    "car wash service at home",
    "car wash at doorstep",
    "car deep cleaning home service",
    "car washing at home",
    "car dry cleaning at home",
    "car wash at home noida",
    "car wash greater noida",
    "car wash near me",
    "car washing and dry cleaning at home"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-red-100 selection:text-red-900">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-white pt-16 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50/50 -skew-x-12 transform origin-top-right -z-0 hidden lg:block"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                  Serving Noida, Greater Noida & Ghaziabad
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
                  Premium Car Spa at your <span className="text-red-600">Doorstep.</span>
                </h1>
                <p className="text-xl text-gray-500 mb-6 max-w-xl leading-relaxed">
                  Join 10,000+ happy customers across <span className="font-bold text-gray-900 underline decoration-red-600">Noida, Greater Noida, and Ghaziabad</span>. Professional car washing and dry cleaning starting at just <span className="text-gray-900 font-bold">₹799</span>.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10 max-w-lg">
                  {keywords.slice(0, 4).map((kw, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#services" className="bg-gray-900 text-white text-center px-10 py-5 rounded-2xl text-lg font-bold hover:bg-red-600 transition-all shadow-xl shadow-gray-200">
                    View Services
                  </a>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-center px-10 py-5 rounded-2xl text-lg font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-200">
                    WhatsApp: {phoneNumber}
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Premium Car Detailing at Home" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                    <div className="text-white">
                      <div className="text-lg font-bold mb-2">Service at Your Home</div>
                      <div className="text-sm text-gray-300">Noida • Greater Noida • Ghaziabad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Logos Marquee */}
        <BrandMarquee />

        {/* Services Slider Section */}
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">Our Expert Packages</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                  Doorstep Detailing <br />Designed for You.
                </h2>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => scroll('left')}
                  className="p-4 bg-white rounded-full border border-gray-200 shadow-sm hover:border-red-600 transition-all text-gray-400 hover:text-red-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-4 bg-white rounded-full border border-gray-200 shadow-sm hover:border-red-600 transition-all text-gray-400 hover:text-red-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            <div 
              ref={sliderRef}
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar custom-scroll scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {SERVICE_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="min-w-[300px] md:min-w-[400px] snap-center">
                  <ServiceCard 
                    pkg={pkg} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords / Reach Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6">Expert Car Wash & Cleaning Services Near You</h2>
                <p className="text-gray-500 text-lg mb-8">
                  We specialize in car deep cleaning and dry cleaning services at home across Noida, Greater Noida, and Ghaziabad. No need to visit a garage, our team arrives with all professional equipment to give your car a showroom shine.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {keywords.map((kw, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      {kw}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 rounded-[32px] p-10 text-white text-center">
                <div className="text-5xl mb-6">📞</div>
                <h3 className="text-3xl font-black mb-4">Book via Call or WhatsApp</h3>
                <p className="text-gray-400 mb-8">Our experts are available to guide you 9 AM to 7 PM daily.</p>
                <div className="flex flex-col gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-red-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all">
                    Call: {phoneNumber}
                  </a>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all">
                    WhatsApp: {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section id="features" className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Why Carbhai?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Covering Noida, Greater Noida, and Ghaziabad with premium 3M detailing at your home.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Home Service Coverage', desc: 'Serving Noida Sector 15 to 150, Greater Noida West, and all of Ghaziabad.', icon: '📍' },
                { title: '3M Genuine Quality', desc: 'Professional rubbing, buffing, and wax using authentic 3M materials.', icon: '✨' },
                { title: 'Expert Cleaners', icon: '🛠️', desc: 'Specialized in dry cleaning, foam wash, and machine buffing.' }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[32px] hover:bg-white/10 transition-colors text-center">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  Car<span className="text-red-600">bhai</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                Your trusted partner for car washing at home and car deep cleaning services in Noida, Greater Noida, and Ghaziabad.
              </p>
              <div className="flex gap-4">
                <a href={`tel:${phoneNumber}`} className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer">
                  📞
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Service Areas</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li>Noida (All Sectors)</li>
                <li>Greater Noida West</li>
                <li>Greater Noida (Pari Chowk)</li>
                <li>Ghaziabad</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href={`tel:${phoneNumber}`} className="hover:text-red-600 transition-colors">Call: {phoneNumber}</a></li>
                <li><a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">WhatsApp: {phoneNumber}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Carbhai Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Discount Popup */}
      <DiscountPopup />

      {/* Floating Action Buttons */}
      <FloatingCall />
    </div>
  );
};

export default App;
