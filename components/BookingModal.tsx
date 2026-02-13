
import React, { useState } from 'react';
import { ServicePackage } from '../types';

interface Props {
  pkg: ServicePackage | null;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ pkg, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    address: ''
  });

  if (!pkg) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl animate-scaleIn">
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {step === 1 ? (
            <>
              <div className="mb-8">
                <span className="text-red-600 font-bold uppercase tracking-widest text-[10px]">Step 01: Details</span>
                <h2 className="text-3xl font-black text-gray-900 mt-2">Book Your Session</h2>
                <p className="text-gray-500 mt-2">Selected: <span className="font-semibold text-gray-900">{pkg.name}</span></p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <input
                  required
                  type="text"
                  placeholder="Car Model (e.g. Honda City)"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  value={formData.carModel}
                  onChange={e => setFormData({...formData, carModel: e.target.value})}
                />
                <textarea
                  required
                  placeholder="Pickup/Service Address"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all min-h-[100px]"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-100 mt-4"
                >
                  Confirm Booking (₹{pkg.discountPrice})
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Order Confirmed!</h2>
              <p className="text-gray-500 mb-8 max-w-[300px] mx-auto">
                Carbhai specialists will reach out to you within 30 minutes to schedule your session.
              </p>
              <button 
                onClick={onClose}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
