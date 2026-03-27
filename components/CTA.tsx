"use client";

    import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 bg-indigo-900 overflow-hidden text-center">
      {/* Background overlay images for kids faces */}
      <div className="absolute inset-0 opacity-20 bg-[url('/kids-footer.jpg')] bg-cover bg-center"></div>
      <div className="relative z-10 container mx-auto px-6">
        <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase">Admissions Open for 2025–26</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-8 mb-6">Give Your Child the Best Start in Life</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">Limited seats available. Secure your child's future at Sankalp Kids Care Academy today.</p>
        <div className="flex justify-center gap-4">
          <Link href="/admission" className="bg-yellow-500 text-indigo-950 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">Apply Now</Link>
          <Link href="/contact" className="bg-white text-indigo-950 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition shadow-xl">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}