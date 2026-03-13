import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const JoinMission = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

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
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Partner With Us",
      desc: "Healthcare institutions and NGOs can join our network to scale cardiac diagnostic infrastructure.",
      icon: "fa-handshake-angle",
      benefit: "Scalable CSR impact",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Awareness Advocate",
      desc: "Distribute educational resources and conduct workshops to spread heart health awareness.",
      icon: "fa-bullhorn",
      benefit: "Flexible remote contribution",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Be The Change</span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Join the <span className="text-blue-500">Mission</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Your contribution helps us build a heart-healthy India. Join a community of over 200+ active change-makers.
          </p>
        </div>
      </section>

      {/* --- OPTIONS GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {options.map((opt, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className={`${opt.bg} ${opt.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${opt.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">{opt.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{opt.desc}</p>
              <div className="py-2 px-4 bg-slate-50 rounded-xl inline-block text-[10px] font-black text-blue-700 uppercase tracking-widest">
                {opt.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* --- APPLICATION FORM --- */}
        <div className="flex flex-col lg:flex-row gap-16 bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl">
          {/* Why Join Sidebar */}
          <div className="lg:w-1/3 bg-blue-600 p-12 md:p-16 text-white">
            <h3 className="text-3xl font-black mb-10 tracking-tight">Why Apply?</h3>
            <ul className="space-y-8">
              {[
                "Certified volunteer credentials for your career.",
                "Direct impact on rural healthcare infrastructure.",
                "Networking with top Indian cardiologists."
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-[10px]"></i>
                  </div>
                  <span className="font-medium text-blue-50 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-16 pt-10 border-t border-blue-500/50">
              <p className="text-blue-200 text-sm italic">"Be the change you wish to see in India's healthcare."</p>
            </div>
          </div>

          {/* Actual Form */}
          <div className="lg:w-2/3 p-8 md:p-16 bg-white">
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Submit Application</h2>
            
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    name="user_name" 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="email@example.com" 
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Role</label>
                <select 
                  name="role" 
                  required
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="">Select a role</option>
                  <option value="Medical Volunteer">Medical Volunteer</option>
                  <option value="Corporate Partner">Corporate Partner</option>
                  <option value="Awareness Advocate">Awareness Advocate</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Why do you want to join?</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Tell us about your motivation..." 
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              {status.msg && (
                <div className={`p-5 rounded-2xl text-sm font-bold flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  <i className={`fas ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                  {status.msg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full text-white font-black py-6 rounded-2xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
              >
                {isSending ? (
                  <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                ) : (
                  <>Submit Application <i className="fas fa-arrow-right text-sm"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER TRIGGER --- */}
      <section className="py-24 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Join 10,000+ impacted lives</p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 italic tracking-tight">"Be the heart of our mission."</h2>
      </section>
    </div>
  );
};

export default JoinMission;