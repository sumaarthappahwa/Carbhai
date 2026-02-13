
import React, { useState, useEffect } from 'react';

const DiscountPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const phoneNumber = "7011196837";

  useEffect(() => {
    const handleScroll = () => {
      if (hasShown) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      // Calculate 50% scroll
      if (scrollPosition + windowHeight > fullHeight / 2) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-[40px] w-full max-w-md overflow-hidden shadow-2xl animate-scaleIn">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-20 bg-white/80 rounded-full p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative">
          <div className="h-40 bg-red-600 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="white" />
               </svg>
            </div>
            <div className="relative text-center">
               <span className="text-white text-7xl font-black">20%</span>
               <div className="text-white font-bold tracking-widest uppercase text-xs">Discount on First Wash</div>
            </div>
          </div>

          <div className="p-8 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Exclusive Offer!</h2>
            <p className="text-gray-500 mb-8">
              New to Carbhai? Claim <span className="text-red-600 font-bold">Flat 20% OFF</span> on your first doorstep service in Noida, Greater Noida or Ghaziabad.
            </p>

            <div className="space-y-3">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-100"
              >
                📞 Call to Claim
              </a>
              <a 
                href={`https://wa.me/91${phoneNumber}?text=Hi Carbhai, I want to claim my 20% first service discount!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-100"
              >
                💬 WhatsApp Discount
              </a>
            </div>
            <p className="mt-6 text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
              Limited time offer for new customers only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
