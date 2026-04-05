import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ahmad from "../assets/ahmad.jpeg";
import Aliza from "../assets/Aliza.jpeg";
import faiq from "../assets/faiq.jpeg";
import hassam from "../assets/hassam.jpeg";
import shadab from "../assets/shadab.jpeg";
import Anshika from "../assets/Anshika.jpeg";
import amir from "../assets/amir.jpeg";
import Naziya from "../assets/Naziya.jpeg";

const Team = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const leadership = {
    name: "Faiq Ahmad Mansoori",
    role: "Founder & CEO",
    desc: "Faiq Ahmad Mansoori leads the initiative to strengthen healthcare awareness and preventive health education. He oversees the overall mission, strategy, collaborations and national awareness campaigns of CardioSeva. His vision is to work strongly on healthcare infrastructure support, health education, poverty-related healthcare challenges and large-scale public health awareness to help build a healthier society.",
    img: faiq,
  };

  const experts = [
    { name: "Dr Hassam Ahmad",    role: "Co-Founder",                     img: hassam,  email: "hassamahmad987@gmail.com", phone: "9936586906" },
    { name: "Aliza Rizvi",        role: "Managing Director",               img: Aliza },
    { name: "Dr. Amir",           role: "Chief Medical Officer",           img: amir },
    { name: "Dr. Anshika",        role: "Clinical Advisor",                img: Anshika },
    { name: "Dr. Naziya Siddiqui",role: "Psychologist",                    img: Naziya },
    { name: "Dr. Ahmad Abubaker", role: "Senior Clinical Advisor",         img: ahmad },
    { name: "Dr. Shadab Khan",    role: "Clinical Advisor",                img: shadab },
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-28 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 60%, #0d1b30 100%)' }}>
        <div className="absolute inset-0 opacity-8 pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none">
          <svg viewBox="0 0 1000 40" className="w-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#3b82f6" strokeWidth="2"
              points="0,20 120,20 150,5 170,35 190,5 210,20 1000,20" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
            <i className="fas fa-users-medical text-xs"></i> The Experts Behind CardioSeva
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Our <span className="gradient-text">Leadership</span> Team
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Meet the visionaries, clinicians, and dedicated professionals driving India's cardiac health revolution.
          </p>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ───────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl dark:shadow-blue-900/20"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
            {/* Dark mode override */}
            <div className="dark:hidden absolute inset-0 rounded-[3rem] pointer-events-none"></div>
            <div className="hidden dark:block absolute inset-0 rounded-[3rem] pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #0f1929 0%, #152032 100%)' }}></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-16">
              <div className="lg:w-5/12">
                <div className="relative">
                  <div className="absolute -inset-3 bg-blue-400/20 dark:bg-blue-600/15 rounded-[2.5rem] blur-xl pointer-events-none"></div>
                  <img
                    src={leadership.img}
                    className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-700 object-cover w-full h-[480px]"
                    alt={leadership.name}
                  />
                  {/* Role tag */}
                  <div className="absolute -bottom-4 left-8 right-8 z-20">
                    <div className="bg-blue-600 text-white rounded-2xl px-6 py-3 text-center shadow-xl shadow-blue-300/40 dark:shadow-blue-900/50">
                      <p className="font-black text-lg">{leadership.name}</p>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">{leadership.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-7/12 pt-6 lg:pt-0">
                <span className="section-label">CardioSeva Visionary</span>
                <blockquote className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight italic">
                  "Healthcare is not a privilege — it is a right for every Indian."
                </blockquote>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                  {leadership.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact-us"
                    className="btn-primary shadow-lg shadow-blue-200/40 dark:shadow-blue-900/40"
                  >
                    <i className="fas fa-envelope text-sm"></i> Contact Faiq Mansoori
                  </Link>
                  <Link to="/about" className="btn-secondary">
                    <i className="fas fa-info-circle text-sm"></i> Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ────────────────────────────── */}
      <section className="py-16 cs-bg-alt dark:bg-slate-900/40 border-y cs-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="section-label">The Full Team</span>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Our Dedicated Professionals</h2>
            <div className="ecg-line w-28 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {experts.map((member, i) => (
              <div
                key={i}
                className="card-lift group overflow-hidden reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Hover label */}
                  <div className="absolute bottom-4 inset-x-4 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-black uppercase tracking-widest text-blue-300">CardioSeva</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">{member.role}</p>

                  {/* Only for Dr Hassam: show contact */}
                  {member.name === "Dr Hassam Ahmad" && (
                    <div className="flex flex-col items-center gap-2 mt-3 pt-3 border-t cs-border">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs font-medium">
                        <i className="fas fa-envelope text-blue-500 text-xs"></i>{member.email}
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs font-medium">
                        <i className="fas fa-phone text-blue-500 text-xs"></i>+91 {member.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────── */}
      <section className="py-28 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-2xl mb-8">
            <i className="fas fa-user-plus"></i>
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Want to Join Our Medical Team?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate cardiologists, tech experts, and healthcare volunteers to expand our reach.
          </p>
          <Link
            className="btn-primary text-xl px-14 py-5 rounded-full shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/40"
            to="/contact-us"
          >
            <i className="fas fa-heart-pulse animate-heartbeat"></i>
            Get Involved Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;