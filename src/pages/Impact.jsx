import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
  const stats = [
    { label: "Lives Impacted", value: "120,000+", icon: "fa-heart-pulse", color: "text-red-600", bg: "bg-red-50" },
    { label: "Financial Aid", value: "₹2.0L+", icon: "fa-hand-holding-dollar", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Medical Camps", value: "55+", icon: "fa-tent", color: "text-green-600", bg: "bg-green-50" },
    { label: "Cities Reached", value: "10+", icon: "fa-map-location-dot", color: "text-purple-600", bg: "bg-purple-50" }
  ];

  const upcomingSessions = [
    {
      title: "ECG Mastery: Basic to Advanced",
      date: "starting very soon!",
      Medium: "Digital",
      doctor: "Dr Shreya Jyoti",
      speciality: "MBBS",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030893/WhatsApp_Image_2026-04-01_at_1.17.16_PM_omr9ho.jpg",
      status: "Open"
    },
    {
      title: "ORTHOPEDIC HEALTH SESSIONS",
      date: "starting very soon!",
      Medium: "Digital",
      doctor: "Dr Rahul Gupta",
      speciality: "MBBS(Orthopedic Surgeon)",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030910/WhatsApp_Image_2026-04-01_at_1.35.50_PM_xxp4cu.jpg",
      status: "Open"
    },
    
  ];

  const caseStories = [
    {
      title: "Irfan Ansari's Road to Recovery",
      description: "When Irfan Ansari faced a life-threatening medical crisis, CardioSeva stepped in to facilitate treatment worth ₹2,00,000. Beyond the initial surgery, we continue to manage his ongoing dialysis sessions.",
      impact: "Treatment & Ongoing Dialysis",
      icon: "fa-user-injured"
    },
    {
      title: "Beyond Medicine: Basic Needs",
      description: "Health is tied to nutrition. We successfully conducted multiple free ration distribution drives and facilitated critical Angioplasty procedures for patients lacking means.",
      impact: "Ration & Angioplasty Support",
      icon: "fa-wheat-awn"
    },
    {
      title: "Preventative Screening Drives",
      description: "Early detection saves lives. Our team conducts regular heart-health screenings in underserved communities, identifying high-risk individuals and providing medical pathways.",
      impact: "Community Health Defense",
      icon: "fa-stethoscope"
    }
  ];

  const newsGallery = [
    { 
      url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775031372/WhatsApp_Image_2026-04-01_at_11.43.59_AM_areyo7.jpg", 
      caption: "SMJ English medium school tanda award distribution"
    },
    { 
      url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775031494/WhatsApp_Image_2026-04-01_at_1.46.51_PM_ldy5ud.jpg", 
      caption: "2.5 LAKHS DONATE FOR A GIRL MARRIAGE.",
    }
  ];

  const gallery = [
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417570/team2_jx6pp8.jpg", caption: "Afreeza World first inhaled insulin launching program" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417674/teammeet_bgkaag.jpg", caption: "Greeting with professionals" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417801/program9_yhwh3c.jpg", caption: "Founder sharing his vision" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417894/camp1_f69rvi.jpg", caption: "Free Medical Camps." },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417991/camp4_uzwslk.jpg", caption: "Emergency Response Drill" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030144/akhilesh_yth3qx_ps0djj.jpg", caption: "Award by Honable Sir Shri Akhilesh Yadav" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775029809/WhatsApp_Image_2026-03-29_at_4.12.37_PM_hybdnr.jpg", caption: "Invited by SMJ English Medium School Tanda Rampur as chief guest." },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775029930/WhatsApp_Image_2026-03-29_at_4.13.23_PM_krggv5.jpg", caption: "SMJ English Medium school Student Awards Distribution" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030247/WhatsApp_Image_2026-03-31_at_10.54.56_PM_wx2aeh.jpg", caption: "Free Medical Camp : Masauli Barabanki (U.P.) 31/03/2026" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO --- */}
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
              Every statistic represents a person, a family, and a life transformed.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
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

      {/* --- UPCOMING SESSIONS (HORIZONTAL SCROLL + HOVER INFO) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Next Events</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Upcoming <span className="text-blue-600 italic">Sessions</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-slate-400 font-bold text-sm">Scroll right to explore <i className="fas fa-arrow-right ml-2 animate-pulse"></i></p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 px-4 gap-8 no-scrollbar snap-x scroll-smooth">
          {upcomingSessions.map((session, i) => (
            <div key={i} className="min-w-[320px] md:min-w-[450px] snap-center group relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-transparent hover:border-blue-600 transition-all duration-500 cursor-pointer">
              <img 
                src={session.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                alt={session.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Static Title Header */}
              <div className="absolute bottom-12 left-10 right-10 z-10 group-hover:translate-y-[-180px] transition-transform duration-500 ease-in-out">
                <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg shadow-blue-900/50">
                  {session.status}
                </span>
                <h3 className="text-3xl font-black text-white leading-tight">{session.title}</h3>
              </div>

              {/* Hover Details Grid */}
              <div className="absolute bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-white/20">
                  <div>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Date</p>
                    <p className="text-white font-bold text-sm">{session.date}</p>
                  </div>
                  <div>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Medium</p>
                    <p className="text-white font-bold text-sm">{session.Medium}</p>
                  </div>
                  <div>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Lead Expert</p>
                    <p className="text-white font-bold text-sm">{session.doctor}</p>
                  </div>
                  <div>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Focus</p>
                    <p className="text-white font-bold text-sm">{session.speciality}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MILESTONES --- */}
      <section className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Milestones of Care</h2>
            <p className="text-slate-600 max-w-2xl text-lg italic">"Turning critical moments into second chances."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStories.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-100">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{item.description}</p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WE ARE IN NEWS --- */}
      <section className="py-24 bg-slate-950 rounded-[4rem] mx-4 lg:mx-10 overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">We are in <span className="text-blue-500 underline decoration-blue-800 italic">News</span></h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {newsGallery.map((news, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2.5rem] border-4 border-slate-900 hover:border-blue-600 transition-all duration-500">
                <img src={news.url} className="w-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000" alt={news.caption} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">{news.source}</span>
                  <p className="text-white font-black text-lg tracking-tight leading-tight">{news.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORK IN ACTION GALLERY --- */}
      <section className="py-24 bg-slate-950 rounded-[4rem] mx-4 lg:mx-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Our Work in <span className="text-blue-500 underline decoration-blue-800">Action</span></h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {gallery.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2.5rem] border-4 border-slate-900 hover:border-blue-600 transition-all duration-500">
                <img src={`${img.url}?auto=format&fit=crop&q=80&w=800`} className="w-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000" alt={img.caption} loading='lazy'/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <p className="text-white font-black text-lg tracking-tight leading-tight">{img.caption}</p>
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
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none">
            Let's save <br/> the <span className="text-blue-600 italic">Next Heart.</span>
          </h2>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-1">
            Join the Mission
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Impact;