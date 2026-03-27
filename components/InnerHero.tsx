"use client";
import React from "react";
import Link from "next/link";

interface InnerHeroProps {
  title: string;
  currentPage: string;
  description?: string;
  bgImage?: string; // Optional Background Image support
}

const InnerHero = ({ title, currentPage, description, bgImage }: InnerHeroProps) => {
  return (
    <section className="relative min-h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden text-center">
      
      {/* 🖼️ IMAGE LAYER (Sirf tab dikhega jab bgImage pass hoga) */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <>
            <img
              src={bgImage}
              className="w-full h-full object-cover"
              alt={title}
            />
            {/* The Purple Touch Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#31008e]/95 to-[#31008e]/70 mix-blend-multiply"></div>
          </>
        ) : (
          /* Default Solid Purple Background if no image */
          <div className="absolute inset-0 bg-[#31008e]"></div>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* 🍞 BREADCRUMBS */}
        <nav className="flex justify-center items-center gap-3 mb-8">
          <Link 
            href="/" 
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all"
          >
            Home
          </Link>
          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
            {currentPage}
          </span>
        </nav>

        {/* MAIN TITLE */}
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight drop-shadow-2xl">
          {title}
        </h1>
        
        {description && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* SUBTLE BLUR EFFECT (Only for solid background) */}
      {!bgImage && (
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      )}
    </section>
  );
};

export default InnerHero;