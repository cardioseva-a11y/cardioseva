import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = ({ isActive }) => 
    isActive 
      ? "text-blue-600 font-bold md:border-b-2 border-blue-600 pb-1" 
      : "text-gray-600 hover:text-blue-600 font-medium transition";

  const mobileNavStyle = ({ isActive }) => 
    isActive 
      ? "block px-4 py-3 text-blue-600 bg-blue-50 font-bold rounded-xl" 
      : "block px-4 py-3 text-gray-600 hover:bg-slate-50 font-medium transition rounded-xl";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center group relative z-50">
          <div className="w-16 h-16 md:w-20 md:h-20 mr-2 p-1 rounded-full border border-gray-100 flex items-center justify-center overflow-hidden bg-white hover:scale-105 transition-transform shadow-inner">
            <img src={logo} alt="CardioSeva Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-800">
              Cardio<span className="text-blue-600">Seva</span>
            </span>
            <span className="hidden sm:block text-[10px] text-gray-400 font-medium tracking-wide">Saving Hearts Serving Lives</span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/services" className={navStyle}>Services</NavLink>
          <NavLink to="/initiatives" className={navStyle}>Initiatives</NavLink>
          <NavLink to="/impact" className={navStyle}>Impact</NavLink>
          <NavLink to="/cardioteam" className={navStyle}>Our-Team</NavLink>
          <NavLink to="/contact-us" className={navStyle}>Contact</NavLink>
          
          <Link to="/join-mission" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200">
            Join Mission
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-600 hover:text-blue-600 transition"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl w-8`}></i>
        </button>
      </nav>

      {/* --- MOBILE MENU --- */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-b border-gray-100 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavStyle}>About</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Services</NavLink>
          <NavLink to="/initiatives" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Initiatives</NavLink>
          <NavLink to="/impact" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Impact</NavLink>
          <NavLink to="/cardioteam" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Our-Team</NavLink>
          <NavLink to="/contact-us" onClick={() => setIsOpen(false)} className={mobileNavStyle}>Contact</NavLink>
          
          <div className="pt-4 px-4">
            <Link 
              to="/join-mission" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100"
            >
              Join Mission
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;