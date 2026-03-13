import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // 1. Data for the Auto-Scrolling Gallery (Top Section)
  const scrollImages = [
    { title: "Awards", desc: "Honoured to be awarded by Hon'ble Deputy Chief minister of U.P @brajeshpathakup", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773415224/award1_t1whqr.jpg" },
    { title: "Greetings", desc: " ", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773415533/award2_wgb04s.jpg" },
    { title: "Achievements", desc: "3 years partnership MoU signing", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416004/award3_h9pc4z.jpg" },
    { title: "Workshops", desc: "Free medical workshop Hygei group of institute", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416198/award5_ypplq1.jpg" },
    { title: "Events", desc: "Event at Sapphire suites was a great success", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416410/program3_cxh6mv.jpg" },
  ];

  // Double the array for a seamless loop
  const doubledImages = [...scrollImages, ...scrollImages];

  // 2. Data for Mission Records (Grid Section)
  const missionRecords = [
    {
      title: "The Lucknow Heart Initiative",
      desc: "A milestone program that screened 1,200+ individuals in a single week, identifying 45 high-risk cases.",
      tag: "Case Study",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416876/program11_eqmb1e.jpg"
    },
    {
      title: "Youth CPR Certification",
      desc: "Empowering 500+ college students with the skills to act during a cardiac arrest emergency.",
      tag: "Training",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416786/program10_i6l9g7.jpg"
    },
    {
      title: "Mobile ECG Units",
      desc: "Deployment of portable diagnostic technology to reach people who cannot travel to hospitals.",
      tag: "Technology",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416962/meet1_gixsvb.jpg"
    }
  ];

  const specializations = [
    { title: "Health Awareness Guidance", desc: "Empowering communities with preventive lifestyle knowledge to reduce cardiac risks.", icon: "fas fa-heart-circle-check" },
    { title: "Medical Camps", desc: "Providing expert cardiac screenings and consultations in high-need urban areas.", icon: "fas fa-user-doctor" },
    { title: "Outreach Camps", desc: "Extending life-saving diagnostics to remote and rural regions across the nation.", icon: "fas fa-truck-medical" },
    { title: "Physiotherapy Workshop", desc: "Specialized rehabilitation programs designed for post-operative recovery and mobility.", icon: "fas fa-hand-holding-medical" },
    { title: "ECG Workshops", desc: "Advanced technical training for medical students and professionals on heart rhythm analysis.", icon: "fas fa-wave-square" },
    { title: "BLS Workshop", desc: "Certified Basic Life Support training to equip the public with life-saving CPR skills.", icon: "fas fa-kit-medical" },
  ];

  const testimonials = [
    { name: "Sita Sharma", location: "Mumbai", text: "My life changed after CardioSeva's awareness program. I learned how to identify early symptoms that saved my father.", img: "https://i.pravatar.cc/150?u=sita" },
    { name: "Raju Patel", location: "Kolkata", text: "The free medical camp provided me with a cardiac screening I couldn't otherwise afford. Truly a blessing.", img: "https://i.pravatar.cc/150?u=raju" },
    { name: "Mary D'Souza", location: "Chennai", text: "Professional, compassionate, and life-saving. Their BLS workshop gave me the confidence to handle emergencies.", img: "https://i.pravatar.cc/150?u=mary" }
  ];

  return (
    <div className="bg-white overflow-x-hidden font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
              Pioneering Cardiac Care
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tighter">
              Building a Healthier <span className="text-blue-600">Heart</span> for India.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Transforming healthcare through awareness, early diagnosis, and affordable infrastructure. We bring world-class cardiac expertise to every corner of the nation.
            </p>
            <Link className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-2xl shadow-blue-100 inline-block" to='/join-mission'>
              Join the Mission
            </Link>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417062/program12_dwzzti.jpg" 
              className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 object-cover h-[550px] w-full"
              alt="Medical Team"
            />
          </div>
        </div>
      </section>

      {/* --- AUTO-SCROLLING MISSION FEED --- */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="mb-12 px-4 text-center">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-3">Live Mission Feed</h2>
            <p className="text-white font-black text-3xl tracking-tight">Real People. Real Results. Real Impact.</p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-8 py-4">
            {doubledImages.map((item, i) => (
              <div key={i} className="inline-block w-[320px] md:w-[450px] flex-shrink-0 group">
                <div className="relative h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-800 transition-all duration-500 group-hover:border-blue-500">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-white font-black text-xl mb-1">{item.title}</h4>
                    <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CSS for Auto-Scroll Animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* --- MISSION RECORDS (Image + 2 Line Desc) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-3">Case Files</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Mission <span className="italic text-blue-600">Records</span></h3>
              <p className="text-slate-500 mt-4 font-medium">Detailed highlights from our most impactful programs across the country.</p>
            </div>
            <Link to="/impact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg">
              View All Impact
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {missionRecords.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 shadow-xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading='lazy'
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-xl">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-base leading-relaxed line-clamp-2 font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INITIATIVES GRID --- */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Our Specialized Initiatives</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{item.desc}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTION CTA --- */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 bg-blue-600 rounded-[3.5rem] p-16 shadow-2xl shadow-blue-200 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to save lives?</h2>
          <p className="text-blue-100 mb-12 text-xl font-medium max-w-2xl mx-auto">Every heartbeat matters. Join us in transforming India's cardiac healthcare landscape today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link to="/join-mission" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform">
              Get Involved
            </Link>
            <Link to="/contact-us" className="bg-blue-700 text-white border-2 border-blue-500 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition">
              Inquire for Camp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;