"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ShareIcon
} from "@heroicons/react/24/outline";
import InnerHero from "@/components/InnerHero";

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is the admission process?", a: "Our process is simple: Online Enquiry > School Visit > Document Submission > Interaction > Admission Confirmation." },
    { q: "What are the school timings?", a: "Nursery & KG: 8:30 AM - 12:30 PM | Grade 1-8: 8:00 AM - 2:30 PM." },
    { q: "Do you provide transportation facility?", a: "Yes, we have a fleet of GPS-enabled buses covering a 15km radius around the campus." },
    { q: "What is the student-teacher ratio?", a: "We maintain a strict 20:1 ratio to ensure personalized attention for every child." },
    { q: "Are there any extracurricular activities?", a: "We offer Music, Dance, Karate, Yoga, and Coding as part of our holistic curriculum." },
  ];

  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-[#31008e] selection:text-white">

      {/* 🎭 HERO SECTION */}
      <InnerHero 
        title="Get in Touch" 
        currentPage="Contact Us" 
        description="We're here to answer your questions and help you get started with your child's journey."
        bgImage="/images/campus.jpg" // Optional: Image lagane se premium look aata hai
      />


      {/* 🗺️ MAP SECTION */}
      <section className="relative h-[500px] -mt-20 w-full overflow-hidden border-y border-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.565731320341!2d77.22727287632644!3d28.61393908488053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2dab96990a1%3A0x1bbad028c2c10f8!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1711550000000!5m2!1sen!2sin"
          className="w-full h-full grayscale-[0.2] contrast-[1.1]"
          loading="lazy"
        ></iframe>
   
      </section>

      {/* 📍 CONTACT CARDS */}
      <section className="py-24 container mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-8">

        {/* Visit Card */}
        <div className="bg-[#f0f4ff] p-12 rounded-[3rem] text-center flex flex-col items-center group hover:bg-[#31008e] transition-all duration-500">
          <div className="w-16 h-16 bg-[#31008e] rounded-full flex items-center justify-center mb-8 group-hover:bg-white">
            <MapPinIcon className="w-8 h-8 text-white group-hover:text-[#31008e]" />
          </div>
          <h3 className="text-2xl font-serif font-black text-[#31008e] mb-6 group-hover:text-white">Visit Us</h3>
          <p className="text-slate-600 group-hover:text-slate-200 text-sm leading-relaxed mb-6">
            Sankalp Kids Care Academy<br />
            Station Road Sahatwar<br />
            Balia, UP - 277211, India
          </p>
          <Link href="#" className="text-[#31008e] font-black text-xs uppercase tracking-[0.2em] border-b-2 border-[#31008e] group-hover:text-white group-hover:border-white pb-1">Get Directions →</Link>
        </div>

        {/* Call Card */}
        <div className="bg-[#fff9e6] p-12 rounded-[3rem] text-center flex flex-col items-center group hover:bg-[#f2a900] transition-all duration-500">
          <div className="w-16 h-16 bg-[#f2a900] rounded-full flex items-center justify-center mb-8 group-hover:bg-white">
            <PhoneIcon className="w-8 h-8 text-white group-hover:text-[#f2a900]" />
          </div>
          <h3 className="text-2xl font-serif font-black text-[#31008e] mb-6 group-hover:text-white">Call Us</h3>
          <div className="space-y-4 mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white/60">Admission: <span className="text-slate-800 group-hover:text-white block text-lg">+91-63060 27283</span></p>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white/60">Office: <span className="text-slate-800 group-hover:text-white block text-lg">+91-63060 27283</span></p>
          </div>
          <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-green-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:bg-white"></span> WhatsApp Us
          </a>
        </div>

        {/* Hours Card */}
        <div className="bg-[#f8f8f8] p-12 rounded-[3rem] text-center flex flex-col items-center group hover:bg-slate-900 transition-all duration-500">
          <div className="w-16 h-16 bg-[#31008e] rounded-full flex items-center justify-center mb-8 group-hover:bg-white">
            <ClockIcon className="w-8 h-8 text-white group-hover:text-slate-900" />
          </div>
          <h3 className="text-2xl font-serif font-black text-[#31008e] mb-6 group-hover:text-white">Office Hours</h3>
          <div className="space-y-4 text-sm text-slate-600 group-hover:text-slate-300 w-full">
            <div className="flex justify-between border-b border-slate-200 group-hover:border-white/10 pb-2">
              <span>Mon - Fri</span>
              <span className="font-bold text-slate-900 group-hover:text-white">8:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 group-hover:border-white/10 pb-2">
              <span>Saturday</span>
              <span className="font-bold text-slate-900 group-hover:text-white">8:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between opacity-50">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-8 group-hover:text-white/40">Closed on public holidays</p>
        </div>
      </section>

      {/* ✉️ BOTTOM CONTACT GRID */}
      <section className="py-24 bg-white container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Email Box */}
          <div className="p-12 rounded-[3rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/50">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center"><EnvelopeIcon className="w-6 h-6 text-[#31008e]" /></div>
              <h3 className="text-3xl font-serif font-black text-[#31008e]">Email Us</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: "General Enquiries", email: "info@sankalpkids.com" },
                { label: "Admissions", email: "admissions@sankalpkids.com" },
                { label: "Principal", email: "principal@sankalpkids.com" }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}:</p>
                  <a href={`mailto:${item.email}`} className="text-lg font-bold text-slate-800 hover:text-[#31008e] transition-colors">{item.email}</a>
                </div>
              ))}
            </div>
          </div>

{/* Social Box */}
<div className="p-12 rounded-[3rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/50">
  <div className="flex items-center gap-4 mb-8">
    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
      {/* Agar aapke paas ShareIcon hai toh use rehne dein, warna icon yahan badal sakte hain */}
      <span className="text-2xl">📢</span> 
    </div>
    <h3 className="text-3xl font-bold text-[#31008e] tracking-tight">Follow Us</h3>
  </div>
  
  <p className="text-slate-500 mb-10 leading-relaxed font-medium opacity-80">
    Stay connected with our community for daily updates, event highlights, and school news.
  </p>

  <div className="flex flex-wrap gap-4">
    {[
      { name: 'facebook', icon: <FaFacebookF />, color: 'hover:bg-[#1877F2]' },
      { name: 'instagram', icon: <FaInstagram />, color: 'hover:bg-[#E4405F]' },
      { name: 'youtube', icon: <FaYoutube />, color: 'hover:bg-[#FF0000]' },
      { name: 'twitter', icon: <FaTwitter />, color: 'hover:bg-[#1DA1F2]' }
    ].map((social) => (
      <a 
        key={social.name} 
        href="#" // Yahan apna link add karein
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 ${social.color} hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl`}
        title={social.name}
      >
        <span className="text-xl">{social.icon}</span>
      </a>
    ))}
  </div>
</div>

        </div>
      </section>

      {/* 🚀 ENQUIRY CTA */}
      <section className="py-32 bg-[#f0f4ff] text-center rounded-[4rem] mx-6">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-serif font-black text-[#31008e] mb-6">Have Questions About Admission?</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-light">Fill out our detailed enquiry form and we'll get back to you within 24 hours.</p>
          <Link href="/enquiry" className="bg-[#31008e] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-900 transition shadow-2xl shadow-indigo-200 inline-flex items-center gap-3">
            📋 Fill Enquiry Form
          </Link>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-32 container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-serif font-black text-[#31008e] text-center mb-20 tracking-tighter">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full px-10 py-8 flex justify-between items-center text-left hover:bg-slate-50"
              >
                <span className="text-lg font-bold text-[#31008e]">{faq.q}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaqIndex === i && (
                <div className="px-10 pb-8 text-slate-500 leading-relaxed text-base font-light border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

     
    </main>
  );
}