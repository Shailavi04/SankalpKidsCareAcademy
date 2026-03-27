"use client";

export default function Stats() {
  const stats = [
    { label: "Happy Students", value: "500+" },
    { label: "All Classes", value: "Nur–8th" },
    { label: "Expert Teachers", value: "50+" },
    { label: "Parent Rating", value: "4.9★" },
  ];

  return (
    <section className="relative -mt-16 z-20 pb-20 container mx-auto px-6 lg:px-20">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-indigo-100 p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border border-slate-50">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl font-black text-indigo-900">{s.value}</div>
            <div className="text-slate-500 font-bold text-xs uppercase mt-1 tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}