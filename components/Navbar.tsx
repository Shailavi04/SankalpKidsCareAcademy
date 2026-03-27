"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to detect current route
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get current path

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Facilities", href: "/facilities" },
        { name: "Gallery", href: "/gallery" },
        { name: "Admission", href: "/admission" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${
            scrolled 
            ? "bg-white/90 backdrop-blur-md py-2 shadow-xl border-b border-slate-100" 
            : "bg-white py-4 shadow-md"
        }`}>
            <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">

                {/* LOGO AREA */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
                        <img
                            src="/images/logo.png"
                            alt="Sankalp Academy Logo"
                            className="w-14 h-14 md:w-16 md:h-16 object-contain"
                        />
                    </div>
                    <div className="flex flex-col border-l border-slate-200 pl-4">
                        <span className="text-xl md:text-2xl font-black leading-none text-[#31008e] tracking-tight">
                            SANKALP
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f2a900] mt-1">
                            Kids Care Academy
                        </span>
                        <span className="hidden md:block text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                            CBSE Affiliated School
                        </span>
                    </div>
                </Link>

                {/* DESKTOP MENU - Active Link logic added */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-8 font-bold text-[13px] uppercase tracking-wider text-slate-700">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className={`relative group transition-colors ${
                                            isActive ? "text-[#f2a900]" : "hover:text-[#31008e]"
                                        }`}
                                    >
                                        {link.name}
                                        {/* Underline for active page or hover */}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f2a900] transition-all duration-300 ${
                                            isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Button colors kept original as requested */}
                    <Link href="/enquiry" className="bg-[#ffaa00] text-indigo-950 px-8 py-3.5 rounded-full font-black uppercase text-[12px] tracking-widest flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                        <span className="text-lg">📞</span> Enquiry Now
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden text-4xl text-[#31008e] p-2 rounded-xl transition-all"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`lg:hidden fixed inset-0 w-full h-screen bg-[#31008e] z-[110] transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-end mb-12">
                        <button onClick={() => setIsOpen(false)} className="text-white text-4xl"><HiX /></button>
                    </div>

                    <div className="flex flex-col gap-6 text-2xl font-black text-white/90">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between border-b border-white/10 pb-4 transition-all ${
                                        isActive ? "text-yellow-400" : "hover:text-yellow-400"
                                    }`}
                                >
                                    {link.name} 
                                    <span className={isActive ? "opacity-100" : "opacity-0"}>•</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-auto">
                        <Link 
                            href="/enquiry" 
                            onClick={() => setIsOpen(false)}
                            className="bg-[#ffaa00] text-indigo-950 w-full text-center py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl block"
                        >
                            Enquiry Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}