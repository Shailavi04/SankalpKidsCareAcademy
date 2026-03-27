"use client";
import React, { useState } from "react";
import Link from "react-icons/fa"; // Agar icon libraries use kar rahe hain
import InnerHero from "@/components/InnerHero";

export default function EnquiryPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#31008e] selection:text-white">
      
      {/* 1. Optimized Hero with InnerHero Component */}
      <InnerHero 
        title="Admission Enquiry" 
        currentPage="Enquiry" 
        description="Fill out the form below and our admission team will get back to you within 24 hours to guide you through the next steps."
        bgImage="/images/campus.jpg" 
      />

      {/* 2. MAIN CONTENT SECTION */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: CONTACT INFO */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">
                📞
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Phone</h4>
                <a href="tel:+919876543210" className="text-lg font-bold text-slate-800 hover:text-[#31008e] transition-colors block">+91-9876543210</a>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">
                ✉️
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</h4>
                <a href="mailto:info@sankalpkids.com" className="text-lg font-bold text-slate-800 hover:text-[#31008e] transition-colors block">info@sankalpkids.com</a>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">
                📍
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Address</h4>
                <p className="text-lg font-bold text-slate-800 leading-snug">123 Education Street<br/>City, State - 000000</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">
                🕒
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Office Hours</h4>
                <p className="text-lg font-bold text-slate-800 leading-snug">Monday - Saturday<br/>8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM WITH VISIBILITY FIX */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#31008e]/5 rounded-bl-full -mr-16 -mt-16"></div>
            
            <h3 className="text-3xl font-serif font-black text-[#31008e] mb-2">Admission Enquiry Form</h3>
            <p className="text-slate-400 text-sm mb-12">Please provide the following details and we'll get back to you soon</p>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Student Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Student Name *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-lg text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#31008e] focus:bg-white focus:ring-4 focus:ring-indigo-100/50 transition-all" 
                    placeholder="Enter student name" 
                  />
                </div>

                {/* Parent Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Parent Name *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-lg text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#31008e] focus:bg-white focus:ring-4 focus:ring-indigo-100/50 transition-all" 
                    placeholder="Enter parent name" 
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Phone Number *</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-lg text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#31008e] focus:bg-white focus:ring-4 focus:ring-indigo-100/50 transition-all" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Email Address *</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-lg text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#31008e] focus:bg-white focus:ring-4 focus:ring-indigo-100/50 transition-all" 
                    placeholder="example@email.com" 
                  />
                </div>
              </div>

              {/* Class Select */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Class Applying For *</label>
                <div className="relative">
                  <select 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-lg text-slate-900 outline-none focus:border-[#31008e] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-400">Select Class</option>
                    {["Nursery", "KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"].map(cls => (
                      <option key={cls} value={cls} className="text-slate-900">{cls}</option>
                    ))}
                  </select>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-sm">▼</span>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
                <textarea 
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-6 py-6 text-lg text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#31008e] focus:bg-white transition-all h-40 resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
                <p className="text-right text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {message.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#31008e] text-white py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-indigo-900 hover:shadow-2xl hover:shadow-indigo-200 hover:-translate-y-1 transition-all duration-300"
              >
                Submit Enquiry
              </button>
              
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-8 border-t border-slate-100">
                Your data is safe with us. We do not share information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}