"use client";
import React, { useState, useEffect } from "react";
import InnerHero from "@/components/InnerHero";

export default function EnquiryPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ 
    type: null, 
    msg: '' 
  });

  // Component mount hone ke baad hi render hoga, mismatch khatam ho jayega.
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      studentName: formData.get("studentName"),
      parentName: formData.get("parentName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      className: formData.get("className"),
      messageContent: formData.get("messageContent"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ 
          type: 'success', 
          msg: 'Enquiry sent successfully! Please check your email.' 
        });
        (e.target as HTMLFormElement).reset();
        setMessage("");
      } else {
        setStatus({ 
          type: 'error', 
          msg: result.error || 'Failed to send enquiry. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        msg: 'Network error. Please check if your server is running.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // Jab tak mount na ho, kuch render mat karo (Hydration Error protection)
  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#31008e] selection:text-white">
      <InnerHero 
        title="Admission Enquiry" 
        currentPage="Enquiry" 
        description="Fill out the form below and our admission team will get back to you within 24 hours to guide you through the next steps."
        bgImage="/images/campus.jpg" 
      />

      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: CONTACT INFO */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">📞</div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Phone</h4>
                <a href="tel:+919876543210" className="text-lg font-bold text-slate-800 hover:text-[#31008e] transition-colors block">+91-9876543210</a>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">✉️</div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</h4>
                <a href="mailto:info@sankalpkids.com" className="text-lg font-bold text-slate-800 hover:text-[#31008e] transition-colors block">info@sankalpkids.com</a>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl group-hover:bg-[#31008e] group-hover:rotate-12 transition-all">📍</div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Address</h4>
                <p className="text-lg font-bold text-slate-800 leading-snug">123 Education Street<br/>City, State - 000000</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-black text-[#31008e] mb-2">Admission Enquiry Form</h3>
            <p className="text-slate-400 text-sm mb-12">Please provide details and we'll get back to you soon</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Student Name *</label>
                  <input name="studentName" required type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#31008e] focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Parent Name *</label>
                  <input name="parentName" required type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#31008e] focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Phone *</label>
                  <input name="phone" required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#31008e] focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Email *</label>
                  <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#31008e] focus:bg-white transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Class Applying For *</label>
                <select name="className" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#31008e] transition-all">
                  <option value="">Select Class</option>
                  {["Nursery", "KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"].map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
                <textarea 
                  name="messageContent"
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-6 py-6 h-40 resize-none outline-none focus:border-[#31008e]"
                />
                <p className="text-right text-[10px] font-bold text-slate-400">{message.length}/500</p>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#31008e] text-white py-6 rounded-[2rem] font-black uppercase tracking-widest hover:bg-indigo-900 transition-all disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>

                {status.type && (
                  <div className={`p-4 rounded-2xl text-center font-bold text-sm ${
                    status.type === 'success' 
                    ? 'bg-green-50 text-green-600 border border-green-100' 
                    : 'bg-red-50 text-red-600 border border-red-100'
                  }`}>
                    {status.msg}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}