"use client";
import React from "react";

export default function LeadershipMessages() {
  const leaders = [
    {
      role: "Message from Director",
      name: "Mr. Pradeep Singh",
      title: "Director, Sankalp Kids Care Academy",
      message: "Our vision is to create a learning environment where every child feels safe, valued, and inspired to reach their full potential.",
      bgColor: "bg-slate-900", 
      accentColor: "text-orange-400"
    },
    {
      role: "Message from Principal",
      name: "Amrita Singh",
      title: "Principal, M.Ed., Ph.D. in Education",
      message: "Every child deserves a champion — an adult who will never give up on them. We nurture curiosity and build character.",
      bgColor: "bg-indigo-900", 
      accentColor: "text-yellow-400"
    }
  ];

  return (
    <section className="py-24 container mx-auto px-6 lg:px-20 space-y-8">
      {leaders.map((leader, index) => (
        <div 
          key={index} 
          className={`${leader.bgColor} rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}
        >
          {/* Text Section - Full Width without Image */}
          <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
            <span className={`${leader.accentColor} font-black uppercase text-xs tracking-widest mb-4`}>
              {leader.role}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif italic mb-8 leading-snug">
              "{leader.message}"
            </h3>
            <div>
              <p className="font-bold text-2xl tracking-tight">{leader.name}</p>
              <p className="opacity-60 text-sm mt-1">{leader.title}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}