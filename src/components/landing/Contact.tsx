"use client";

import React from "react";

const channels = [
    {
        type: "Call",
        value: "+1 (854) 222·1177",
        href: "tel:+18542221177",
        icon: (
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81a19.79 19.79 0 01-3.07-8.65A2 2 0 012 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
        ),
        iconClass: "bg-[var(--K3)] border border-[rgba(201,168,76,0.2)] stroke-[var(--G)]"
    },
    {
        type: "Text",
        value: "+1 (854) 222·1177",
        href: "sms:+18542221177",
        icon: (
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        ),
        iconClass: "bg-[var(--G)] stroke-black"
    },
    {
        type: "WhatsApp",
        value: "+1 (854) 222·1177",
        href: "https://wa.me/18542221177",
        icon: (
            <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
        ),
        iconClass: "bg-white stroke-[#25D366]"
    }
];

export function Contact() {
    return (
        <section id="contact" className="relative bg-[var(--K1)] py-[100px] px-6 md:px-[60px] border-t border-[rgba(201,168,76,0.06)]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-[0.52rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.5)] mb-4 block">Get In Touch</span>
                    <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] mb-5 text-white">
                        Contact <span className="italic text-[var(--G)]">Us</span>
                    </h2>
                    <div className="w-10 h-[1.5px] bg-[var(--G)] my-5 rounded-[1px] opacity-70" />
                    <p className="text-[0.72rem] tracking-[0.08em] text-white/35 leading-[2]">
                        Our team is available around the clock to assist with reservations, questions, or special requests.
                    </p>

                    <div className="flex flex-col gap-5 mt-10">
                        {channels.map((ch) => (
                            <a
                                key={ch.type}
                                href={ch.href}
                                className="flex items-center gap-5 p-5 md:p-[20px_24px] bg-[var(--K2)] border border-[rgba(201,168,76,0.08)] transition-all hover:border-[rgba(201,168,76,0.25)] hover:translate-x-[6px] group no-underline"
                            >
                                <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${ch.iconClass}`}>
                                    <div className="w-[18px] h-[18px] fill-none stroke-inherit stroke-[1.6] stroke-linecap-round stroke-linejoin-round">
                                        {ch.icon}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[3px]">
                                    <span className="text-[0.46rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.45)]">{ch.type}</span>
                                    <span className="font-playfair text-[0.95rem] font-light text-white">{ch.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="relative h-[400px] bg-[var(--K2)] border border-[rgba(201,168,76,0.06)] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,.05) 0%, transparent 60%)' }} />

                    <div className="relative z-10 text-center">
                        <div className="mb-5 opacity-15">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto block">
                                <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="#c9a84c" strokeWidth="1.5" />
                                <text x="40" y="51" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="28" fontWeight="300" fill="#c9a84c">A</text>
                            </svg>
                        </div>
                        <div className="font-playfair text-[1.2rem] font-light text-white/60 tracking-[0.08em] mb-2">Polanco, Ciudad de México</div>
                        <div className="text-[0.52rem] tracking-[0.35em] uppercase text-[rgba(201,168,76,0.4)]">Available Nationwide · 24 / 7</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
