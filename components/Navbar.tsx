
import React from 'react';
import { NAV_LINKS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const phoneNumber = "7011196837";
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              Car<span className="text-red-600">bhai</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200"
            >
              Call Now
            </a>
          </div>
          <div className="md:hidden">
            <a href={`tel:${phoneNumber}`} className="bg-red-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
