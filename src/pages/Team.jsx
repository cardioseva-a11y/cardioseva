import React from "react";
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
  const leadership = {
    name: "Faiq Ahmad Mansoori",
    role: "Founder & Chief Medical Officer",
    desc: "Faiq Ahmad Mansoori leading the initiative to strengthen healthcare awareness and preventive health education. He oversees the overall mission, strategy, collaborations and national awareness campaigns of CardioSeva. His vision is to work strongly on healthcare infrastructure support, health education, poverty-related healthcare challenges and large-scale public health awareness to help build a healthier society.",
    img: faiq,
  };

  const experts = [
    {
      name: "Dr Hassam Ahmad",
      role: "Co-Founder",
      img: hassam,
    },
    {
      name: "Aliza Rizvi",
      role: "Managing Director Cardioseva",
      img: Aliza,
    },
    {
      name: "Dr.Amir",
      role: "Chief Medical Officer",
      img: amir,
    },
    {
      name: "Dr.Anshika",
      role: "Clinical Advisor",
      img: Anshika,
    },
    {
      name: "Dr.Naziya Siddiqui",
      role: "Psychologist",
      img: Naziya,
    },
    {
      name: "Dr.Ahmad Abubaker",
      role: "Senior Clinical Advisor",
      img: ahmad,
    },
    {
      name: "Dr.Shadab Khan",
      role: "Clinical Advisor",
      img: shadab,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- PAGE HEADER --- */}
      <section className="relative py-24 bg-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://www.transparenttextures.com/patterns/cubes.png"
            alt="pattern"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white relative z-10">
          Our Leadership Team
        </h1>
        <p className="text-blue-400 font-bold mt-4 uppercase tracking-[0.3em] text-sm relative z-10">
          The Experts Behind CardioSeva
        </p>
      </section>

      {/* --- FEATURED FOUNDER SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-blue-50 rounded-[4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-blue-100 border border-white">
          <div className="lg:w-1/2">
            <img
              src={leadership.img}
              className="rounded-[3rem] shadow-2xl border-8 border-white object-contain w-full h-[500px]"
              alt={leadership.name}
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs">
              CardioSeva Visionary
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
              {leadership.name}
            </h2>
            <h4 className="text-xl font-bold text-blue-600 mb-8">
              {leadership.role}
            </h4>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
              "{leadership.desc}"
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold border border-blue-100 shadow-sm hover:shadow-md transition">
                Contact Dr. Faiq
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTS GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Our Dedicated Team
            </h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {experts.map((member, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6">
                  <img
                    src={member.img}
                    className="w-full h-80 object-contain transform group-hover:scale-110 transition-transform duration-700"
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <i className="fab fa-linkedin text-white text-2xl cursor-pointer hover:text-blue-400"></i>
                      <i className="fas fa-envelope text-white text-2xl cursor-pointer hover:text-blue-400"></i>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN OUR MISSION TRIGGER --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-900 mb-8">
            Want to Join Our Medical Team?
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            We are always looking for passionate cardiologists, tech experts,
            and healthcare volunteers to expand our reach.
          </p>
          <Link
            className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            to="/contact-us"
          >
            Get Involved Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
