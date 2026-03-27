"use client";

export default function Welcome() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Image Grid (The "Kids" Section) */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Top Left Image */}
          <div className="pt-8">
             <img 
               src="/images/kids1.jpg" 
               className="rounded-[2rem] w-full h-52 object-cover shadow-lg border-4 border-white" 
               alt="Student Learning" 
             />
          </div>

          {/* Large Right Image (Span 2 rows) */}
          <div className="row-span-2">
            <img 
              src="/images/kids2.jpg" 
              className="rounded-[2rem] w-full h-full min-h-[450px] object-cover shadow-2xl border-4 border-white" 
              alt="Students Playing" 
            />
          </div>

          {/* Bottom Left Image */}
          <div className="-mt-8">
            <img 
              src="/images/kids3.jpg" 
              className="rounded-[2rem] w-full h-52 object-cover shadow-lg border-4 border-white" 
              alt="Classroom Activity" 
            />
          </div>

          {/* Floating Badge (Matches Screenshot Style) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-yellow-500 p-5 rounded-3xl shadow-2xl shadow-yellow-200/50 text-white z-10 flex items-center gap-4 min-w-[200px]">
            <div className="text-3xl">🎓</div>
            <div>
               <p className="font-black text-sm uppercase leading-tight">CBSE Affiliated</p>
               <p className="text-[10px] font-bold opacity-90 uppercase tracking-tighter">Nursery to Grade 8</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="lg:pl-10">
          <span className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
            <span className="w-8 h-[2px] bg-yellow-600"></span> 
            Welcome to Sankalp
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif font-black text-indigo-950 leading-tight mb-6">
            Where Every Child's <br /> 
            <span className="text-[#31008e]">Potential Shines</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            At Sankalp Kids Care Academy, we believe that every child is unique and deserves the best start in life. Our CBSE-affiliated school combines academic rigor with creative exploration.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#31008e] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-indigo-100 hover:-translate-y-1 transition-all">
              Learn More About Us →
            </button>
            <button className="border-2 border-[#31008e] text-[#31008e] px-8 py-4 rounded-full font-bold hover:bg-[#31008e] hover:text-white transition-all">
              Our Academics
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}