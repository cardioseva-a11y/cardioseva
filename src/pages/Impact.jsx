import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
  const stats = [
    { label: "Lives Impacted", value: "120,000+", icon: "fa-heart-pulse", color: "text-red-600", bg: "bg-red-50" },
    { label: "Programs Conducted", value: "90+", icon: "fa-calendar-check", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Medical Camps", value: "55+", icon: "fa-tent", color: "text-green-600", bg: "bg-green-50" },
    { label: "Cities Reached", value: "10+", icon: "fa-map-location-dot", color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const stories = [
    { 
      name: "Sita Sharma", 
      loc: "Lucknow", 
      text: "CardioSeva's screening program caught my husband's condition just in time. We are eternally grateful for their prompt action.",
      img: "",
      tag: "Awareness Success"
    },
    { 
      name: "Haider Ali", 
      loc: "Noida", 
      text: "The free medical camp in our village was a blessing. I received expert guidance that I simply couldn't afford otherwise.",
      img: "",
      tag: "Camp Impact"
    },
    { 
      name: "Kristi Patel", 
      loc: "Lucknow", 
      text: "Participating in the BLS training empowered me to help my community in emergencies. It gave me the confidence to save lives.",
      img: "",
      tag: "Training Program"
    }
  ];

  const gallery = [
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417570/team2_jx6pp8.jpg", caption: "Afreeza World first inhaled insulin launching program" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417674/teammeet_bgkaag.jpg", caption: "Greeting with professionals" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417801/program9_yhwh3c.jpg", caption: "Founder sharing his vision" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417894/camp1_f69rvi.jpg", caption: "Free Medical Camps." },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417991/camp4_uzwslk.jpg", caption: "Emergency Response Drill" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773418098/akhilesh_yth3qx.jpg", caption: "Award by Honable Sir Shri Akhilesh Yadab" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- IMPACT HERO --- */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Proof of Mission</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Measured in <br/> <span className="text-blue-600 italic">Heartbeats.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              Every statistic represents a person, a family, and a life transformed. We don't just count numbers; we count success stories.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATISTICS GRID --- */}
      <section className="py-20 -mt-20 relative z-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50 flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500">
              <div className={`${stat.bg} ${stat.color} w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:bg-slate-900 group-hover:text-white transition-colors`}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">{stat.value}</h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- IMPACT STORIES --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Voices of Impact</h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3.5rem] relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <i className="fas fa-quote-right absolute top-8 right-8 text-4xl text-blue-100"></i>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <img src={story.img} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-xl" />
                <div>
                  <h4 className="font-black text-xl text-slate-900">{story.name}</h4>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-widest">{story.loc}</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{story.text}"</p>
              <span className="text-[10px] font-black tracking-widest bg-blue-600 text-white px-4 py-2 rounded-full uppercase shadow-lg shadow-blue-200">
                {story.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- VISUAL GALLERY (MASONRY-STYLE) --- */}
      <section className="py-24 bg-slate-950 rounded-[4rem] mx-4 lg:mx-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Work in <span className="text-blue-500 underline decoration-blue-800">Action</span></h2>
              <p className="text-slate-400 font-medium">Capturing the moments where technology meets humanity. From training sessions to deep-rural outreach.</p>
            </div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {gallery.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2.5rem] border-4 border-slate-900 hover:border-blue-600 transition-all duration-500">
                <img src={`${img.url}?auto=format&fit=crop&q=80&w=800`} className="w-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000" alt={img.caption} loading='lazy'/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <p className="text-white font-black text-lg tracking-tight">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block p-4 bg-red-50 rounded-3xl mb-8">
            <i className="fas fa-hand-holding-heart text-red-600 text-3xl animate-bounce"></i>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter">
            Let's save <br/> the <span className="text-blue-600 italic">Next Heart.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/join-mission" className="bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-1">
              Join the Mission
            </Link>
            <Link to="/contact-us" className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all">
              Sponsor a Camp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;