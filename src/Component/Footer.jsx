import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center text-white mb-6">
            <span className="text-blue-500 text-2xl mr-2"><i class="fas fa-heartbeat"></i></span>
            <span className="font-bold text-2xl">CardioSeva</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Pioneering cardiac excellence across India through technology-driven diagnosis and compassionate care.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Platform</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition">Our Story</Link></li>
            <li><Link to="/impact" className="hover:text-blue-400 transition">Impact Reports</Link></li>
            <li><Link to="/team" className="hover:text-blue-400 transition">Medical Team</Link></li>
          </ul>
        </div>

        

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/help" className="hover:text-blue-400 transition">Help Center</Link></li>
            <li><Link to="/contact-us" className="hover:text-blue-400 transition">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide">
        <p>© 2026 CardioSeva Healthcare. Healing Hearts, Saving Lives.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;