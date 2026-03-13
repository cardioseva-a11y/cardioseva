import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceList = [
    {
      title: "Health Awareness Guidance",
      desc: "Empowering communities with preventive lifestyle knowledge to reduce cardiac risks before they become emergencies.",
      icon: "fas fa-heart-circle-check",
      color: "blue"
    },
    {
      title: "Medical & Outreach Camps",
      desc: "Bringing world-class cardiac screenings and expert consultations to both urban high-need areas and remote rural regions.",
      icon: "fas fa-truck-medical",
      color: "rose"
    },
    {
      title: "Physiotherapy Workshops",
      desc: "Specialized rehabilitation programs designed for post-operative recovery and long-term mobility for cardiac patients.",
      icon: "fas fa-hand-holding-medical",
      color: "teal"
    },
    {
      title: "ECG & Diagnostic Initiatives",
      desc: "Advanced heart rhythm analysis and early detection programs using high-precision diagnostic equipment.",
      icon: "fas fa-wave-square",
      color: "indigo"
    },
    {
      title: "BLS Certified Training",
      desc: "Empowering the public and medical students with Basic Life Support and CPR skills to act during the 'Golden Hour'.",
      icon: "fas fa-kit-medical",
      color: "orange"
    },
    {
      title: "Infrastructure & Skill Building",
      desc: "Supporting hospital modernization and training the next generation of healthcare professionals in cardiac excellence.",
      icon: "fas fa-hospital-user",
      color: "cyan"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-400 rounded-full blur-[100px] opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Expertise</span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Comprehensive <span className="text-blue-600">Cardiac</span> Solutions.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              We bridge the gap between world-class medical technology and common citizens through awareness, diagnosis, and infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50"></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 transition-colors duration-300 shadow-xl shadow-blue-100`}>
                  <i className={s.icon}></i>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {s.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {s.desc}
                </p>
                
                <Link to="/contact-us" className="inline-flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Inquire Service <i className="fas fa-chevron-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICE DELIVERY PROCESS --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How We Deliver Care</h2>
            <p className="text-slate-500 font-medium italic">Our systematic approach to saving lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Awareness", desc: "Educating the masses about risk factors." },
              { step: "02", title: "Diagnosis", desc: "Conducting high-precision heart screenings." },
              { step: "03", title: "Support", desc: "Connecting patients with affordable treatment." },
              { step: "04", title: "Recovery", desc: "Post-operative rehab and physiotherapy." }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-black text-blue-100 mb-4">{step.step}</div>
                <h4 className="font-black text-slate-900 text-lg mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Bring CardioSeva <br/> to Your Community.</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium">
              We collaborate with hospitals, schools, and local organizations to set up medical camps and awareness hubs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact-us" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                Request a Camp
              </Link>
              <Link to="/join-mission" className="bg-blue-700 text-white border-2 border-blue-400 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all">
                Join our Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;