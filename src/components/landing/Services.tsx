"use client";

import React from "react";

const services = [
    {
        icon: (
            <svg viewBox="0 0 48 32"><path d="M4 22 L4 14 L10 8 L38 8 L44 14 L44 22" /><rect x="2" y="20" width="44" height="8" rx="2" /><circle cx="12" cy="28" r="4" /><circle cx="36" cy="28" r="4" /></svg>
        ),
        name: "Executive SUV",
        desc: "Mercedes GLS · BMW X7"
    },
    {
        icon: (
            <svg viewBox="0 0 48 32"><path d="M4 22 L6 14 L14 8 L34 8 L42 14 L44 22" /><rect x="2" y="20" width="44" height="8" rx="2" /><circle cx="12" cy="28" r="4" /><circle cx="36" cy="28" r="4" /></svg>
        ),
        name: "Premium Sedan",
        desc: "Mercedes S-Class · Audi A8"
    },
    {
        icon: (
            <svg viewBox="0 0 56 32"><path d="M4 22 L4 14 L10 8 L46 8 L52 14 L52 22" /><rect x="2" y="20" width="52" height="8" rx="2" /><circle cx="14" cy="28" r="4" /><circle cx="42" cy="28" r="4" /></svg>
        ),
        name: "Executive Van",
        desc: "Mercedes V-Class · Up to 6 pax"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" strokeWidth="1.2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        ),
        name: "Airport Transfer",
        desc: "Seamless arrivals & departures"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" strokeWidth="1.2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
        ),
        name: "Corporate Events",
        desc: "Group transport & logistics"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" strokeWidth="1.2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        ),
        name: "By the Hour",
        desc: "Flexible hourly reservations"
    }
];

export function Services() {
    return (
        <section id="services" className="relative bg-[var(--K1)] py-[100px] px-6 md:px-[60px] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,.04) 0%, transparent 55%)' }} />

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-[2]">
                <div>
                    <span className="text-[0.52rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.5)] mb-4 block">What We Offer</span>
                    <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] mb-5 text-white">
                        Our <span className="italic text-[var(--G)]">Services</span>
                    </h2>
                    <div className="w-10 h-[1.5px] bg-[var(--G)] my-5 rounded-[1px] opacity-70" />
                    <p className="text-[0.72rem] tracking-[0.08em] color-white/35 leading-[2] max-w-[480px]">
                        Every journey with AUTUM is a curated experience. From airport transfers to full-day corporate mobility, we deliver excellence with every mile.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((svc, i) => (
                        <div
                            key={svc.name}
                            className="group relative bg-[var(--K2)] border border-[rgba(201,168,76,0.08)] p-7 md:p-6 overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.25)] hover:-translate-y-1 cursor-default"
                        >
                            {/* Gold border accent on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--G)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />

                            <div className="w-9 h-9 mb-4 opacity-60">
                                <div className="w-full h-full stroke-[var(--G)] fill-none stroke-[1.2] stroke-linecap-round">
                                    {svc.icon}
                                </div>
                            </div>

                            <h3 className="font-playfair text-[0.95rem] font-light text-white mb-[6px]">{svc.name}</h3>
                            <p className="text-[0.52rem] tracking-[0.12em] text-white/30 uppercase">{svc.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
