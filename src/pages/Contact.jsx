import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    .then((result) => {
        setStatus({ type: 'success', msg: 'Message sent successfully! Our medical team will reach out soon.' });
        e.target.reset();
    }, (error) => {
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
      info: "Cardioseva Office, Husainabad, Lucknow 226003", 
      icon: "fa-location-dot",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      title: "Email Support", 
      info: "cardioseva@gmail.com", 
      icon: "fa-envelope-open-text",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    { 
      title: "Direct Phone", 
      info: "+91-95550 09585", 
      icon: "fa-phone-volume",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "fa-instagram", link: "https://instagram.com/cardioseva", hover: "hover:bg-pink-600" },
    { name: "Facebook", icon: "fa-facebook-f", link: "https://facebook.com/cardioseva", hover: "hover:bg-blue-700" },
    { name: "LinkedIn", icon: "fa-linkedin-in", link: "https://linkedin.com/company/cardioseva", hover: "hover:bg-blue-800" },
    { name: "X-Twitter", icon: "fa-x-twitter", link: "https://twitter.com/cardioseva", hover: "hover:bg-black" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- PAGE HEADER --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Contact <span className="text-blue-600">Us</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Have questions about our cardiac camps or want to partner with us? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* --- MAIN SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Info & Socials */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Direct Contact
              </h2>
              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                    <div className={`${item.bg} ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-bold mb-6">Follow Our Mission</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 ${social.hover} hover:-translate-y-2 shadow-lg`}
                    title={social.name}
                  >
                    <i className={`fab ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-slate-400 text-xs font-medium leading-relaxed">
                Stay updated with our latest medical camps and heart health tips.
              </p>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl shadow-blue-100/50 border border-slate-50">
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Send Us a Message</h2>
            
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    name="user_name" 
                    type="text" 
                    required 
                    placeholder="Enter your name" 
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
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">How can we help?</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Tell us about your inquiry..." 
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              {status.msg && (
                <div className={`p-5 rounded-2xl text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  <i className={`fas ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                  {status.msg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full text-white font-black py-6 rounded-2xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 hover:shadow-blue-300'}`}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Processing...
                  </>
                ) : (
                  <>
                    Send Inquiry <i className="fas fa-paper-plane text-sm"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="pb-24 max-w-7xl mx-auto px-4">
        <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 h-[500px] relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.912345!3d26.871234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzE2LjQiTiA4MMKwNTQnNDQuNCJF!5e0!3m2!1sen!2sin!4v123456789" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="CardioSeva Lucknow Office"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;