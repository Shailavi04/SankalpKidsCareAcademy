"use client";
import React from "react";
import Link from "next/link";
import {
  FaEye, FaRocket, FaLightbulb, FaHeart,
  FaAward, FaUsers, FaShieldAlt, FaGlobe,
  FaSeedling, FaBook, FaUserGraduate
} from "react-icons/fa";
import InnerHero from "@/components/InnerHero";

export default function AboutPage() {
  const curriculum = [
    {
      age: "3-5 years",
      title: "Nursery & KG",
      desc: "Play-based learning, sensory development, basic literacy and numeracy, social skills, creative expression through art and music",
      icon: <FaSeedling />,
      bgColor: "bg-[#FFF9E6]", // Light Yellow
      accentColor: "text-[#D97706]",
      dotColor: "bg-[#D97706]"
    },
    {
      age: "6-10 years",
      title: "Primary (Grade 1-5)",
      desc: "Foundation in core subjects, language development, mathematical concepts, environmental studies, computer basics, sports and arts",
      icon: <FaBook />,
      bgColor: "bg-[#F0F4FF]", // Light Blue
      accentColor: "text-[#31008e]",
      dotColor: "bg-[#31008e]"
    },
    {
      age: "11-13 years",
      title: "Middle School (Grade 6-8)",
      desc: "Advanced concepts in Science, Mathematics, Social Studies, Languages, practical lab work, project-based learning, competitive exam preparation",
      icon: <FaUserGraduate />,
      bgColor: "bg-[#FFF9E6]", // Light Yellow
      accentColor: "text-[#D97706]",
      dotColor: "bg-[#31008e]"
    }
  ];

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION (Breadcrumb Hero) */}

      <InnerHero
        title="About Our Academy"
        currentPage="About Us"
        description="Learn about our journey, vision, and the values that make Sankalp Kids Care Academy a second home for children."
        bgImage="/images/campus.jpg"
      />

      {/* 2. VISION & MISSION CARDS */}
      <section className="py-24 container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-[#FFF9E6] p-12 rounded-[2.5rem] relative overflow-hidden group border border-amber-100/50 shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 text-2xl shadow-sm mb-8">
              <FaEye />
            </div>
            <h2 className="text-3xl font-serif font-black text-[#31008e] mb-6">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To be a leading educational institution that nurtures young minds, fostering creativity, critical thinking, and character development. We envision creating future leaders who are academically excellent, socially responsible, and globally aware citizens.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-[#F0F4FF] p-12 rounded-[2.5rem] relative overflow-hidden group border border-indigo-100/50 shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 text-2xl shadow-sm mb-8">
              <FaRocket />
            </div>
            <h2 className="text-3xl font-serif font-black text-[#31008e] mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To provide quality CBSE education through innovative teaching methods, state-of-the-art facilities, and a nurturing environment. We are committed to developing well-rounded individuals who excel academically while embracing values of integrity, compassion, and respect.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MESSAGE FROM PRINCIPAL */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/5 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-white border-[12px]">
                <img
                  src="/images/principal.jpg"
                  className="w-full aspect-[4/5] object-cover"
                  alt="Dr. Meera Patel"
                />
                <div className="absolute bottom-6 right-6 bg-yellow-500 p-4 rounded-2xl shadow-lg">
                  <FaAward className="text-white text-2xl" />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="lg:w-3/5">
              <span className="text-yellow-600 font-black uppercase tracking-widest text-sm block mb-4">Message from Principal</span>
              <h2 className="text-5xl font-serif font-black text-[#31008e] mb-8">Dr. Meera Patel</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>Dear Parents and Students,</p>
                <p>It gives me immense pleasure to welcome you to Sankalp Kids Care Academy, where we believe that every child is unique and possesses unlimited potential. Our commitment is to provide an educational experience that goes beyond textbooks and examinations.</p>
                <p>At Sankalp, we have created a learning environment that encourages curiosity, creativity, and critical thinking. Our CBSE-affiliated curriculum is designed to provide a strong academic foundation while nurturing the social, emotional, and physical development of each child.</p>
                <div className="pt-8">
                  <img src="/images/signature.png" alt="Signature" className="h-16 mb-2 grayscale contrast-125" />
                  <p className="font-serif font-black text-[#31008e] text-xl">Dr. Meera Patel</p>
                  <p className="text-sm font-bold text-slate-400">Principal, Sankalp Kids Care Academy</p>
                  <p className="text-xs font-medium text-slate-400">M.Ed., Ph.D. in Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE LEARNING JOURNEY (TIMELINE) */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm mb-4 uppercase tracking-[0.3em]">
            {/* Small icon above the heading as seen in screenshot */}
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
              <FaBook className="text-xs" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-[#31008e] mb-6">
            Comprehensive Learning Journey
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our CBSE-based curriculum ensures holistic development through structured learning and modern teaching methodologies
          </p>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative">
          {/* Enhanced Timeline Line with top/bottom caps */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden lg:block">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-900 rounded-full"></div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-900 rounded-full"></div>
          </div>

          <div className="space-y-20">
            {curriculum.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-5/12">
                  <div className={`${item.bgColor} p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-white group`}>
                    <span className={`inline-block px-4 py-1 rounded-full bg-white ${item.accentColor} text-xs font-black mb-6 shadow-sm`}>
                      {item.age}
                    </span>
                    <h4 className="text-3xl font-serif font-black text-[#31008e] mb-4">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>

                <div className="lg:w-2/12 flex justify-center relative z-10">
                  <div className={`w-16 h-16 rounded-full ${item.dotColor} flex items-center justify-center text-white text-2xl shadow-xl ring-8 ring-white transform hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                </div>

                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-20 text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm mb-4 uppercase tracking-[0.3em]">
            <FaHeart className="text-xs" /> <span>Our Core Values</span>
          </div>
          <h2 className="text-5xl font-serif font-black text-[#31008e]">What We Stand For</h2>
        </div>

        <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Innovation", icon: <FaLightbulb className="text-amber-500" />, desc: "Embracing modern teaching methods and technology" },
            { title: "Care", icon: <FaHeart className="text-rose-500" />, desc: "Nurturing every child with love and attention" },
            { title: "Excellence", icon: <FaAward className="text-indigo-600" />, desc: "Striving for the highest standards in education" },
            { title: "Collaboration", icon: <FaUsers className="text-blue-500" />, desc: "Building strong partnerships with parents" },
            { title: "Integrity", icon: <FaShieldAlt className="text-slate-700" />, desc: "Teaching values and ethical principles" },
            { title: "Diversity", icon: <FaGlobe className="text-emerald-500" />, desc: "Celebrating different cultures and perspectives" },
          ].map((val, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                {val.icon}
              </div>
              <h4 className="text-2xl font-serif font-black text-[#31008e] mb-4">{val.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}