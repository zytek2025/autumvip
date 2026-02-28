"use client";

import React from "react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-10 py-[120px] md:pb-[80px]">
            {/* Background Orbs */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse at 30% 60%, rgba(201,168,76,.07) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(201,168,76,.05) 0%, transparent 45%)
          `
                }}
            />

            {/* Hero Geometric Pattern */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-[0.03] animate-[spin_80s_linear_infinite] pointer-events-none">
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
                    <polygon points="400,20 780,210 780,590 400,780 20,590 20,210" stroke="#c9a84c" strokeWidth="1" />
                    <polygon points="400,70 730,240 730,560 400,730 70,560 70,240" stroke="#c9a84c" strokeWidth=".7" />
                    <polygon points="400,120 680,270 680,530 400,680 120,530 120,270" stroke="#c9a84c" strokeWidth=".5" />
                    <polygon points="400,170 630,300 630,500 400,630 170,500 170,300" stroke="#c9a84c" strokeWidth=".3" />
                    <line x1="400" y1="20" x2="400" y2="780" stroke="#c9a84c" strokeWidth=".3" />
                    <line x1="20" y1="400" x2="780" y2="400" stroke="#c9a84c" strokeWidth=".3" />
                </svg>
            </div>

            {/* Top Gradient Line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background: 'linear-gradient(to right, transparent 5%, var(--G) 30%, var(--G1) 50%, var(--G) 70%, transparent 95%)'
                }}
            />

            {/* Hero Content */}
            <div className="relative z-[2] flex flex-col items-center gap-7 text-center animate-[riseIn_1.2s_ease_forwards]">
                <span className="text-[0.55rem] tracking-[0.55em] uppercase text-[rgba(201,168,76,0.5)]">
                    Executive Mobility · Premium Chauffeur Service
                </span>

                <div className="flex items-baseline">
                    <span className="font-playfair text-[clamp(4rem,10vw,8rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">A</span>
                    <span className="font-playfair text-[clamp(4rem,10vw,8rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-[var(--G)] italic leading-none relative">
                        U
                        <span className="absolute bottom-[4px] left-0 right-[0.55em] h-[2px] bg-gradient-to-r from-[var(--G)] to-[var(--G1)] rounded-[1px] animate-[gleam_3s_ease-in-out_infinite]" />
                    </span>
                    <span className="font-playfair text-[clamp(4rem,10vw,8rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">T</span>
                    <span className="font-playfair text-[clamp(4rem,10vw,8rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">U</span>
                    <span className="font-playfair text-[clamp(4rem,10vw,8rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">M</span>
                </div>

                <div className="font-playfair text-[clamp(1rem,2.5vw,1.6rem)] font-light italic text-white/50 tracking-[0.06em]">
                    Because yo<span className="text-[var(--G)]">U</span> are First
                </div>

                <div className="text-[0.58rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.4)]">
                    Executive Mobility · Available 24 / 7
                </div>

                <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--G)] to-transparent opacity-50" />

                <div className="flex gap-4 items-center">
                    <Link
                        href="#reserve"
                        className="bg-[var(--G)] text-black font-semibold text-[0.58rem] tracking-[0.3em] uppercase px-11 py-[18px] hover:bg-[var(--G1)] transition-all hover:-translate-y-[2px]"
                    >
                        Book Your Ride
                    </Link>
                    <Link
                        href="#fleet"
                        className="text-white/40 text-[0.55rem] tracking-[0.3em] uppercase border-b border-[rgba(201,168,76,0.2)] pb-[2px] hover:text-[var(--G)] hover:border-[var(--G)] transition-colors"
                    >
                        Explore Fleet
                    </Link>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-[bounce_2s_ease_infinite]">
                <span className="text-[0.42rem] tracking-[0.4em] uppercase text-[var(--G)]">Scroll</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className="stroke-[var(--G)] fill-none stroke-[1.5] stroke-linecap-round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            <style jsx global>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gleam {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; box-shadow: 0 0 10px rgba(201,168,76,0.5); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
        </section>
    );
}
