
import React from 'react';

const BrandMarquee: React.FC = () => {
  const brands = [
    "Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Toyota", "Kia", "Honda", 
    "MG Motor", "Skoda", "Volkswagen", "Renault", "Nissan", "Citroën", "Force Motors", "Isuzu"
  ];

  const luxuryBrands = [
    "Mercedes-Benz", "BMW", "Audi", "Volvo", "Jaguar", "Land Rover", "Lexus", 
    "Porsche", "Lamborghini", "Ferrari", "Maserati", "Aston Martin", "Bentley", 
    "Rolls-Royce", "Lotus", "McLaren"
  ];

  const electricBrands = [
    "BYD", "Tesla", "VinFast", "Leapmotor"
  ];

  const allBrands = [...brands, ...luxuryBrands, ...electricBrands];

  return (
    <div className="bg-white py-12 border-y border-gray-100 overflow-hidden relative group pause-on-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Brands We Specialize In</h2>
      </div>
      
      {/* Row 1: General & Emerging */}
      <div className="mask-marquee relative mb-6">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...brands, ...electricBrands, ...brands, ...electricBrands].map((brand, i) => (
            <span key={i} className="text-2xl font-black text-gray-300 hover:text-red-600 transition-colors cursor-default select-none">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Luxury & Performance */}
      <div className="mask-marquee relative">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 items-center">
          {[...luxuryBrands, ...luxuryBrands].map((brand, i) => (
            <span key={i} className="text-3xl font-extrabold text-gray-200 hover:text-red-600 transition-colors cursor-default select-none italic">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default BrandMarquee;
