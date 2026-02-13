
import React, { useState } from 'react';
import { getCarCareAdvice } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const advice = await getCarCareAdvice(query);
    setResponse(advice || null);
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 text-white">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Ask Carbhai AI</h2>
          <p className="text-gray-400 text-sm">Expert advice on car maintenance</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., How to remove deep scratches?"
          className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-white placeholder:text-gray-500"
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-700 px-6 rounded-xl font-bold transition-all"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>

      {response && (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 animate-fadeIn">
          <p className="text-gray-300 leading-relaxed italic">"{response}"</p>
        </div>
      )}
    </div>
  );
};

export default Assistant;
