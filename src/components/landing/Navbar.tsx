"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 md:px-[60px] bg-black/85 backdrop-blur-[12px] border-bottom border-[rgba(201,168,76,0.08)]">
            <Link href="#hero" className="font-playfair text-[1.4rem] font-light tracking-[0.45em] text-white no-underline">
                A<span className="text-[var(--G)] italic">U</span>TUM
            </Link>

            <div className="hidden md:flex items-center gap-10">
                {["Services", "Fleet", "How It Works", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[0.55rem] tracking-[0.35em] uppercase text-white/40 hover:text-[var(--G)] transition-colors no-underline"
                    >
                        {item}
                    </Link>
                ))}
                <Link
                    href="#reserve"
                    className="bg-[var(--G)] text-black px-6 py-[10px] text-[0.55rem] tracking-[0.35em] uppercase font-medium hover:bg-[var(--G1)] transition-colors no-underline"
                >
                    Book Now
                </Link>
            </div>

            {/* Mobile Menu Button (Placeholder for now) */}
            <div className="md:hidden">
                <button className="text-[var(--G)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
}
