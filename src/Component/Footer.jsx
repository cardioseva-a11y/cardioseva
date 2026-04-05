import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home',        to: '/' },
    { label: 'About Us',    to: '/about' },
    { label: 'Services',    to: '/services' },
    { label: 'Initiatives', to: '/initiatives' },
    { label: 'Our Impact',  to: '/impact' },
    { label: 'Our Team',    to: '/cardioteam' },
    { label: 'Contact',     to: '/contact-us' },
    { label: 'Join Mission',to: '/join-mission' },
  ];

  const socialLinks = [
    { icon: 'fa-instagram', href: 'https://www.instagram.com/cardio__seva?igsh=NTkzM3hwdHY3ZGps', label: 'Instagram', color: 'hover:bg-pink-600 hover:border-pink-600' },
    { icon: 'fa-facebook-f', href: 'https://www.facebook.com/share/1DEqNsaZsR/', label: 'Facebook', color: 'hover:bg-blue-700 hover:border-blue-700' },
  ];

  const contactInfo = [
    { icon: 'fa-location-dot',      text: 'Cardioseva Office, Husainabad, Lucknow 226003' },
    { icon: 'fa-envelope-open-text',text: 'cardioseva@gmail.com' },
    { icon: 'fa-phone-volume',       text: '+91-95550 09585' },
  ];

  return (
    <footer className="relative bg-slate-950 dark:bg-[#070c18] text-slate-400 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* ECG decorative divider */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg viewBox="0 0 800 40" className="w-full h-8" preserveAspectRatio="none">
          <polyline
            fill="none" stroke="#3b82f6" strokeWidth="2"
            points="0,20 100,20 130,5 150,35 170,5 190,20 250,20 280,10 310,30 340,20 800,20"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-center justify-center overflow-hidden group-hover:glow-blue transition-all">
                <img src={logo} alt="CardioSeva" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  Cardio<span className="text-blue-500">Seva</span>
                </span>
                <p className="text-[9px] text-slate-500 font-semibold tracking-widest uppercase">Foundation</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-xs">
              Pioneering cardiac excellence across India through technology-driven
              diagnosis, compassionate care, and community education.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl
                    bg-slate-800 border border-slate-700 text-slate-400
                    hover:text-white hover:-translate-y-1 transition-all duration-300 ${s.color}`}
                >
                  <i className={`fab ${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-5 h-0.5 bg-blue-600 rounded-full"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-200 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-5 h-0.5 bg-blue-600 rounded-full"></span>
              Get Involved
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(5).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-200 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-800/50">
              <Link
                to="/join-mission"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <i className="fas fa-heart-pulse animate-heartbeat"></i>
                Join the Mission
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-5 h-0.5 bg-blue-600 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-blue-500 text-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} CardioSeva Healthcare Foundation · Healing Hearts, Saving Lives.</p>
          <div className="flex items-center gap-1 text-slate-600">
            <i className="fas fa-heart text-red-600 animate-heartbeat text-xs"></i>
            <span>Made with purpose for India's heart health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;