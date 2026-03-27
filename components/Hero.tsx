import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. THE IMAGE LAYER (Absolute positioned, covers entire section) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/campus.jpg" // <--- Path to the image in public folder
          alt="Sankalp Kids Care Academy Campus" 
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Extra Overlay (Enhances the "purple touch" and readability) */}
        {/* This makes the white text POP even more without ruining the image */}
        <div className="absolute inset-0 bg-[#31008e]/30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#31008e]/20 via-transparent to-[#31008e]/60 z-0"></div>
      </div>

      {/* 2. YOUR CONTENT CONTAINER (Matches your exact line) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white pb-20 mt-10">
        
        {/* Glass-morphism Badges (matches your screenshot style) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-yellow-400 text-xs">🎓</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">CBSE Affiliated School</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-yellow-400 text-xs">🏅</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">15+ Years Excellence</span>
          </div>
        </div>

        {/* Academic Headline (matches your screenshot style) */}
        <h1 className="text-5xl md:text-8xl font-serif font-black mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg">
          Building Bright <span className="text-[#ffaa00]">Futures</span>
          <br /> with Quality Education
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 mb-12 font-medium leading-relaxed font-light">
          A CBSE Affiliated institution offering classes from Nursery to Grade 8, fostering academic excellence and holistic development.
        </p>

        {/* Primary and Secondary Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-24">
          <Link href="/admission" className="bg-[#ffaa00] text-[#31008e] px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-xl">
            Apply for Admission →
          </Link>
          <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#31008e] transition-all shadow-xl">
            Enquiry Now
          </Link>
        </div>
      </div>

      {/* 3. THE WAVE DIVIDER (Optional, matches screenshot style) */}
      <div className="absolute bottom-0 w-full z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-white">
          <path d="M0,120L1440,120L1440,0C1320,60 1080,100 720,100C360,100 120,60 0,0L0,120Z" />
        </svg>
      </div>
    </section>
  );
}