import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const { isDark, toggleTheme }    = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = ({ isActive }) =>
    isActive
      ? 'relative text-blue-600 dark:text-blue-400 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:dark:bg-blue-400 after:rounded-full'
      : 'relative text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full';

  const mobileNavStyle = ({ isActive }) =>
    isActive
      ? 'block px-5 py-3.5 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold rounded-2xl text-sm'
      : 'block px-5 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-medium transition-all rounded-2xl text-sm';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'shadow-lg shadow-slate-900/10 dark:shadow-slate-950/40 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[72px]">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center gap-2.5 group relative z-50 flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-neon-blue group-hover:scale-105 transition-all duration-300">
            <img src={logo} alt="CardioSeva" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-lg md:text-xl tracking-tight text-slate-900 dark:text-white">
              Cardio<span className="text-blue-600 dark:text-blue-400">Seva</span>
            </span>
            <span className="hidden sm:block text-[9px] text-slate-400 dark:text-slate-500 font-semibold tracking-widest uppercase">
              Saving Hearts · Serving Lives
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          <NavLink to="/"            className={navStyle}>Home</NavLink>
          <NavLink to="/about"       className={navStyle}>About</NavLink>
          <NavLink to="/services"    className={navStyle}>Services</NavLink>
          <NavLink to="/initiatives" className={navStyle}>Initiatives</NavLink>
          <NavLink to="/impact"      className={navStyle}>Impact</NavLink>
          <NavLink to="/cardioteam"  className={navStyle}>Our Team</NavLink>
          <NavLink to="/contact-us"  className={navStyle}>Contact</NavLink>
        </div>

        {/* ── RIGHT ACTIONS ── */}
        <div className="flex items-center gap-3">
          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center 
                       bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300
                       hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400
                       border border-slate-200 dark:border-slate-700
                       transition-all duration-200 text-sm"
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* CTA */}
          <Link
            to="/join-mission"
            className="hidden lg:flex btn-primary text-sm px-6 py-2.5 rounded-xl shadow-md shadow-blue-200/50 dark:shadow-blue-900/50"
          >
            <i className="fas fa-heart-pulse text-xs"></i>
            Join Mission
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl
                       bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300
                       hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400
                       border border-slate-200 dark:border-slate-700 transition-all"
          >
            <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg w-5 text-center`}></i>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t
          border-slate-100 dark:border-slate-800/50
          ${isOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-1.5">
          <NavLink to="/"            onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-house w-5 mr-2"></i>Home
          </NavLink>
          <NavLink to="/about"       onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-circle-info w-5 mr-2"></i>About
          </NavLink>
          <NavLink to="/services"    onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-stethoscope w-5 mr-2"></i>Services
          </NavLink>
          <NavLink to="/initiatives" onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-rocket w-5 mr-2"></i>Initiatives
          </NavLink>
          <NavLink to="/impact"      onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-chart-line w-5 mr-2"></i>Impact
          </NavLink>
          <NavLink to="/cardioteam"  onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-user-doctor w-5 mr-2"></i>Our Team
          </NavLink>
          <NavLink to="/contact-us"  onClick={() => setIsOpen(false)} className={mobileNavStyle}>
            <i className="fas fa-envelope w-5 mr-2"></i>Contact
          </NavLink>

          {/* Mobile theme + CTA row */}
          <div className="flex gap-3 pt-3 mt-2">
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl
                         bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link
              to="/join-mission"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 
                         text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 dark:shadow-blue-900/50 transition-all"
            >
              <i className="fas fa-heart-pulse"></i>
              Join the Mission
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;