import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import JoinMission from "./pages/JoinMission";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Initiatives from "./pages/Initiatives";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen cs-bg transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/"             element={<Home />} />
              <Route path="/about"        element={<About />} />
              <Route path="/services"     element={<Services />} />
              <Route path="/join-mission" element={<JoinMission />} />
              <Route path="/contact-us"   element={<Contact />} />
              <Route path="/impact"       element={<Impact />} />
              <Route path="/cardioteam"   element={<Team />} />
              <Route path="/initiatives"  element={<Initiatives />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
