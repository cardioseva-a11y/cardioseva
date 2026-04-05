import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    emailjs.sendForm(
      'service_u729ekp',
      'template_q3qifr4',
      form.current,
      'Wj6RsHw-apiGyFJDW'
    )
    .then(() => {
      setStatus({ type: 'success', msg: 'Message sent successfully! Our medical team will reach out soon.' });
      e.target.reset();
    }, () => {
      setStatus({ type: 'error', msg: 'Delivery failed. Please check your connection or email us directly.' });
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    });
  };

  const contactDetails = [
    {
      title: "Main Headquarters",
      info:  "Cardioseva Office, Husainabad, Lucknow 226003",
      icon:  "fa-location-dot",
      color: "text-blue-600 dark:text-blue-400",
      bg:    "bg-blue-50 dark:bg-blue-950/50",
    },
    {
      title: "Email Support",
      info:  "cardioseva@gmail.com",
      icon:  "fa-envelope-open-text",
      color: "text-teal-600 dark:text-teal-400",
      bg:    "bg-teal-50 dark:bg-teal-950/50",
      href:  "mailto:cardioseva@gmail.com",
    },
    {
      title: "Direct Phone",
      info:  "+91-95550 09585",
      icon:  "fa-phone-volume",
      color: "text-green-600 dark:text-green-400",
      bg:    "bg-green-50 dark:bg-green-950/50",
      href:  "tel:+919555009585",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "fa-instagram", link: "https://www.instagram.com/cardio__seva?igsh=NTkzM3hwdHY3ZGps", color: "hover:bg-pink-600 hover:border-pink-600" },
    { name: "Facebook",  icon: "fa-facebook-f", link: "https://www.facebook.com/share/1DEqNsaZsR/",                  color: "hover:bg-blue-700 hover:border-blue-700" },
  ];

  return (
    <div className="cs-bg min-h-screen font-inter">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative py-24 cs-bg-alt dark:bg-slate-900/50 overflow-hidden border-b cs-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100/30 dark:bg-teal-900/8 rounded-full -ml-36 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
            <i className="fas fa-comment-medical text-xs"></i> Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Have questions about our cardiac camps or want to partner with us? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ── MAIN SECTION ─────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: info & socials */}
          <div className="lg:w-5/12 xl:w-1/3 space-y-8">
            <div className="reveal">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Direct Contact
              </h2>
              <div className="space-y-4">
                {contactDetails.map((item, i) => (
                  <div
                    key={i}
                    className="card-lift p-6 flex items-start gap-5 group cursor-pointer"
                    onClick={() => item.href && window.open(item.href)}
                  >
                    <div className={`${item.bg} ${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-base mb-1">{item.title}</h4>
                      <p className={`text-sm leading-relaxed font-medium ${item.href ? `${item.color} hover:underline cursor-pointer` : 'text-slate-500 dark:text-slate-400'}`}>
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="rounded-3xl p-8 text-white relative overflow-hidden reveal"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0a1628 100%)' }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-2">Follow Our Mission</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                  Stay updated with our latest medical camps and heart health tips.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-white transition-all duration-300 ${social.color} hover:-translate-y-1 shadow-lg`}
                    >
                      <i className={`fab ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="card-lift p-6 text-center reveal">
              <i className="fas fa-tent text-blue-600 dark:text-blue-400 text-3xl mb-4 block"></i>
              <h4 className="font-black text-slate-900 dark:text-white text-lg mb-2">Need a Medical Camp?</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed">We set up camps in hospitals, schools, and communities.</p>
              <Link to="/join-mission" className="btn-primary w-full justify-center text-sm py-3 rounded-xl">
                <i className="fas fa-user-plus text-xs"></i> Join the Mission
              </Link>
            </div>
          </div>

          {/* Right: message form */}
          <div className="lg:w-7/12 xl:w-2/3 reveal">
            <div className="card-lift p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-paper-plane text-white"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Send Us a Message</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">We reply within 24 hours</p>
                </div>
              </div>

              <form ref={form} className="space-y-7" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                    <input
                      name="user_name" type="text" required placeholder="Enter your name"
                      className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent rounded-2xl px-5 py-4
                                 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                                 text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email Address</label>
                    <input
                      name="email" type="email" required placeholder="email@example.com"
                      className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent rounded-2xl px-5 py-4
                                 focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                                 text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">How can we help?</label>
                  <textarea
                    name="message" rows="5" required placeholder="Tell us about your inquiry..."
                    className="w-full cs-bg-alt dark:bg-slate-800/60 border-2 border-transparent rounded-2xl px-5 py-4
                               focus:bg-white dark:focus:bg-slate-800 focus:border-blue-600 outline-none transition-all font-medium
                               text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                {status.msg && (
                  <div className={`p-4 rounded-2xl text-sm font-bold flex items-center gap-3
                    ${status.type === 'success' ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'}`}>
                    <i className={`fas ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'} text-lg`}></i>
                    <span>{status.msg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full text-white font-black py-5 rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-base
                    ${isSending
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200/50 dark:shadow-blue-900/50 hover:-translate-y-0.5'}`}
                >
                  {isSending ? (
                    <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                  ) : (
                    <><i className="fas fa-paper-plane text-sm"></i> Send Inquiry</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ──────────────────────────── */}
      <section className="pb-24 max-w-7xl mx-auto px-4">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <i className="fas fa-map-location-dot"></i>
            </div>
            <div>
              <h3 className="font-black text-slate-900 dark:text-white">Find Us</h3>
              <p className="text-slate-400 text-xs font-medium">Husainabad, Lucknow, U.P. 226003</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-900/20 border-4 border-white dark:border-slate-800 h-[460px] relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.912345!3d26.871234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzE2LjQiTiA4MMKwNTQnNDQuNCJF!5e0!3m2!1sen!2sin!4v123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="CardioSeva Lucknow Office"
              className="grayscale dark:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;