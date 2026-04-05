import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import faiq from '../assets/faiq.jpeg';

const About = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const timeline = [
    { year: "2021", title: "The Vision",              desc: "Founder observed the rising heart attack crisis in India and established the mission for preventive care.",      icon: "fa-eye" },
    { year: "2022", title: "Nationwide Awareness",    desc: "Launched public health education programs to reach thousands across various states.",                          icon: "fa-bullhorn" },
    { year: "2023", title: "Diagnostic Network",      desc: "Established affordable diagnostic initiatives and conducted major medical camps.",                             icon: "fa-stethoscope" },
    { year: "2024", title: "Healthcare Transformation",desc: "Scaling into a multi-speciality ecosystem with AI-driven early diagnosis.",                                  icon: "fa-rocket" },
  ];

  const coreValues = [
    { title: "Prevention First",  icon: "fa-shield-heart",      desc: "Focusing on diagnosis before treatment to save lives early." },
    { title: "Ethical Care",      icon: "fa-handshake-angle",   desc: "Building trust through transparency and subsidized medical costs." },
    { title: "Skill Building",    icon: "fa-user-doctor",       desc: "Creating employment and training professionals in the healthcare sector." },
  ];

  const achievements = [
    { value: "120,000+", label: "Lives Impacted",  icon: "fa-heart-pulse",       color: "text-red-500",    bg: "bg-red-50 dark:bg-red-950/30" },
    { value: "₹2L+",     label: "Financial Aid",   icon: "fa-hand-holding-dollar",color: "text-emerald-600",bg: "bg-emerald-50 dark:bg-emerald-950/30" },
    { value: "55+",      label: "Medical Camps",   icon: "fa-tent",              color: "text-blue-600",    bg: "bg-blue-50 dark:bg-blue-950/30" },
    { value: "10+",      label: "Cities Reached",  icon: "fa-map-location-dot",  color: "text-purple-600",  bg: "bg-purple-50 dark:bg-purple-950/30" },
  ];

  return (
    <div className="cs-bg">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0a1628 60%, #142035 100%)' }}>
        {/* BG orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        {/* ECG */}
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1000 40" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#3b82f6" strokeWidth="2"
              points="0,20 120,20 150,5 170,35 190,5 210,20 350,20 380,12 410,28 440,20 600,20 630,8 650,32 670,8 690,20 1000,20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
            <i className="fas fa-hospital text-xs"></i> National Healthcare Mission
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            About <span className="gradient-text">CardioSeva</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            We are not just a traditional healthcare provider; we are a movement dedicated to transforming India's healthcare through prevention, technology, and humanity.
          </p>
        </div>
      </section>

      {/* ── ACHIEVEMENT STATS ───────────────────── */}
      <section className="py-10 -mt-8 relative z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <div key={i} className="card-lift p-6 text-center group reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={`w-12 h-12 ${a.bg} ${a.color} rounded-2xl flex items-center justify-center text-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${a.icon}`}></i>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{a.value}</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISION & PHILOSOPHY ─────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal">
            <span className="section-label">Our Philosophy</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Driven by a <span className="gradient-text italic">Greater Purpose</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10 font-medium">
              CardioSeva was founded on the realization that millions of lives could be saved through simple awareness and early diagnosis. Our philosophy is rooted in <strong className="text-slate-900 dark:text-white">Prevention before Treatment</strong> and making world-class cardiac care affordable for every Indian citizen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreValues.map((val, i) => (
                <div key={i} className="p-5 rounded-2xl cs-bg-alt dark:bg-slate-800/40 border cs-border hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fas ${val.icon} text-sm`}></i>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{val.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative reveal">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
              className="relative z-10 rounded-[2.5rem] shadow-2xl dark:shadow-blue-900/30 border-4 border-white dark:border-slate-800 object-cover h-[480px] w-full"
              alt="Medical Team Collaboration"
              loading='lazy'
            />
            {/* Floating label */}
            <div className="absolute bottom-8 right-8 glass-card rounded-2xl px-5 py-3 z-20">
              <p className="text-white font-black text-sm">Prevention First</p>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">CardioSeva Principle</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────── */}
      <section className="py-28 relative overflow-hidden rounded-[3rem] mx-4 lg:mx-8 mb-10"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0b1628 100%)' }}>
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="section-label !text-blue-400">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">The Evolution</h2>
            <p className="text-slate-400 font-medium italic">Our journey toward a heart-healthy India</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative group reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                  {/* Year bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/20">
                    <i className={`fas ${item.icon} text-blue-400 group-hover:text-white text-lg transition-colors`}></i>
                  </div>
                  <div className="text-5xl font-black text-white/8 group-hover:text-blue-600/20 transition-colors mb-1 tracking-tighter absolute -top-2 -left-1 select-none">
                    {item.year}
                  </div>
                  <div className="relative z-10 pt-2">
                    <h3 className="font-black text-xl mb-2 text-blue-400">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-5 w-10 h-1 bg-blue-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="cs-bg-alt dark:bg-slate-900/40 rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row gap-12 items-center border cs-border shadow-sm reveal">
          <div className="lg:w-2/3">
            <span className="section-label">Leadership & Strategy</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 italic tracking-tight leading-tight">
              "A mission-driven leader dedicated to saving lives."
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              CardioSeva is led by a visionary leadership team and healthcare advisors who believe that the high cost of treatment should never be the reason a life is lost. Our operational team works tirelessly to reach rural outreach and mobile diagnostic hubs.
            </p>
            <Link
              className="btn-primary shadow-xl shadow-blue-200/40 dark:shadow-blue-900/40"
              to='/cardioteam'
            >
              <i className="fas fa-users text-sm"></i>
              Meet Full Leadership Team
            </Link>
          </div>

          <div className="lg:w-1/3 text-center">
            <div className="relative inline-block">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl mx-auto ring-4 ring-blue-100 dark:ring-blue-900/50">
                <img src={faiq} className="w-full h-full object-cover" alt="Faiq Ahmad Mansoori – CEO" loading='lazy' />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/30 animate-pulse-ring pointer-events-none"></div>
            </div>
            <h4 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Faiq Ahmad Mansoori</h4>
            <p className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mt-1">Founder & CEO · CardioSeva</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;