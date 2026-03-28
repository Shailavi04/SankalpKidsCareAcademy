"use client"; // Required for the scroll logic
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#31008e] text-white pt-20 pb-10 relative">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 1. BRAND & SUBSCRIBE */}
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              {/* Enhanced Logo Container */}
              <Link href="/" className="relative group">
                {/* Soft Glow effect behind logo on hover */}
                <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative bg-white/5 backdrop-blur-sm p-1.5 rounded-xl border border-white/10 shadow-2xl group-hover:bg-white/10 transition-all w-fit">
                  <img
                    src="/images/logo.png"
                    alt="Sankalp Kids Care Academy"
                    className="h-12 lg:h-14 xl:h-16 w-auto object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="border-l-2 border-yellow-400/30 pl-5">
                <h3 className="text-2xl font-black leading-none uppercase tracking-tighter text-white">
                  Sankalp <span className="text-yellow-400">Academy</span>
                </h3>
                <p className="text-[10px] text-white/60 mt-2 uppercase font-bold tracking-[0.3em]">
                  CBSE Affiliated School
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs font-medium">
              Nurturing young minds with excellence. Providing quality CBSE education from Nursery to 8th Standard.
            </p>

            {/* Subscribe section remains here... */}
          </div>


          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-3 opacity-80 text-sm font-medium">
              <li><Link href="/about" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> About Us</Link></li>
              <li><Link href="/academics" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> Academics</Link></li>
              <li><Link href="/facilities" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> Facilities</Link></li>
              <li><Link href="/admission" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> Admission</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 flex items-center gap-2 transition-colors"><span>›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. ACADEMICS */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Our Classes</h4>
            <ul className="space-y-3 opacity-80 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Nursery & KG</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Primary School (1-5)</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Middle School (6-8)</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> CBSE Curriculum</li>
            </ul>
          </div>

          {/* 4. GET IN TOUCH */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact</h4>
            <div className="space-y-4 text-sm font-medium">
              <p className="flex items-center gap-4 group">
                <span className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-indigo-950 transition">📞</span> +91-63060 27283
              </p>
              <p className="flex items-center gap-4 group cursor-pointer">
                <span className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-indigo-950 transition">✉️</span> info@sankalpkids.com
              </p>
              <p className="flex items-start gap-4 group">
                <span className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-indigo-950 transition">📍</span> Station Road Sahatwar, Ballia  
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {["facebook", "instagram", "youtube", "twitter"].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#31008e] hover:-translate-y-1 transition-all">
                {social === "facebook" && <FaFacebookF />}
                {social === "instagram" && <FaInstagram />}
                {social === "youtube" && <FaYoutube />}
                {social === "twitter" && <FaTwitter />}
              </a>
            ))}
          </div>

          <p className="text-xs opacity-50 font-medium">© 2026 Sankalp Kids Care Academy. Built for Excellence.</p>

          <div className="flex gap-6 text-xs opacity-50 font-bold uppercase tracking-tighter">
            <Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[110]">
        {/* Attractive Smart Arrow */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-[#31008e] border border-white/20 p-4 rounded-2xl shadow-2xl text-white hover:bg-[#ffaa00] hover:text-[#31008e] transition-all duration-300 animate-bounce group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916306027283"
          target="_blank"
          className="bg-[#25d366] p-4 rounded-2xl shadow-2xl text-white text-2xl hover:scale-110 hover:shadow-green-500/50 transition-all active:scale-95"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}