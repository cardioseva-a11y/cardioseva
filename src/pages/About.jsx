import React from 'react';
import { Link } from 'react-router-dom';
import faiq from '../assets/faiq.jpeg'
const About = () => {
  const timeline = [
    { year: "2021", title: "The Vision", desc: "Founder observed the rising heart attack crisis in India and established the mission for preventive care." },
    { year: "2022", title: "Nationwide Awareness", desc: "Launched public health education programs to reach thousands across various states." },
    { year: "2023", title: "Diagnostic Network", desc: "Established affordable diagnostic initiatives and conducted major medical camps." },
    { year: "2024", title: "Healthcare Transformation", desc: "Scaling into a multi-speciality ecosystem with AI-driven early diagnosis." }
  ];

  const coreValues = [
    { title: "Prevention First", icon: "fa-shield-heart", desc: "Focusing on diagnosis before treatment to save lives early." },
    { title: "Ethical Care", icon: "fa-handshake-angle", desc: "Building trust through transparency and subsidized medical costs." },
    { title: "Skill Building", icon: "fa-user-doctor", desc: "Creating employment and training professionals in the healthcare sector." }
  ];

  return (
    <div className="bg-white">
      {/* --- HERO: THE MISSION --- */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">National Healthcare Mission</span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">About <span className="text-blue-600">CardioSeva</span></h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            We are not just a traditional healthcare provider; we are a movement dedicated to transforming India's healthcare through prevention, technology, and humanity.
          </p>
        </div>
      </section>

      {/* --- VISION & PHILOSOPHY --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Driven by a <span className="text-blue-600 underline decoration-blue-100">Greater Purpose</span></h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-10">
              CardioSeva was founded on the realization that millions of lives could be saved through simple awareness and early diagnosis. Our philosophy is rooted in <strong>Prevention before Treatment</strong> and making world-class cardiac care affordable for every Indian citizen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <i className={`fas ${val.icon} text-blue-600 text-2xl mb-4`}></i>
                  <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl"></div>
             <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 rounded-[3.5rem] shadow-2xl border-8 border-white object-cover h-[500px] w-full"
              alt="Medical Team Collaboration"
              loading='lazy'
            />
          </div>
        </div>
      </section>

      {/* --- OUR STORY (TIMELINE) --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 lg:mx-10 my-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">The Evolution</h2>
            <p className="text-slate-400 font-medium italic">Our journey toward a heart-healthy India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <div key={i} className="group relative">
                <div className="text-5xl font-black text-white/10 group-hover:text-blue-600/20 transition-colors absolute -top-8 -left-2 tracking-tighter">
                  {item.year}
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-3 text-blue-400">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP MENTIONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-12 items-center border border-slate-100 shadow-sm">
          <div className="lg:w-2/3">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Leadership & Strategy</span>
            <h2 className="text-4xl font-black text-slate-900 mb-6 italic">"A mission-driven leader dedicated to saving lives."</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              CardioSeva is led by a visionary leadership team and healthcare advisors who believe that the high cost of treatment should never be the reason a life is lost. Our operational team works tirelessly to reach rural outreach and mobile diagnostic hubs.
            </p>
            <Link className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-xl"
            to='/cardioteam'
            >
               Meet Full Leadership Team
            </Link>
          </div>
          <div className="lg:w-1/3 text-center">
            <div className="w-48 h-48 bg-white rounded-full mx-auto border-8 border-blue-50 flex items-center justify-center p-2 shadow-inner">
               <img 
                 src={faiq} 
                 className="rounded-full w-full h-full object-cover" 
                 alt="Leadership Placeholder" 
                 loading='lazy'
               />
            </div>
            <h4 className="mt-6 text-xl font-bold text-slate-900">Visionary Leadership</h4>
            <p className="text-blue-600 text-xs font-black uppercase tracking-widest">CardioSeva Foundation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;