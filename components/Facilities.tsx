"use client";

export default function Facilities() {
  const items = [
    { icon: "🖥️", title: "Smart Classrooms", desc: "Interactive digital boards & modern tech" },
    { icon: "🔬", title: "Science Lab", desc: "Fully equipped for hands-on experiments" },
    { icon: "📚", title: "Library", desc: "Extensive collection of books & digital resources" },
    { icon: "🏀", title: "Sports Complex", desc: "Indoor & outdoor sports facilities" },
    { icon: "🛡️", title: "CCTV Security", desc: "24/7 campus surveillance & safety" },
    { icon: "🚌", title: "Transport", desc: "GPS-enabled buses with trained staff" },
  ];
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-indigo-950 mb-12">World-Class Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-left hover:shadow-lg transition">
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-indigo-950 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}