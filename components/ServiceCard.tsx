
import React from 'react';
import { ServicePackage } from '../types.ts';

interface Props {
  pkg: ServicePackage;
}

const ServiceCard: React.FC<Props> = ({ pkg }) => {
  const savings = pkg.realPrice - pkg.discountPrice;
  const phoneNumber = "7011196837";

  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group relative overflow-hidden ring-1 ring-black/5">
      {pkg.tag && (
        <div className="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full z-10 shadow-lg shadow-red-200">
          {pkg.tag}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">{pkg.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">{pkg.description}</p>
      </div>

      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-4xl font-black text-gray-900">₹{pkg.discountPrice}</span>
        <span className="text-lg text-gray-400 line-through">₹{pkg.realPrice}</span>
        <div className="ml-auto bg-green-50 text-green-700 text-[10px] font-black px-2.5 py-1.5 rounded-lg border border-green-100 uppercase tracking-tighter">
          SAVE ₹{savings}
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-10 overflow-y-auto max-h-[300px] pr-2 custom-scroll">
        {pkg.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
            <div className="w-5 h-5 flex-shrink-0 bg-red-50 text-red-600 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            {feature}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3">
        <a 
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-100"
        >
          <span className="text-xl">📞</span> Call Now
        </a>
        <a 
          href={`https://wa.me/91${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-100"
        >
          <span className="text-xl">💬</span> WhatsApp Us
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
