"use client";
import React, { useState } from "react";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";

export default function AdmissionPage() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { title: "Enquiry", desc: "Fill out the enquiry form or contact us directly", icon: "01" },
    { title: "School Visit", desc: "Schedule a campus tour to explore our facilities", icon: "02" },
    { title: "Application", desc: "Submit the completed application form with documents", icon: "03" },
    { title: "Interaction", desc: "Meet with our admission team and principal", icon: "04" },
    { title: "Admission", desc: "Complete fee payment and receive confirmation", icon: "05" },
  ];

  const eligibility = [
    { class: "Nursery", age: "3+ years (as on 31st March)", docs: "Birth Certificate, Aadhar Card, Passport Photo" },
    { class: "KG", age: "4+ years (as on 31st March)", docs: "Birth Certificate, Aadhar Card, Passport Photo, Previous School TC" },
    { class: "Grade 1", age: "5+ years (as on 31st March)", docs: "Birth Certificate, Aadhar Card, Passport Photo, Previous School TC, Progress Report" },
    { class: "Grade 2-5", age: "As per CBSE norms", docs: "Birth Certificate, Aadhar Card, Passport Photo, Previous School TC, Progress Report" },
    { class: "Grade 6-8", age: "As per CBSE norms", docs: "Birth Certificate, Aadhar Card, Passport Photo, Previous School TC, Progress Report, Character Certificate" },
  ];

  const dates = [
    { event: "Admission Start Date", date: "January 15, 2026" },
    { event: "Last Date for Application", date: "March 31, 2026" },
    { event: "Interaction Dates", date: "February - March 2026" },
    { event: "Session Begins", date: "April 1, 2026" },
  ];

  const documents = [
    "Birth Certificate (Original for verification)",
    "Aadhar Card of Student and Parents",
    "Recent Passport Size Photographs (4 copies)",
    "Transfer Certificate from Previous School",
    "Progress Report / Report Card",
    "Character Certificate (for Grade 6-8)",
    "Address Proof (Electricity Bill / Rent Agreement)",
    "Medical Certificate / Immunization Record",
  ];

  return (
    <main className="bg-white min-h-screen">


      {/* HERO - Simple Clean */}

      <InnerHero
        title="Admission"
        currentPage="Admission"
        description="Admission Open for 2026-27. Begin your child's journey towards excellence with quality CBSE education."
        bgImage="/images/campus.jpg" // Ya koi bhi admission related image
      />

      {/* PROCESS STEPS - Enhanced Visible Line */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#31008e] mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Simple and transparent steps to secure your child's admission
            </p>
          </div>

          <div className="relative">
            {/* 1. THE CONNECTING LINE - Improved Visibility */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-1 z-0">
              {/* Dashed line for better visual flow */}
              <div className="w-full h-full border-t-4 border-dashed border-slate-200 relative">
                {/* Animated "Progress" overlay on the line */}
                <div className="absolute top-[-4px] left-0 h-1 bg-gradient-to-r from-[#31008e] to-[#f2a900] w-1/2 animate-pulse rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group text-center transition-all duration-500"
                >
                  {/* 2. STEP NUMBER BOX */}
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    {/* Animated Background Ring */}
                    <div className="absolute inset-[-4px] rounded-2xl bg-[#31008e]/5 scale-0 group-hover:scale-110 transition-transform duration-500"></div>

                    {/* Main Number Box */}
                    <div className="relative w-full h-full rounded-2xl bg-white border-2 border-[#31008e] flex items-center justify-center text-[#31008e] font-black text-2xl shadow-md group-hover:bg-[#31008e] group-hover:text-white group-hover:shadow-[#31008e]/30 transition-all duration-300">
                      {index + 1}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-[#f2a900] rounded-xl flex items-center justify-center text-indigo-950 text-lg shadow-lg border-2 border-white group-hover:rotate-12 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* 3. CONTENT AREA */}
                  <div className="p-6 rounded-3xl group-hover:bg-slate-50 transition-colors duration-300">
                    <h3 className="font-bold text-xl mb-3 text-[#31008e]">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY TABLE - Exact Match */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#31008e]">Eligibility Criteria</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-200">
            <table className="w-full bg-white">
              <thead className="bg-[#31008e] text-white">
                <tr>
                  <th className="p-6 text-left font-bold">Class</th>
                  <th className="p-6 text-left font-bold">Age Criteria</th>
                  <th className="p-6 text-left font-bold">Documents Required</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-[#31008e]">{item.class}</td>
                    <td className="p-6 font-semibold text-slate-800">{item.age}</td>
                    <td className="p-6 text-slate-700">{item.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#31008e]">Important Dates</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dates.map((date, index) => (
              <div key={index} className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[#31008e] transition-all bg-slate-50 hover:bg-white">
                <div className="text-3xl font-bold text-[#31008e] mb-4">{date.date}</div>
                <div className="font-bold text-slate-800 text-lg">{date.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS CHECKLIST */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#31008e] mb-6">Documents Checklist</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-4 border-[#31008e] hover:shadow-md transition-all">
                <span className="text-[#31008e] text-xl font-bold mt-1 min-w-[24px]">✓</span>
                <span className="text-slate-800 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Optimized Button Sizes */}
      <section className="py-20 bg-[#31008e] relative overflow-hidden">
        {/* Optional: Background soft glow for premium feel */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-20 text-white text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80 font-medium">
            Limited seats available for the 2026-27 session. Secure your child's future today!
          </p>

          {/* Buttons: Responsive padding and text */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/enquiry"
              className="w-full sm:w-auto bg-[#ffaa00] text-indigo-950 px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-center"
            >
              Fill Enquiry Form
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#31008e] hover:border-white transition-all text-center"
            >
              Contact Office
            </Link>
          </div>

          {/* Contact Info: Clean layout */}
          <div className="mt-12 pt-8 border-t border-white/10 text-sm md:text-base opacity-90">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <span>
                Call: <a href="tel:+919876543210" className="font-bold hover:text-yellow-400 transition-colors">+91-9876543210</a>
              </span>
              <span className="hidden sm:inline opacity-30">|</span>
              <span>
                Email: <a href="mailto:admissions@sankalpkids.com" className="font-bold hover:text-yellow-400 transition-colors">admissions@sankalpkids.com</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}