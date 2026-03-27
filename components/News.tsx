"use client";

import Link from "next/link";

export default function News() {
  const events = [
    {
      category: "Event",
      date: "Mar 25, 2025",
      title: "Annual Sports Day 2025",
      desc: "Join us for an exciting day of athletic competitions, team sports, and fun activities for all students.",
      image: "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2070",
      badgeColor: "bg-yellow-500"
    },
    {
      category: "Admission",
      date: "Apr 5, 2025",
      title: "Admissions Open 2025-26",
      desc: "Enroll your child for the upcoming academic year. Limited seats available for all classes from Nursery to Grade 8.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
      badgeColor: "bg-orange-500"
    },
    {
      category: "Celebration",
      date: "Apr 14, 2025",
      title: "Science & Innovation Fair",
      desc: "Students showcase their creative science projects and innovations. Parents are welcome to attend this exciting event.",
      image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070",
      badgeColor: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-wider text-xs mb-2">
              📜 LATEST UPDATES
            </span>
            <h2 className="text-5xl font-serif font-bold text-indigo-950">News & Events</h2>
          </div>
          <Link href="/events" className="text-indigo-900 font-bold border-b-2 border-indigo-900 pb-1 hover:text-indigo-700 transition flex items-center gap-2">
            View All Events <span>→</span>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-[32px] mb-6 shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <span className={`absolute top-4 left-4 ${event.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg`}>
                  {event.category}
                </span>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <p className="text-slate-400 text-sm mb-2 flex items-center gap-2">
                  📅 {event.date}
                </p>
                <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-indigo-700 transition">
                  {event.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}