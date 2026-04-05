import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const JoinMission = () => {
  const form       = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status,    setStatus]    = useState({ type: '', msg: '' });

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const role   = e.target.role.value;
    const phone  = e.target.phone.value;
    const rawMsg = e.target.raw_message.value;
    form.current.message.value = `Role: ${role} | Phone: ${phone} | Message: ${rawMsg}`;

    emailjs.sendForm(
      'service_u729ekp',
      'template_q3qifr4',
      form.current,
      'Wj6RsHw-apiGyFJDW'
    )
    .then(() => {
      setStatus({ type: 'success', msg: 'Application submitted! Our team will review and contact you soon.' });
      e.target.reset();
    }, () => {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again later.' });
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    });
  };

  const options = [
    {
      title: "Join as Volunteer",
      desc: "Provide on-ground support at medical camps, assist with patient logistics, and gain invaluable experience.",
      icon: "fa-hand-holding-heart",
      benefit: "Impact 100+ lives per camp",
      color: "text-blue-600 dark:text-blue-400",
      bg:    "bg-blue-50 dark:bg-blue-950/50",
      border:"group-hover:border-blue-300 dark:group-hover:border-blue-700",
    },
    {
      title: "Partner With Us",
      desc: "Healthcare institutions and NGOs can join our network to scale cardiac diagnostic infrastructure.",
      icon: "fa-handshake-angle",
      benefit: "Scalable CSR impact",
      color: "text-teal-600 dark:text-teal-400",
      bg:    "bg-teal-50 dark:bg-teal-950/50",
      border:"group-hover:border-teal-300 dark:group-hover:border-teal-700",
    },
    {
      title: "Awareness Advocate",
      desc: "Distribute educational resources and conduct workshops to spread heart health awareness.",
      icon: "fa-bullhorn",
      benefit: "Flexible remote contribution",
      color: "text-green-600 dark:text-green-400",
      bg:    "bg-green-50 dark:bg-green-950/50",
      border:"group-hover:border-green-300 dark:group-hover:border-green-700",
    },
  ];

  const whyApply = [
    "Certified volunteer credentials for your career.",
    "Direct impact on rural healthcare infrastructure.",
    "Networking with top Indian cardiologists.",
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 60%, #0d1e35 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/8 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1000 40" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"
              points="0,20 100,20 130,5 150,35 170,5 190,20 1000,20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-500/20 text-green-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Be The Change
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Join the <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Your contribution helps us build a heart-healthy India. Join a community of over <strong className="text-white">200+ active change-makers.</strong>
          </p>
        </div>
      </section>

      {/* ── OPTIONS GRID ─────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="section-label">How to Contribute</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Choose Your Role</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-24">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`card-lift p-8 group border-2 transition-all duration-300 reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${opt.bg} ${opt.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-7 group-hover:scale-110 transition-transform shadow-sm`}>
                <i className={`fas ${opt.icon}`}></i>
              </div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white mb-3 tracking-tight">{opt.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">{opt.desc}</p>
              <div className={`py-2 px-4 ${opt.bg} rounded-xl inline-block text-[10px] font-black ${opt.color} uppercase tracking-widest`}>
                {opt.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* ── APPLICATION FORM ─────────────────────────── */}
        <div className="flex flex-col lg:flex-row rounded-[3rem] overflow-hidden border cs-border shadow-2xl dark:shadow-blue-900/20 reveal">

          {/* Left panel */}
          <div className="lg:w-5/12 p-12 md:p-16 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #1e40af 100%)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Heart icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-8">
                <i className="fas fa-heart-pulse text-white text-2xl animate-heartbeat"></i>
              </div>

              <h3 className="text-3xl font-black mb-4 tracking-tight">Why Apply?</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-10 font-medium">
                Every volunteer who joins CardioSeva becomes part of a growing movement to change India's cardiac health landscape.
              </p>

              <ul className="space-y-6">
                {whyApply.map((text, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-check text-white text-[10px]"></i>
                    </div>
                    <span className="font-medium text-blue-50 leading-relaxed text-sm">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Stats below */}
              <div className="mt-14 pt-8 border-t border-blue-500/40 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-black text-white">200+</div>
                  <div className="text-blue-300 text-[10px] font-black uppercase tracking-widest mt-1">Active Volunteers</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">55+</div>
                  <div className="text-blue-300 text-[10px] font-black uppercase tracking-widest mt-1">Camps Run</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:w-7/12 p-10 md:p-14 cs-bg">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Submit Application</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 font-medium">Fill in your details and we'll get back to you within 24 hours.</p>

            <form ref={form} className="space-y-7" onSubmit={sendEmail}>
              <input type="hidden" name="message" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                  <input
                    name="user_name" type="text" required placeholder="John Doe"
                    className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent cs-border rounded-2xl px-5 py-4
                               focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                               text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email Address</label>
                  <input
                    name="email" type="email" required placeholder="email@example.com"
                    className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent cs-border rounded-2xl px-5 py-4
                               focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                               text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Phone Number</label>
                  <input
                    name="phone" type="tel" required placeholder="+91 00000 00000"
                    className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent cs-border rounded-2xl px-5 py-4
                               focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                               text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Preferred Role</label>
                  <select
                    name="role" required
                    className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent cs-border rounded-2xl px-5 py-4
                               focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                               text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a role</option>
                    <option value="Medical Volunteer">Medical Volunteer</option>
                    <option value="Corporate Partner">Corporate Partner</option>
                    <option value="Sponsor a camp">Sponsor a Camp</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Why do you want to join?</label>
                <textarea
                  name="raw_message" rows="4" required placeholder="Tell us about your motivation..."
                  className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent cs-border rounded-2xl px-5 py-4
                             focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                             text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              {status.msg && (
                <div className={`p-4 rounded-2xl text-sm font-bold flex items-center gap-3
                  ${status.type === 'success' ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'}`}>
                  <i className={`fas ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`w-full text-white font-black py-5 rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-base
                  ${isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200/50 dark:shadow-blue-900/50 hover:-translate-y-0.5'}`}
              >
                {isSending ? (
                  <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                ) : (
                  <><i className="fas fa-paper-plane text-sm"></i> Submit Application</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinMission;