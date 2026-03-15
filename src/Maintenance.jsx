import React from 'react';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
      {/* Background Decorative Gradient */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" 
           style={{ background: 'radial-gradient(circle at 70% 20%, #eff6ff 0%, transparent 50%)' }}>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Heart Icon / Pulse Logo */}
        <div className="mb-10 flex justify-center">
          <div className="bg-blue-600 p-5 rounded-3xl shadow-2xl shadow-blue-200 animate-pulse">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z"/>
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Cardio<span className="text-blue-600">Seva</span>
        </h1>

        {/* Badge */}
        <div className="inline-block bg-blue-50 text-blue-700 px-5 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-blue-100">
          System Optimization in Progress
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 px-4">
          We’re upgrading our systems to serve you better.
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto px-2">
          Thank you for your patience. CardioSeva is currently undergoing scheduled maintenance. 
          The site will be live again shortly.
        </p>

        {/* Animated Loading Bar */}
        <div className="mb-12 max-w-xs mx-auto">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full w-1/2 animate-[loading_2s_infinite_ease-in-out]"></div>
          </div>
          <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Status: Enhancing Infrastructure
          </p>
        </div>

        {/* Contact Support Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl hover:border-blue-200 transition-colors">
            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Urgent Assistance</p>
            <p className="text-slate-700 font-bold">+91 9555009585</p>
          </div>
          <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl hover:border-blue-200 transition-colors">
            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Email Support</p>
            <p className="text-slate-700 font-bold text-sm">info@cardioseva.org</p>
          </div>
        </div>

        <footer className="mt-20 text-slate-400 text-xs font-medium">
          &copy; {new Date().getFullYear()} CardioSeva Foundation. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
