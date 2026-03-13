import React from "react";
import { Link } from "react-router-dom";

const Initiatives = () => {
  const coreInitiatives = [
    {
      title: "Nationwide Heart Attack Awareness",
      category: "Public Health Education",
      desc: "Massive awareness campaigns designed to drastically reduce preventable heart attacks through lifestyle education and risk factor identification.",
      icon: "fa-bullhorn",
      impact: "Educational Outreach",
    },
    {
      title: "Affordable Diagnostic Ecosystem",
      category: "Infrastructure",
      desc: "Developing a network of low-cost diagnostic centers ensuring that every individual has access to early cardiac screenings regardless of income.",
      icon: "fa-microchip",
      impact: "Affordable Access",
    },
    {
      title: "Rural Outreach & Mobile Units",
      category: "Accessibility",
      desc: "Our future vision includes mobile diagnostic initiatives to bring high-end cardiac screening to India's most remote rural corners.",
      icon: "fa-truck-medical",
      impact: "Last-Mile Delivery",
    },
    {
      title: "Healthcare Skill Development",
      category: "Employment",
      desc: "Generating employment and upskilling healthcare workers to strengthen India's medical workforce and economic stability.",
      icon: "fa-user-gear",
      impact: "Career Growth",
    },
    {
      title: "Emergency Response & CPR Training",
      category: "Training",
      desc: "Conducting professional workshops and training programs to empower citizens with life-saving emergency response skills.",
      icon: "fa-hand-holding-heart",
      impact: "Life Saving Skills",
    },
    {
      title: "Multi-Speciality Vision",
      category: "Long-term Goal",
      desc: "Working toward a long-term goal of building low-cost, multi-speciality healthcare infrastructure across the nation.",
      icon: "fa-hospital",
      impact: "Systemic Change",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- STRATEGIC HERO SECTION --- */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              Our Roadmap
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Indian Healthcare
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              We don't just provide services—we build ecosystems. Our
              initiatives are designed to tackle heart disease from awareness to
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* --- INITIATIVES GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreInitiatives.map((init, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-100 p-10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:border-blue-100 flex flex-col h-full shadow-sm"
            >
              {/* Icon & Category */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  <i className={`fas ${init.icon}`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {init.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                {init.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {init.desc}
              </p>

              {/* Impact Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Impact</span>
                <span className="text-xs font-black text-blue-600 uppercase tracking-tighter bg-blue-50 px-3 py-1 rounded-lg">
                  {init.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECHNOLOGY & INNOVATION SECTION (Strategic Mention) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Future Forward</span>
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                Driven by Innovation, <br /> Led by Experts.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Under the technical guidance of our experts, 
                CardioSeva is integrating technology into preventive care. Our vision includes
                using data-driven insights to predict cardiac risks before they
                become emergencies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-3xl shadow-sm border border-slate-200/50 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <i className="fas fa-handshake-angle"></i>
                  </div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Trust & Transparency</p>
                </div>
                <div className="p-5 bg-white rounded-3xl shadow-sm border border-slate-200/50 flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <i className="fas fa-scale-balanced"></i>
                  </div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Ethical Healthcare</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl group relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[550px] object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                  alt="Innovation Lab"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="backdrop-blur-xl bg-white/10 p-10 rounded-[3rem] border border-white/20 text-center shadow-2xl">
                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
                    <h4 className="text-white text-3xl font-black mb-2 tracking-tight">
                      2026 Milestone
                    </h4>
                    <p className="text-blue-300 font-black text-xs uppercase tracking-[0.2em]">
                      AI Diagnostic Launch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-8">
             <i className="fas fa-heart-pulse text-blue-600 text-2xl animate-pulse"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            "No life should be lost to <br/><span className="text-blue-600 italic">preventable</span> causes."
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
              to="/join-mission"
            >
              Support an Initiative
            </Link>
            <Link
              className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-slate-200 transition-all"
              to="/contact-us"
            >
              Inquire for Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;