"use client";
import React from "react";
import Link from "next/link";
import {
  FaChalkboardTeacher, FaLaptopCode, FaMicroscope,
  FaBookReader, FaRunning, FaPaintBrush,
  FaShieldAlt, FaBus, FaVideo, FaUserShield,
  FaHospitalSymbol, FaArrowRight
} from "react-icons/fa";
import InnerHero from "@/components/InnerHero";

export default function FacilitiesPage() {
  const facilityItems = [
    {
      title: "Smart Classrooms",
      icon: <FaChalkboardTeacher />,
      features: ["Interactive digital whiteboards", "Audio-visual learning aids", "High-speed internet", "Ergonomic furniture"],
      img: "/images/smart-class.jpg", // Replace with your image paths
      reverse: false
    },
    {
      title: "Computer Lab",
      icon: <FaLaptopCode />,
      features: ["Latest systems & software", "1:1 student-to-PC ratio", "Coding classes", "Internet safety education"],
      img: "/images/comp-lab.jpg",
      reverse: true
    },

    {
      title: "Science Laboratory",
      icon: <FaMicroscope />,
      features: ["Physics, Chemistry & Bio labs", "Modern scientific instruments", "Safety protocols", "Hands-on learning"],
      img: "/images/science-lab.jpg",
      reverse: false
    },
    {
      title: "Library & Reading Room",
      icon: <FaBookReader />,
      features: ["Extensive book collection", "Digital library access", "Quiet reading zones", "Comfortable seating"],
      img: "/images/library.jpg",
      reverse: true
    },
    {
      title: "Sports Complex",
      // Path to your custom sports icon
      iconImg: "/images/icons/sports-icon.png",
      features: [
        "Multi-purpose playground",
        "Indoor basketball & badminton courts",
        "Professional coaching staff",
        "Dedicated yoga & meditation hall"
      ],
      img: "/images/sports-complex.jpg", // The large facility image
      reverse: false // Set to true or false depending on where it sits in your list
    },
    {
      title: "Activity & Creativity Rooms",
      iconImg: "/images/icons/creative-icon.png",
      features: [
        "Dedicated Art & Craft workstations",
        "Music studio with varied instruments",
        "Storytelling & puppet theatre corner",
        "Clay modeling & pottery zone"
      ],
      img: "/images/activity-room.jpg",
      reverse: true // Flipped to keep the alternating pattern
    },
    {
      title: "CCTV Security System",
      iconImg: "/images/icons/security-icon.png",
      features: [
        "24/7 high-definition surveillance",
        "Coverage of all corridors & play areas",
        "Monitored entry and exit points",
        "Restricted access for unauthorized personnel"
      ],
      img: "/images/cctv-setup.jpg",
      reverse: false
    },
    {
      title: "Transport Facility",
      iconImg: "/images/icons/bus-icon.png",
      features: [
        "GPS-enabled school bus fleet",
        "Verified drivers and female attendants",
        "First-aid kits available on every bus",
        "Real-time tracking for parents"
      ],
      img: "/images/school-bus.jpg",
      reverse: true
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}

      <InnerHero
        title="World-Class Facilities"
        currentPage="Facilities"
        description="Modern infrastructure designed to provide the best learning environment for your child."
        bgImage="/images/school-building.jpg" // Pass your image path here!
      />

      {/* 2. MAIN FACILITIES (Alternating Layout) */}
      <section className="py-24 space-y-32">
        {facilityItems.map((item, i) => (
          <div key={i} className="container mx-auto px-6 lg:px-20">
            <div className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-50 text-[#31008e] rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <h2 className="text-4xl font-serif font-black text-[#31008e]">{item.title}</h2>
                </div>
                <ul className="space-y-4">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                      <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="group flex items-center gap-2 text-[#31008e] font-bold hover:gap-4 transition-all">
                  Request a Tour <FaArrowRight className="text-sm" />
                </button>
              </div>
              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform">
                  <img src={item.img} alt={item.title} className="w-full h-[400px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. SAFETY GRID SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
              <FaShieldAlt className="text-xs" /> <span>Safety First</span>
            </div>
            <h2 className="text-5xl font-serif font-black text-[#31008e] mb-4">Your Child's Safety is Our Priority</h2>
            <p className="text-slate-500 text-lg">Comprehensive security measures to ensure a safe learning environment.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "CCTV Monitoring", desc: "24/7 surveillance across entire campus", icon: <FaVideo className="text-green-500" /> },
              { title: "Trained Staff", desc: "Background-verified security personnel", icon: <FaUserShield className="text-teal-500" /> },
              { title: "Medical Room", desc: "On-campus medical facility with nurse", icon: <FaHospitalSymbol className="text-red-500" /> },
              { title: "Secure Transport", desc: "GPS-tracked buses with attendants", icon: <FaBus className="text-blue-500" /> },
            ].map((safety, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  {safety.icon}
                </div>
                <h4 className="text-xl font-bold text-[#31008e] mb-3">{safety.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{safety.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}