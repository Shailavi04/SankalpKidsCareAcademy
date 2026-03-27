"use client";
import React, { useState } from "react";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Classroom", "Events", "Sports", "Activities"];

  const galleryImages = [
    { 
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
      cat: "Classroom", 
      title: "Smart Classroom Learning", 
      date: "March 2025", 
      size: "md:col-span-2 md:row-span-2" 
    },
    { 
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
      cat: "Events", 
      title: "Annual Prize Distribution", 
      date: "January 2025", 
      size: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
      cat: "Sports", 
      title: "Inter-School Cricket", 
      date: "February 2025", 
      size: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=600&fit=crop", 
      cat: "Activities", 
      title: "Yoga & Wellness Session", 
      date: "March 2025", 
      size: "md:col-span-1 md:row-span-2" 
    },
    { 
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
      cat: "Classroom", 
      title: "Science Lab Experiment", 
      date: "December 2024", 
      size: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=300&fit=crop", 
      cat: "Events", 
      title: "Cultural Dance Fest", 
      date: "November 2024", 
      size: "md:col-span-2 md:row-span-1" 
    },
  ];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.cat === activeFilter);

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-[#31008e] selection:text-white">
      {/* HERO SECTION */}

      <InnerHero 
        title="Moments of Joy" 
        currentPage="Gallery" 
        description="A visual journey through our academic excellence and vibrant campus life."
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=450&fit=crop" 
      />


      {/* FILTER & GRID SECTION */}
      <section className="py-16 md:py-24 container mx-auto px-6 lg:px-20">
        {/* Modern Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat 
                ? "bg-[#31008e] text-white shadow-xl shadow-[#31008e]/20 scale-105" 
                : "bg-white text-slate-400 border border-slate-100 hover:border-slate-300 hover:text-slate-600 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {filteredImages.map((item, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2rem] group shadow-md transition-all duration-700 bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-2 ${item.size}`}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
              />
              
              {/* CLEAN WHITE HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-[#31008e] text-[10px] font-black uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.cat}
                </p>
                <h3 className="text-slate-900 text-xl font-bold leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <span className="w-8 h-[1px] bg-slate-300"></span>
                  <span className="text-slate-500 text-xs font-medium italic">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}