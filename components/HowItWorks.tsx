
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Easy Online Booking',
      desc: 'Select your preferred spa package and share your location via WhatsApp or Call.',
      icon: '📱'
    },
    {
      id: '02',
      title: 'Expert At Doorstep',
      desc: 'Our certified detailing specialists arrive at your home with professional 3M equipment.',
      icon: '🚗'
    },
    {
      id: '03',
      title: 'Showroom Shine',
      desc: 'Sit back while we transform your car. Pay only after you are 100% satisfied.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">The Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">How Carbhai Works</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gray-100 -translate-x-12 z-0"></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-[32px] flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  {step.icon}
                </div>
                <div className="text-red-600 font-black text-sm mb-2 tracking-tighter">STEP {step.id}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
