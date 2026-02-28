"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black border-t border-[rgba(201,168,76,0.06)] py-8 px-6 md:px-[60px] flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="font-playfair text-[0.85rem] font-light tracking-[0.45em] text-white/30">
                A<span className="text-[var(--G2)] italic">U</span>TUM
            </div>

            <div className="text-[0.45rem] tracking-[0.25em] uppercase text-white/15">
                © 2025 AUTUM Executive Mobility · All rights reserved
            </div>

            <div className="flex gap-7">
                {["Book Now", "Fleet", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[0.45rem] tracking-[0.3em] uppercase text-white/20 hover:text-[var(--G)] transition-colors no-underline"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
