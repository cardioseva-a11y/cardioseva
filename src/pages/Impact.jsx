import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';

/* Animated stat card */
const StatCard = ({ value, label, icon, color, bg, suffix = '+' }) => {
  const numeric = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const { count, ref } = useCountUp(numeric, 2200);
  return (
    <div ref={ref} className="card-lift p-8 flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500 reveal">
      <div className={`${bg} ${color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-inner group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">
        {value.startsWith('₹') ? '₹' : ''}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</p>
    </div>
  );
};

const Impact = () => {
  const scrollRef = React.useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const stats = [
    { label: "Lives Impacted", value: "120000", icon: "fa-heart-pulse", color: "text-red-600", bg: "bg-red-50 dark:bg-red-950/40", suffix: "+" },
    { label: "Financial Aid", value: "200000", icon: "fa-hand-holding-dollar", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/40", suffix: "₹+" },
    { label: "Medical Camps", value: "55", icon: "fa-tent", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/40", suffix: "+" },
    { label: "Cities Reached", value: "10", icon: "fa-map-location-dot", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-950/40", suffix: "+" },
  ];

  const upcomingSessions = [
    {
      title: "ECG Mastery: Basic to Advanced",
      date: "From 15 April 2026",
      time: "7 PM",
      audience: "Students, Interns, Doctors",
      certificate: true,
      doctor: "Dr Shreya Jyoti",
      speciality: "MBBS",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030893/WhatsApp_Image_2026-04-01_at_1.17.16_PM_omr9ho.jpg",
      instaLink: "https://www.instagram.com/p/C5I5_33ST-o/"
    },
    {
      title: "Orthopedic Health Sessions",
      date: "Starting Soon",
      time: "Evening Slot",
      audience: "Medical Professionals",
      certificate: true,
      doctor: "Dr Rahul Gupta",
      speciality: "MBBS (Orthopedic Surgeon)",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030910/WhatsApp_Image_2026-04-01_at_1.35.50_PM_xxp4cu.jpg",
      instaLink: "https://www.instagram.com/cardioseva/"
    },
    {
      title: "Women's health awareness series",
      date: "Ongoing",
      time: "Live Sessions",
      audience: "Only for Girls",
      certificate: false,
      doctor: "Dr Rutvi",
      speciality: "Women Health Advocate & Consultant",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775387333/WhatsApp_Image_2026-04-04_at_4.01.17_PM_bkgdnc.jpg",
      instaLink: "https://www.instagram.com/cardioseva/"
    },
    {
      title: "Health Awareness Program",
      date: "Ongoing",
      time: "Digital Sessions",
      audience: "General Public & Students",
      certificate: false,
      doctor: "Dr Azhar Khan",
      speciality: "MBBS (General Surgeon)",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775389330/WhatsApp_Image_2026-04-01_at_5.20.03_PM_rtsy9u.jpg",
      instaLink: "https://www.instagram.com/cardioseva/"
    },

  ];

  const caseStories = [
    {
      title: "Irfan Ansari's Road to Recovery",
      description: "When Irfan Ansari faced a life-threatening medical crisis, CardioSeva stepped in to facilitate treatment worth ₹2,00,000. Beyond the initial surgery, we continue to manage his ongoing dialysis sessions.",
      impact: "Treatment & Ongoing Dialysis",
      icon: "fa-user-injured",
      color: "bg-red-600"
    },
    {
      title: "Beyond Medicine: Basic Needs",
      description: "Health is tied to nutrition. We successfully conducted multiple free ration distribution drives and facilitated critical Angioplasty procedures for patients lacking means.",
      impact: "Ration & Angioplasty Support",
      icon: "fa-wheat-awn",
      color: "bg-amber-600"
    },
    {
      title: "Preventative Screening Drives",
      description: "Early detection saves lives. Our team conducts regular heart-health screenings in underserved communities, identifying high-risk individuals and providing medical pathways.",
      impact: "Community Health Defense",
      icon: "fa-stethoscope",
      color: "bg-blue-600"
    }
  ];

  const newsGallery = [
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775031372/WhatsApp_Image_2026-04-01_at_11.43.59_AM_areyo7.jpg", caption: "SMJ English Medium School Tanda – Award Distribution" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775031494/WhatsApp_Image_2026-04-01_at_1.46.51_PM_ldy5ud.jpg", caption: "₹2.5 Lakhs Donation for a Girl's Marriage" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775387794/WhatsApp_Image_2026-04-05_at_2.20.38_AM_ndaum6.jpg", caption: "Cardioseva is doing amazing work for the society" },

  ];

  const gallery = [
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417570/team2_jx6pp8.jpg", caption: "Afreeza World – First Inhaled Insulin Launching Program" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417674/teammeet_bgkaag.jpg", caption: "Greeting with professionals" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417801/program9_yhwh3c.jpg", caption: "Founder sharing his vision" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417894/camp1_f69rvi.jpg", caption: "Free Medical Camps" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773417991/camp4_uzwslk.jpg", caption: "Emergency Response Drill" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030144/akhilesh_yth3qx_ps0djj.jpg", caption: "Award by Honourable Shri Akhilesh Yadav" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775029809/WhatsApp_Image_2026-03-29_at_4.12.37_PM_hybdnr.jpg", caption: "Invited by SMJ English Medium School Tanda as Chief Guest" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775029930/WhatsApp_Image_2026-03-29_at_4.13.23_PM_krggv5.jpg", caption: "SMJ English Medium School – Student Awards Distribution" },
    { url: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1775030247/WhatsApp_Image_2026-03-31_at_10.54.56_PM_wx2aeh.jpg", caption: "Free Medical Camp: Masauli, Barabanki (U.P.) — 31/03/2026" },
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060b15 0%, #0a1220 60%, #060d1a 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[80px]"></div>
        </div>
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1200 60" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"
              points="0,30 200,30 240,8 260,52 280,8 310,30 450,30 490,15 530,45 570,30 800,30 840,10 860,50 880,10 900,30 1200,30" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Proof of Mission
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Measured in <br />
              <span className="gradient-text-crimson italic">Heartbeats.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              Every statistic represents a person, a family, and a life transformed.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-16 -mt-16 relative z-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* ── UPCOMING SESSIONS ───────────────────── */}
      <section className="py-24 cs-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end reveal">
          <div>
            <span className="section-label">Next Events</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Upcoming <span className="gradient-text italic">Sessions</span>
            </h2>
          </div>
        </div>

        <div className="relative group/gallery">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-12 z-30 w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-12 z-30 w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-10 px-4 gap-8 no-scrollbar snap-x scroll-smooth"
          >
            {upcomingSessions.map((session, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[420px] snap-center group relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 bg-slate-900 flex-shrink-0">
                {/* Background Image with Overlay */}
                <img
                  src={session.img}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  alt={session.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-8 left-8">
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-5 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Registration Open
                  </span>
                </div>

                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full translate-y-[45%] group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="mb-6">
                    {session.certificate && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-widest mb-3">
                        <i className="fas fa-graduation-cap"></i> Certificate Included
                      </span>
                    )}
                    <h3 className="text-3xl font-black text-white leading-tight">{session.title}</h3>
                  </div>

                  {/* Info Grid - appears on hover */}
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div>
                      <p className="text-blue-400 text-[9px] font-black uppercase tracking-[0.15em] mb-1">📅 Start Date</p>
                      <p className="text-white/90 font-bold text-xs">{session.date}</p>
                    </div>
                    <div>
                      <p className="text-blue-400 text-[9px] font-black uppercase tracking-[0.15em] mb-1">⏰ Time</p>
                      <p className="text-white/90 font-bold text-xs">{session.time}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-blue-400 text-[9px] font-black uppercase tracking-[0.15em] mb-1">🎯 Who can join</p>
                      <p className="text-white/90 font-bold text-xs">{session.audience}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <Link
                      to="/join-mission"
                      className="flex-[2] py-4 bg-white text-slate-950 font-black text-[10px] uppercase tracking-[0.15em] rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                    >
                      Register Now
                      <i className="fas fa-arrow-right text-[10px]"></i>
                    </Link>
                    <a
                      href={session.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.15em] rounded-2xl flex items-center justify-center gap-2 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all"
                    >
                      <i className="fab fa-instagram text-base"></i>
                      Visit Post
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ──────────────────────────── */}
      <section className="py-24 bg-blue-50/50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-14 reveal">
            <span className="section-label">Real Stories</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Milestones of Care</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg italic">"Turning critical moments into second chances."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {caseStories.map((item, i) => (
              <div key={i} className="card-lift p-8 reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">{item.description}</p>
                <div className="pt-5 border-t cs-border">
                  <span className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-wider flex items-center gap-2">
                    <i className="fas fa-check-circle text-sm"></i>{item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN THE NEWS ─────────────────────────── */}
      <section className="py-24 rounded-[3rem] mx-4 lg:mx-8 overflow-hidden my-10 relative"
        style={{ background: 'linear-gradient(135deg, #060b14 0%, #0a1220 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="reveal mb-14">
            <span className="section-label !text-blue-400">Media Coverage</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              We are in <span className="text-blue-500 underline decoration-blue-800 italic">News</span>
            </h2>
          </div>
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {newsGallery.map((news, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-3xl border-2 border-slate-800 hover:border-blue-500 transition-all duration-500 reveal break-inside-avoid"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <img
                  src={news.url}
                  className="w-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
                  alt={news.caption}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-black text-xl tracking-tight leading-tight mb-2">
                    {news.caption}
                  </p>
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <i className="fas fa-newspaper"></i> Media Coverage
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK IN ACTION GALLERY ──────────────── */}
      <section className="py-24 rounded-[3rem] mx-4 lg:mx-8 overflow-hidden mb-10 relative"
        style={{ background: 'linear-gradient(135deg, #060b14 0%, #0a1220 100%)' }}>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="reveal mb-14">
            <span className="section-label !text-blue-400">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Our Work in <span className="text-blue-500 underline decoration-blue-800">Action</span>
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-7 space-y-7">
            {gallery.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl border-2 border-slate-800 hover:border-blue-500 transition-all duration-500 reveal" style={{ transitionDelay: `${(i % 3) * 0.07}s` }}>
                <img src={`${img.url}?auto=format&fit=crop&q=80&w=800`} className="w-full grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000" alt={img.caption} loading='lazy' />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-black text-base leading-tight">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-5 bg-red-50 dark:bg-red-950/30 rounded-3xl mb-8">
            <i className="fas fa-hand-holding-heart text-red-500 text-3xl animate-heartbeat"></i>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-none">
            Let's save <br /> the <span className="gradient-text italic">Next Heart.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-mission" className="btn-primary text-lg px-12 py-5 rounded-2xl shadow-xl shadow-blue-200/50 dark:shadow-blue-900/40">
              <i className="fas fa-heart-pulse animate-heartbeat"></i>
              Join the Mission
            </Link>
            <Link to="/contact-us" className="btn-secondary text-lg px-12 py-5 rounded-2xl">
              <i className="fas fa-envelope text-sm"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;