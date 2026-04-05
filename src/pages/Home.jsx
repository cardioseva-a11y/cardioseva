import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';

/* ── Animated stat card ─────────────────────── */
const StatCard = ({ value, label, icon, suffix = '', prefix = '' }) => {
  const numeric = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const { count, ref } = useCountUp(numeric, 2200);
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="text-3xl xl:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-1">{label}</p>
    </div>
  );
};

const Home = () => {
  /* reveal on scroll */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollImages = [
    { title: "Awards", desc: "Honoured by Hon'ble Deputy Chief Minister of U.P @brajeshpathakup", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773415224/award1_t1whqr.jpg" },
    { title: "Greetings", desc: "National recognition ceremony", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773415533/award2_wgb04s.jpg" },
    { title: "Achievements", desc: "3-year partnership MoU signing", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416004/award3_h9pc4z.jpg" },
    { title: "Workshops", desc: "Free medical workshop – Hygei Group of Institutes", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416198/award5_ypplq1.jpg" },
    { title: "Events", desc: "Event at Sapphire Suites – a great success", img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416410/program3_cxh6mv.jpg" },
  ];
  const doubledImages = [...scrollImages, ...scrollImages];

  const missionRecords = [
    {
      title: "The Lucknow Heart Initiative",
      desc: "A hands-on cardiovascular awareness and training workshop conducted with Hygia group of institutions.",
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
      title: "Long Term Collaboration",
      desc: "CardioSeva team in discussion with Hygia group of institutions to build a long-term collaboration.",
      tag: "Technology",
      img: "https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773416962/meet1_gixsvb.jpg"
    }
  ];

  const specializations = [
    { title: "Health Awareness Guidance", desc: "Empowering communities with preventive lifestyle knowledge to reduce cardiac risks.", icon: "fas fa-heart-circle-check" },
    { title: "Medical Camps", desc: "Providing expert cardiac screenings and consultations in high-need urban areas.", icon: "fas fa-user-doctor" },
    { title: "Outreach Camps", desc: "Extending life-saving diagnostics to remote and rural regions across the nation.", icon: "fas fa-truck-medical" },
    { title: "Physiotherapy Workshop", desc: "Specialized rehabilitation programs for post-operative recovery and mobility.", icon: "fas fa-hand-holding-medical" },
    { title: "ECG Workshops", desc: "Advanced technical training for medical students and professionals on heart rhythm analysis.", icon: "fas fa-wave-square" },
    { title: "BLS Workshop", desc: "Certified Basic Life Support training to equip the public with life-saving CPR skills.", icon: "fas fa-kit-medical" },
  ];

  const testimonials = [
    { name: "Sita Sharma", location: "Mumbai", text: "My life changed after CardioSeva's awareness program. I learned how to identify early symptoms that saved my father.", img: "https://i.pravatar.cc/150?u=sita" },
    { name: "Raju Patel", location: "Kolkata", text: "The free medical camp provided me with a cardiac screening I couldn't otherwise afford. Truly a blessing.", img: "https://i.pravatar.cc/150?u=raju" },
    { name: "Mary D'Souza", location: "Chennai", text: "Professional, compassionate, and life-saving. Their BLS workshop gave me the confidence to handle emergencies.", img: "https://i.pravatar.cc/150?u=mary" }
  ];

  return (
    <div className="cs-bg overflow-x-hidden font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-hero-light dark:bg-none overflow-hidden">
        {/* BG orbs */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-950 dark:via-[#0a1628] dark:to-slate-950 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-blue-100/60 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-50/80 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

        {/* ECG decorative pulse line */}
        <div className="absolute bottom-10 inset-x-0 opacity-10 dark:opacity-20 pointer-events-none">
          <svg viewBox="0 0 1200 60" className="w-full" preserveAspectRatio="none">
            <polyline
              fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"
              points="0,30 100,30 140,8 160,52 180,8 210,30 320,30 360,15 400,45 440,30 600,30 640,10 660,50 680,10 700,30 900,30 940,22 970,38 1000,30 1200,30"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

            {/* Text column */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest">Pioneering Cardiac Care</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight text-slate-900 dark:text-white text-balance">
                Building a
                <span className="block gradient-text mt-1"> Healthier Heart</span>
                <span className="block text-slate-900 dark:text-white"> for India.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Transforming healthcare through awareness, early diagnosis, and affordable infrastructure. We bring world-class cardiac expertise to every corner of the nation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link className="btn-primary shadow-xl shadow-blue-200/60 dark:shadow-blue-900/40 text-base px-8 py-4 rounded-2xl" to='/join-mission'>
                  <i className="fas fa-heart-pulse animate-heartbeat"></i>
                  Join the Mission
                </Link>
                <Link className="btn-secondary text-base px-8 py-4 rounded-2xl" to='/impact'>
                  <i className="fas fa-chart-bar text-sm"></i>
                  View Our Impact
                </Link>
              </div>

              {/* Mini stats row */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-14 pt-10 border-t border-slate-100 dark:border-slate-800">
                <StatCard value="120000" label="Lives Impacted" icon="fa-heart-pulse" suffix="+" />
                <StatCard value="55" label="Medical Camps" icon="fa-tent" suffix="+" />
                <StatCard value="10" label="Cities Reached" icon="fa-map-pin" suffix="+" />
              </div>
            </div>

            {/* Image column */}
            <div className="lg:w-1/2 relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-[3rem] border-2 border-blue-200/30 dark:border-blue-800/30 animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-blue-900/30 border-4 border-white dark:border-slate-800">
                <img
                  src="https://res.cloudinary.com/dbq4rt3ja/image/upload/v1773428511/team22_g9ttmc.jpg"
                  className="w-full h-[520px] lg:h-[580px] object-cover"
                  alt="CardioSeva Medical Team"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 glass-card rounded-2xl p-4 flex items-center gap-3 max-w-[220px]">
                  <div className="heart-badge w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-heart text-white text-sm animate-heartbeat"></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">120,000+ Lives</p>
                    <p className="text-blue-300 text-[10px] font-bold uppercase tracking-wide">Impacted & Counting</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -top-5 -right-4 glass-card rounded-2xl p-3.5 flex items-center gap-3 shadow-xl">
                <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-heart text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-xs">55+ Camps</p>
                  <p className="text-green-400 text-[9px] font-bold uppercase tracking-wide">Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────── */}
      <div className="border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {[
              { icon: 'fa-award', text: 'Govt Recognised' },
              { icon: 'fa-hospital', text: 'MoU with Institutions' },
              { icon: 'fa-graduation-cap', text: 'Certified Training' },
              { icon: 'fa-hand-holding-heart', text: 'Fully Non-Profit' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <i className={`fas ${item.icon} text-blue-600 dark:text-blue-400 text-sm`}></i>
                <span className="text-xs font-bold uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AUTO-SCROLLING MISSION FEED ─────────── */}
      <section className="py-20 bg-slate-900 dark:bg-[#070c18] overflow-hidden">
        <div className="mb-12 px-4 text-center reveal">
          <span className="section-label !text-blue-400">Live Mission Feed</span>
          <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight">Real People. Real Results. Real Impact.</h2>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll gap-6 py-3">
            {doubledImages.map((item, i) => (
              <div key={i} className="inline-block w-[300px] md:w-[420px] flex-shrink-0 group cursor-pointer">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-neon-blue">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-black text-lg mb-1">{item.title}</h4>
                    <p className="text-blue-400 text-sm font-bold leading-snug line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION RECORDS ─────────────────────── */}
      <section className="py-28 cs-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
            <div className="max-w-2xl">
              <span className="section-label">Case Files</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Mission <span className="italic gradient-text">Records</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium text-lg">Detailed highlights from our most impactful programs across the country.</p>
            </div>
            <Link to="/impact" className="flex-shrink-0 flex items-center gap-2 bg-slate-900 dark:bg-blue-950/60 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 dark:hover:bg-blue-600 transition-all shadow-lg border border-slate-800 dark:border-blue-900">
              View All Impact <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {missionRecords.map((item, i) => (
              <div key={i} className="group cursor-pointer reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading='lazy'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-5 left-5">
                    <span className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 shadow-xl border border-blue-100 dark:border-blue-900">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INITIATIVES GRID ────────────────────── */}
      <section className="py-28 cs-bg-alt dark:bg-slate-900/60 rounded-[3rem] mx-4 lg:mx-8 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Our Specialized Initiatives</h2>
            <div className="ecg-line w-24 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((item, idx) => (
              <div
                key={idx}
                className="card-lift p-8 group reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <Link to="/initiatives" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                    Learn More <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────── */}
      <section className="py-28 cs-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Voices of Impact</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Stories That <span className="gradient-text italic">Matter</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card-lift p-8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <i key={s} className="fas fa-star text-yellow-400 text-sm"></i>)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTION CTA ──────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #0ea5e9 100%)' }}>
            {/* Orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-36 -mt-36 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-24 -mb-24 blur-3xl pointer-events-none"></div>

            {/* ECG line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
              <svg viewBox="0 0 800 40" className="w-full" preserveAspectRatio="none">
                <polyline fill="none" stroke="white" strokeWidth="2"
                  points="0,20 100,20 130,5 150,35 170,5 190,20 800,20" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
                <i className="fas fa-heart-pulse text-white text-2xl animate-heartbeat"></i>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to save lives?
              </h2>
              <p className="text-blue-100 mb-10 text-lg font-medium max-w-2xl mx-auto">
                Every heartbeat matters. Join us in transforming India's cardiac healthcare landscape today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/join-mission" className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-base shadow-xl hover:scale-105 transition-transform">
                  <i className="fas fa-user-plus mr-2"></i>Get Involved
                </Link>
                <Link to="/contact-us" className="bg-blue-700/60 border-2 border-blue-400/50 text-white px-10 py-4 rounded-2xl font-black text-base hover:bg-blue-800/70 transition backdrop-blur-sm">
                  <i className="fas fa-tent mr-2"></i>Inquire for Camp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
