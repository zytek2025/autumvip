"use client";

import React from "react";

const steps = [
    {
        num: "01",
        title: "Book",
        desc: "Fill out the reservation form or contact us directly by phone or WhatsApp."
    },
    {
        num: "02",
        title: "Confirm",
        desc: "We confirm your booking and assign a certified professional chauffeur."
    },
    {
        num: "03",
        title: "Ride",
        desc: "Your chauffeur arrives 15 minutes early. Relax in your premium vehicle."
    },
    {
        num: "04",
        title: "Arrive",
        desc: "Reach your destination in comfort, safety, and total discretion."
    }
];

export function Process() {
    return (
        <section id="how-it-works" className="relative bg-[var(--K1)] py-[100px] px-6 md:px-[60px] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,.04) 0%, transparent 55%)' }} />

            <div className="max-w-[1000px] mx-auto text-center relative z-[2]">
                <span className="text-[0.52rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.5)] mb-4 block">Simple Process</span>
                <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] mb-5 text-white">
                    How It <span className="italic text-[var(--G)]">Works</span>
                </h2>
                <div className="w-10 h-[1.5px] bg-[var(--G)] mx-auto my-5 rounded-[1px] opacity-70" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-[60px] relative">
                    {/* Connecting Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute top-6 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-[1px] opacity-20 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, var(--G), rgba(201,168,76,0.1), var(--G))'
                        }}
                    />

                    {steps.map((step) => (
                        <div key={step.num} className="flex flex-col items-center gap-4 px-4 relative z-10 py-6 sm:py-0">
                            <div className="w-12 h-12 border border-[rgba(201,168,76,0.3)] rounded-full flex items-center justify-center font-playfair text-base font-light text-[var(--G)] bg-black">
                                {step.num}
                            </div>
                            <h3 className="font-playfair text-[0.9rem] font-light text-white">{step.title}</h3>
                            <p className="text-[0.55rem] tracking-[0.08em] text-white/30 leading-[1.8] text-center">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
