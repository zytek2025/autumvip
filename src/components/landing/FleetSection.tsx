"use client";

import React from "react";

const fleet = [
    {
        type: "Executive SUV",
        name: "Mercedes-Benz GLS 580",
        spec: "4MATIC · Up to 6 passengers",
        svg: (
            <svg viewBox="0 0 200 80" fill="none" stroke="#c9a84c" strokeWidth="1">
                <path d="M20 55 L25 35 L50 20 L150 20 L175 35 L180 55 Z" />
                <rect x="10" y="52" width="180" height="14" rx="4" />
                <circle cx="45" cy="66" r="10" /><circle cx="155" cy="66" r="10" />
                <path d="M50 35 L60 22 M150 35 L140 22" />
                <rect x="65" y="22" width="70" height="14" />
            </svg>
        )
    },
    {
        type: "Premium Sedan",
        name: "Mercedes-Benz S 580 L",
        spec: "Long Wheelbase · Up to 3 passengers",
        svg: (
            <svg viewBox="0 0 200 80" fill="none" stroke="#c9a84c" strokeWidth="1">
                <path d="M20 55 L28 38 L55 22 L145 22 L172 38 L180 55 Z" />
                <rect x="10" y="52" width="180" height="14" rx="4" />
                <circle cx="45" cy="66" r="10" /><circle cx="155" cy="66" r="10" />
                <rect x="60" y="24" width="80" height="15" />
            </svg>
        )
    },
    {
        type: "Executive Van",
        name: "Mercedes-Benz V 300 d",
        spec: "Extra Long · Up to 7 passengers",
        svg: (
            <svg viewBox="0 0 220 80" fill="none" stroke="#c9a84c" strokeWidth="1">
                <path d="M15 55 L18 32 L35 18 L185 18 L200 32 L205 55 Z" />
                <rect x="8" y="52" width="200" height="14" rx="4" />
                <circle cx="45" cy="66" r="10" /><circle cx="175" cy="66" r="10" />
                <rect x="38" y="20" width="140" height="14" />
            </svg>
        )
    }
];

export function FleetSection() {
    return (
        <section id="fleet" className="relative bg-black py-[100px] px-6 md:px-[60px] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,.04) 0%, transparent 55%)' }} />

            <div className="max-w-[1200px] mx-auto relative z-[2]">
                <div className="mb-[60px]">
                    <span className="text-[0.52rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.5)] mb-4 block">Our Vehicles</span>
                    <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] mb-5 text-white">
                        The <span className="italic text-[var(--G)]">Fleet</span>
                    </h2>
                    <div className="w-10 h-[1.5px] bg-[var(--G)] my-5 rounded-[1px] opacity-70" />
                    <p className="text-[0.72rem] tracking-[0.08em] text-white/35 leading-[2] max-w-[480px]">
                        A curated selection of the world's finest vehicles, maintained to the highest standards for your comfort and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {fleet.map((car) => (
                        <div
                            key={car.name}
                            className="bg-[var(--K2)] border border-[rgba(201,168,76,0.08)] overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.2)] hover:-translate-y-[6px]"
                        >
                            <div className="w-full h-[180px] bg-[var(--K3)] flex items-center justify-center relative overflow-hidden">
                                <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                                <div className="w-[80%] opacity-12 z-0">
                                    {car.svg}
                                </div>
                            </div>
                            <div className="p-6 border-t border-[rgba(201,168,76,0.06)]">
                                <span className="text-[0.45rem] tracking-[0.4em] uppercase text-[var(--G2)] mb-2 block">{car.type}</span>
                                <h3 className="font-playfair text-[1.05rem] font-light text-white mb-1">{car.name}</h3>
                                <p className="text-[0.52rem] tracking-[0.12em] text-white/30 uppercase">{car.spec}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
