
import React, { useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import ServiceCard from './components/ServiceCard.tsx';
import FloatingCall from './components/FloatingCall.tsx';
import BrandMarquee from './components/BrandMarquee.tsx';
import DiscountPopup from './components/DiscountPopup.tsx';
import Testimonials from './components/Testimonials.tsx';
import HowItWorks from './components/HowItWorks.tsx';
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
                  Your Car Deserves a <span className="text-red-600">Home Spa.</span>
                </h1>
                <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
                  Join 10,000+ happy customers who trust Carbhai for professional detailing at their doorstep. Packages starting at <span className="text-gray-900 font-bold">₹799</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#services" className="bg-gray-900 text-white text-center px-10 py-5 rounded-2xl text-lg font-bold hover:bg-red-600 transition-all shadow-xl shadow-gray-200">
                    Explore Packages
                  </a>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-center px-10 py-5 rounded-2xl text-lg font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-200">
                    WhatsApp to Book
                  </a>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Customer" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-sm font-bold text-gray-900">4.9/5 Rating (2.4k+ Reviews)</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white group bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=1000" 
                    alt="Premium Car Detailing at Home" 
                    className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl">
                    <div className="text-red-600 font-black text-xl line-clamp-1">Noida's #1</div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Doorstep Provider</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BrandMarquee />

        <HowItWorks />

        {/* Services Slider Section */}
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">Pick Your Spa Package</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                  Transparent Pricing. <br />Professional Results.
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

        <Testimonials />

        {/* Features / Why Us */}
        <section id="features" className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">Why Carbhai?</span>
                 <h2 className="text-4xl md:text-6xl font-black mb-10 mt-4 leading-[1.1]">The Gold Standard of Doorstep Detailing.</h2>
                 <div className="space-y-8">
                   {[
                     { title: 'Genuine 3M Products', desc: 'We only use 3M-certified materials for rubbing, waxing, and polishing.' },
                     { title: 'Verified Specialists', desc: 'Our team undergoes background checks and 100+ hours of training.' },
                     { title: 'Hassle-Free Experience', desc: 'No more waiting at workshops. We bring the workshop to your parking.' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 bg-red-600 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                       <div>
                         <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                         <p className="text-gray-400">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-red-600 rounded-[40px] rotate-3 -z-10 opacity-20"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000" 
                   alt="Car Cleaning"
                   className="rounded-[40px] shadow-2xl"
                 />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to transform your car?</h2>
            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">Get your first Essential Spa with a 20% discount. Limited slots available this week in Noida!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${phoneNumber}`} className="bg-white text-red-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">
                Call Now: {phoneNumber}
              </a>
              <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">Car<span className="text-red-600">bhai</span></span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                Premium car spa and detailing services delivered to your doorstep. Proudly serving Noida, Greater Noida, and Ghaziabad.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Service Areas</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li>Noida (All Sectors)</li>
                <li>Greater Noida West</li>
                <li>Gaur City • Crossings Repu.</li>
                <li>Ghaziabad</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#services" className="hover:text-red-600">Our Packages</a></li>
                <li><a href="#testimonials" className="hover:text-red-600">Customer Reviews</a></li>
                <li><a href={`tel:${phoneNumber}`} className="hover:text-red-600">Call Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm">© 2024 Carbhai Detailing Services. Noida, Uttar Pradesh.</p>
          </div>
        </div>
      </footer>

      <DiscountPopup />
      <FloatingCall />
    </div>
  );
};

export default App;
