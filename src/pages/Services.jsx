import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const serviceList = [
    {
      title: "Health Awareness Guidance",
      desc: "Empowering communities with preventive lifestyle knowledge to reduce cardiac risks before they become emergencies.",
      icon: "fas fa-heart-circle-check",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/50",
      accent: "#2563eb"
    },
    {
      title: "Medical & Outreach Camps",
      desc: "Bringing world-class cardiac screenings and expert consultations to both urban high-need areas and remote rural regions.",
      icon: "fas fa-truck-medical",
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-950/50",
      accent: "#e11d48"
    },
    {
      title: "Physiotherapy Workshops",
      desc: "Specialized rehabilitation programs designed for post-operative recovery and long-term mobility for cardiac patients.",
      icon: "fas fa-hand-holding-medical",
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-950/50",
      accent: "#0d9488"
    },
    {
      title: "ECG & Diagnostic Initiatives",
      desc: "Advanced heart rhythm analysis and early detection programs using high-precision diagnostic equipment.",
      icon: "fas fa-wave-square",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/50",
      accent: "#4f46e5"
    },
    {
      title: "BLS Certified Training",
      desc: "Empowering the public and medical students with Basic Life Support and CPR skills to act during the 'Golden Hour'.",
      icon: "fas fa-kit-medical",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-950/50",
      accent: "#ea580c"
    },
    {
      title: "Infrastructure & Skill Building",
      desc: "Supporting hospital modernization and training the next generation of healthcare professionals in cardiac excellence.",
      icon: "fas fa-hospital-user",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50 dark:bg-cyan-950/50",
      accent: "#0891b2"
    }
  ];

  const steps = [
    { step: "01", title: "Awareness",  desc: "Educating the masses about risk factors.", icon: "fa-bullhorn" },
    { step: "02", title: "Diagnosis",  desc: "Conducting high-precision heart screenings.", icon: "fa-stethoscope" },
    { step: "03", title: "Support",    desc: "Connecting patients with affordable treatment.", icon: "fa-hands-holding" },
    { step: "04", title: "Recovery",   desc: "Post-operative rehab and physiotherapy.", icon: "fa-person-walking" },
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #0d1b30 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px]"></div>
        </div>
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1000 40" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#3b82f6" strokeWidth="2"
              points="0,20 100,20 130,5 150,35 170,5 190,20 250,20 280,10 310,30 340,20 1000,20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
              <i className="fas fa-stethoscope text-xs"></i> Our Expertise
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-none">
              Comprehensive <span className="gradient-text">Cardiac</span> Solutions.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              We bridge the gap between world-class medical technology and common citizens through awareness, diagnosis, and infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Our Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {serviceList.map((s, i) => (
            <div
              key={i}
              className="card-lift p-8 group relative overflow-hidden flex flex-col reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Decorative hover orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-slate-50 dark:bg-slate-800/30 group-hover:scale-[2.5] transition-transform duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center text-2xl mb-7 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <i className={s.icon}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium flex-grow">{s.desc}</p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all"
                  style={{ color: s.accent }}
                >
                  Inquire Service <i className="fas fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS STEPS ────────────────────────── */}
      <section className="py-24 cs-bg-alt dark:bg-slate-900/40 border-y cs-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Our Process</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">How We Deliver Care</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium italic">Our systematic approach to saving lives</p>
          </div>

          <div className="relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-900 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center group reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                      <i className={`fas ${step.icon} text-2xl text-blue-500 group-hover:text-white transition-colors`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="text-5xl font-black text-blue-50 dark:text-blue-950/80 mb-2 select-none">{step.step}</div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg mb-2">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/30"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0ea5e9 100%)' }}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <i className="fas fa-hospital text-blue-200 text-4xl mb-6 block"></i>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Bring CardioSeva <br/> to Your Community.
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium">
              We collaborate with hospitals, schools, and local organizations to set up medical camps and awareness hubs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-base hover:shadow-2xl transition-all hover:-translate-y-1">
                <i className="fas fa-tent mr-2"></i>Request a Camp
              </Link>
              <Link to="/join-mission" className="bg-blue-800/60 border-2 border-blue-400/40 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-black text-base hover:bg-blue-900/70 transition-all">
                <i className="fas fa-user-plus mr-2"></i>Join our Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;