"use client";

export default function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Parent of Grade 4", text: "Sankalp has been a wonderful choice for our daughter. The teachers are dedicated and the environment is nurturing." },
    { name: "Rajesh Verma", role: "Parent of Grade 2", text: "The smart classrooms and activity-based learning approach have made my son genuinely excited about school." },
    { name: "Anita Patel", role: "Parent of KG Student", text: "The staff is incredibly caring and attentive. My child has grown so much in confidence since joining." },
  ];
  return (
    <section className="py-24 bg-white text-center container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-indigo-950 mb-16">What Parents Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-[40px] text-left border border-slate-100 hover:border-yellow-400 transition-colors">
            <div className="text-yellow-500 mb-4">★★★★★</div>
            <p className="text-slate-600 mb-8 italic">"{r.text}"</p>
            <p className="font-bold text-indigo-950">{r.name}</p>
            <p className="text-sm text-slate-500">{r.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}