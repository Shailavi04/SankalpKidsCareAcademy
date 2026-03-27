"use client";

export default function Principal() {
  return (
    <section className="py-24 container mx-auto px-6 lg:px-20">
      <div className="bg-indigo-900 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/3 h-[400px]">
          <img src="/principal.jpg" className="w-full h-full object-cover" alt="Principal" />
        </div>
        <div className="md:w-2/3 p-12 lg:p-20 text-white flex flex-col justify-center">
          <span className="text-yellow-400 font-bold uppercase text-xs mb-4">Message from Principal</span>
          <h3 className="text-3xl font-serif italic mb-8">"Every child deserves a champion — an adult who will never give up on them."</h3>
          <p className="text-indigo-100 mb-8 leading-relaxed">We are committed to providing an education that goes beyond textbooks. We nurture curiosity, build character, and inspire every child.</p>
          <div>
            <p className="font-bold text-xl">Dr. Meera Patel</p>
            <p className="text-indigo-300 text-sm">Principal, M.Ed., Ph.D. in Education</p>
          </div>
        </div>
      </div>
    </section>
  );
}