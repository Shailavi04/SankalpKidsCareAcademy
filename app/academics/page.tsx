"use client";
import React from "react";
import Link from "next/link";
import {
    FaPalette, FaMusic, FaRunning, FaRobot,
    FaMicrophone, FaLeaf, FaLightbulb, FaLaptop,
    FaUserAlt, FaChartLine, FaCheckCircle
} from "react-icons/fa";
import InnerHero from "@/components/InnerHero";

export default function AcademicsPage() {
    const categories = [
        {
            level: "Nursery & KG",
            age: "3-5 years",
            subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft", "Music", "Physical Education"],
            method: "Play-based learning with focus on sensory development, motor skills, and social interaction",
            assessment: "Continuous observation and developmental milestones tracking",
            bgColor: "bg-orange-50",
            accent: "text-orange-600"
        },
        {
            level: "Primary (Grade 1-5)",
            age: "6-10 years",
            subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "ICT", "GK"],
            method: "Inquiry-based learning focusing on conceptual clarity and foundational skills",
            assessment: "Periodic tests and subject enrichment activities as per CBSE norms",
            bgColor: "bg-indigo-50",
            accent: "text-[#31008e]"
        },
        {
            level: "Middle School (Grade 6-8)",
            age: "11-13 years",
            subjects: ["Physics", "Chemistry", "Biology", "History", "Geography", "Civics", "Algebra", "Geometry"],
            method: "Project-based learning to develop analytical thinking and problem-solving abilities",
            assessment: "Structured examinations (Half-yearly & Annual) with internal assessments",
            bgColor: "bg-yellow-50",
            accent: "text-yellow-700"
        }
    ];

    const coCurricular = [
        { title: "Arts & Crafts", icon: <FaPalette />, desc: "Painting, drawing, sculpture, and creative expression" },
        { title: "Music & Dance", icon: <FaMusic />, desc: "Vocal music, instruments, classical and contemporary dance" },
        { title: "Sports & Yoga", icon: <FaRunning />, desc: "Cricket, football, basketball, athletics, and yoga sessions" },
        { title: "Robotics & Coding", icon: <FaRobot />, desc: "STEM education, programming basics, and innovation labs" },
        { title: "Public Speaking", icon: <FaMicrophone />, desc: "Debates, elocution, presentations, and communication skills" },
        { title: "Environmental Club", icon: <FaLeaf />, desc: "Gardening, eco-awareness, sustainability projects" },
    ];

    return (
        <main className="bg-white">
            {/* 1. HERO SECTION */}

            <InnerHero 
                title="Academic Excellence" 
                currentPage="Academics" 
                description="CBSE curriculum designed for comprehensive development and analytical thinking from Nursery to Grade 8."
                bgImage="/images/campus.jpg" 
            />
            
            {/* 2. LEVEL-WISE CURRICULUM */}
            <section className="py-24 container mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-[#31008e] mb-4">Academic Structure</h2>
                    <p className="text-slate-500 text-lg">CBSE curriculum designed for comprehensive development from Nursery to Grade 8</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className={`${cat.bgColor} p-10 rounded-[3rem] border border-white shadow-sm flex flex-col`}>
                            <span className={`font-black uppercase tracking-widest text-xs mb-2 ${cat.accent}`}>{cat.age}</span>
                            <h3 className="text-3xl font-serif font-black text-[#31008e] mb-6">{cat.level}</h3>

                            <div className="mb-8">
                                <h4 className="font-bold text-[#31008e] mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                                    <FaCheckCircle className="text-sm opacity-50" /> Subjects Offered
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.subjects.map((s, idx) => (
                                        <span key={idx} className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-black/5">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto space-y-6">
                                <div>
                                    <h4 className="font-bold text-[#31008e] text-sm mb-2 uppercase tracking-wider">Methodology</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{cat.method}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#31008e] text-sm mb-2 uppercase tracking-wider">Assessment</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">{cat.assessment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CO-CURRICULAR ACTIVITIES (Exactly like Readdy) */}
            <section className="py-24 container mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-[#31008e] font-bold text-sm mb-4 uppercase tracking-[0.3em]">
                        <span className="text-xl">✧</span> <span>Beyond Academics</span>
                    </div>
                    <h2 className="text-5xl font-serif font-black text-[#31008e] mb-4">Co-curricular Activities</h2>
                    <p className="text-slate-500 text-lg">Holistic development through diverse extracurricular programs</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Arts & Crafts", desc: "Painting, drawing, sculpture, and creative expression", img: "/images/art-activity.jpg", icon: <FaPalette /> },
                        { title: "Music & Dance", desc: "Vocal music, instruments, classical and contemporary dance", img: "/images/music-activity.jpg", icon: <FaMusic /> },
                        { title: "Sports & Yoga", desc: "Cricket, football, basketball, athletics, and yoga sessions", img: "/images/sports-activity.jpg", icon: <FaRunning /> },
                        { title: "Robotics & Coding", desc: "STEM education, programming basics, and innovation labs", img: "/images/robotics-activity.jpg", icon: <FaRobot /> },
                        { title: "Public Speaking", desc: "Debates, elocution, presentations, and communication skills", img: "/images/public-speaking.jpg", icon: <FaMicrophone /> },
                        { title: "Environmental Club", desc: "Gardening, eco-awareness, sustainability projects", img: "/images/nature-activity.jpg", icon: <FaLeaf /> },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                            {/* Image Container */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-indigo-50 text-[#31008e] rounded-xl flex items-center justify-center text-lg">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-serif font-black text-[#31008e]">{item.title}</h4>
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* 4. TEACHING METHODOLOGY */}
            <section className="py-24 container mx-auto px-6 lg:px-20">
                <div className="bg-[#31008e] rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
                    <h2 className="text-4xl font-serif font-black mb-16 text-center">Our Teaching Methodology</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {[
                            { title: "Activity-Based", icon: <FaLightbulb className="text-yellow-400" />, desc: "Hands-on experiences that make learning engaging and memorable" },
                            { title: "Tech Integration", icon: <FaLaptop className="text-blue-300" />, desc: "Smart classrooms and digital tools for modern education" },
                            { title: "Individual Care", icon: <FaUserAlt className="text-rose-300" />, desc: "Small class sizes ensuring personalized guidance for every child" },
                            { title: "Continuous Assessment", icon: <FaChartLine className="text-emerald-300" />, desc: "Regular evaluation and feedback for consistent improvement" },
                        ].map((method, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl mb-6 flex justify-center">{method.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{method.title}</h4>
                                <p className="text-white/70 text-sm leading-relaxed">{method.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                </div>
            </section>
        </main>
    );
}