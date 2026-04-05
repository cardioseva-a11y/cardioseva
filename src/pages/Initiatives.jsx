import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Initiatives = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const coreInitiatives = [
    {
      title: "Nationwide Heart Attack Awareness",
      category: "Public Health Education",
      desc: "Massive awareness campaigns designed to drastically reduce preventable heart attacks through lifestyle education and risk factor identification.",
      icon: "fa-bullhorn",
      impact: "Educational Outreach",
      accentColor: "text-blue-600 dark:text-blue-400",
      accentBg: "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      title: "Affordable Diagnostic Ecosystem",
      category: "Infrastructure",
      desc: "Developing a network of low-cost diagnostic centers ensuring that every individual has access to early cardiac screenings regardless of income.",
      icon: "fa-microchip",
      impact: "Affordable Access",
      accentColor: "text-emerald-600 dark:text-emerald-400",
      accentBg: "bg-emerald-50 dark:bg-emerald-950/50",
    },
    {
      title: "Rural Outreach & Mobile Units",
      category: "Accessibility",
      desc: "Our future vision includes mobile diagnostic initiatives to bring high-end cardiac screening to India's most remote rural corners.",
      icon: "fa-truck-medical",
      impact: "Last-Mile Delivery",
      accentColor: "text-orange-600 dark:text-orange-400",
      accentBg: "bg-orange-50 dark:bg-orange-950/50",
    },
    {
      title: "Healthcare Skill Development",
      category: "Employment",
      desc: "Generating employment and upskilling healthcare workers to strengthen India's medical workforce and economic stability.",
      icon: "fa-user-gear",
      impact: "Career Growth",
      accentColor: "text-purple-600 dark:text-purple-400",
      accentBg: "bg-purple-50 dark:bg-purple-950/50",
    },
    {
      title: "Emergency Response & CPR Training",
      category: "Training",
      desc: "Conducting professional workshops and training programs to empower citizens with life-saving emergency response skills.",
      icon: "fa-hand-holding-heart",
      impact: "Life Saving Skills",
      accentColor: "text-red-600 dark:text-red-400",
      accentBg: "bg-red-50 dark:bg-red-950/50",
    },
    {
      title: "Multi-Speciality Vision",
      category: "Long-term Goal",
      desc: "Working toward a long-term goal of building low-cost, multi-speciality healthcare infrastructure across the nation.",
      icon: "fa-hospital",
      impact: "Systemic Change",
      accentColor: "text-cyan-600 dark:text-cyan-400",
      accentBg: "bg-cyan-50 dark:bg-cyan-950/50",
    },
  ];

  const pillars = [
    { icon: "fa-handshake-angle", label: "Trust & Transparency", color: "text-blue-500",   bg: "bg-blue-50 dark:bg-blue-950/50" },
    { icon: "fa-scale-balanced",  label: "Ethical Healthcare",   color: "text-green-500",  bg: "bg-green-50 dark:bg-green-950/50" },
    { icon: "fa-brain",           label: "Data-Driven Insights", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/50" },
    { icon: "fa-leaf",            label: "Sustainable Impact",   color: "text-emerald-500",bg: "bg-emerald-50 dark:bg-emerald-950/50" },
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060b14 0%, #0a1220 50%, #0d1930 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/8 rounded-full blur-[120px]"></div>
        </div>
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1200 50" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"
              points="0,25 150,25 190,8 210,42 230,8 260,25 400,25 440,12 480,38 520,25 750,25 780,10 800,40 820,10 840,25 1200,25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6">
              <i className="fas fa-map-signs text-xs"></i> Our Roadmap
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Transforming <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Indian Healthcare
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              We don't just provide services — we build ecosystems. Our initiatives are designed to tackle heart disease from awareness to infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ── INITIATIVES GRID ────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Core Initiatives</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">What We're Building</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {coreInitiatives.map((init, i) => (
            <div
              key={i}
              className="card-lift p-8 group relative flex flex-col h-full reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Decorative number watermark */}
              <div className="absolute top-4 right-6 text-7xl font-black text-slate-50 dark:text-slate-800/60 select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon & category row */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-14 h-14 ${init.accentBg} ${init.accentColor} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <i className={`fas ${init.icon}`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-full border cs-border">
                  {init.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight relative z-10">
                {init.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow font-medium relative z-10">{init.desc}</p>

              {/* Impact footer */}
              <div className="pt-5 mt-5 border-t cs-border flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Impact</span>
                <span className={`text-xs font-black uppercase tracking-tight ${init.accentColor} bg-opacity-10 px-3 py-1 rounded-lg ${init.accentBg}`}>
                  {init.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH & INNOVATION ───────────────────── */}
      <section className="py-24 cs-bg-alt dark:bg-slate-900/40 border-y cs-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <span className="section-label">Future Forward</span>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                Driven by Innovation, <br/> Led by Experts.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                Under the technical guidance of our experts, CardioSeva is integrating technology into preventive care. Our vision includes using data-driven insights to predict cardiac risks before they become emergencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border cs-border flex items-center gap-4 hover:border-blue-400 dark:hover:border-blue-600 transition-all group">
                    <div className={`w-10 h-10 ${p.bg} rounded-xl flex items-center justify-center ${p.color} group-hover:scale-110 transition-transform`}>
                      <i className={`fas ${p.icon} text-sm`}></i>
                    </div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative reveal">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-blue-900/20 group relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[520px] object-cover opacity-60 dark:opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  alt="Innovation Lab"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,16,32,0.9) 0%, rgba(10,16,32,0.5) 50%, rgba(10,16,32,0.2) 100%)' }}></div>

                {/* Glassmorphism badge */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="glass-card p-10 rounded-[2.5rem] text-center shadow-2xl max-w-xs w-full">
                    <div className="w-14 h-1 bg-blue-500 mx-auto mb-5 rounded-full"></div>
                    <h4 className="text-white text-3xl font-black mb-2 tracking-tight">2026 Milestone</h4>
                    <p className="text-blue-300 font-black text-xs uppercase tracking-[0.2em]">AI Diagnostic Launch</p>
                    <div className="mt-5 flex justify-center gap-2">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${j * 0.3}s` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section className="py-28 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-5 bg-blue-50 dark:bg-blue-950/40 rounded-full mb-8">
            <i className="fas fa-heart-pulse text-blue-600 dark:text-blue-400 text-3xl animate-heartbeat"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight text-balance">
            "No life should be lost to <br/>
            <span className="gradient-text italic">preventable</span> causes."
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              className="btn-primary text-lg px-12 py-5 rounded-2xl shadow-xl shadow-blue-200/50 dark:shadow-blue-900/40"
              to="/join-mission"
            >
              <i className="fas fa-hands-helping text-sm"></i>
              Support an Initiative
            </Link>
            <Link
              className="btn-secondary text-lg px-12 py-5 rounded-2xl"
              to="/contact-us"
            >
              <i className="fas fa-comment-dots text-sm"></i>
              Inquire for Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;