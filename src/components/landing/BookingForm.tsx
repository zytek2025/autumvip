"use client";

import React, { useState } from "react";

export function BookingForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id="reserve" className="relative bg-black py-[100px] px-6 md:px-[60px] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,.06) 0%, transparent 55%)' }} />

            <div className="max-w-[900px] mx-auto relative z-[2]">
                <div className="text-center mb-[60px]">
                    <span className="text-[0.52rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.5)] mb-4 block">Reservations</span>
                    <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15] mb-5 text-white">
                        Book Your <span className="italic text-[var(--G)]">Ride</span>
                    </h2>
                    <div className="w-10 h-[1.5px] bg-[var(--G)] mx-auto my-5 rounded-[1px] opacity-70" />
                    <p className="text-[0.72rem] tracking-[0.08em] text-white/35 leading-[2] max-w-[480px] mx-auto">
                        Complete the form below and we will confirm your reservation within minutes.
                    </p>
                </div>

                <div className="bg-[var(--K1)] border border-[rgba(201,168,76,0.1)] p-6 md:p-[52px] relative overflow-hidden">
                    {/* Top Line Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--G)] to-transparent opacity-50" />

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Full Name</label>
                                    <input type="text" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" placeholder="John Smith" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Phone / WhatsApp</label>
                                    <input type="tel" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" placeholder="+1 (000) 000 0000" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Email Address</label>
                                    <input type="email" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" placeholder="john@example.com" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Service Type</label>
                                    <select className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full appearance-none" required>
                                        <option value="" disabled selected>Select a service</option>
                                        <option>Executive SUV — Mercedes GLS / BMW X7</option>
                                        <option>Premium Sedan — Mercedes S-Class</option>
                                        <option>Executive Van — Mercedes V-Class</option>
                                        <option>Airport Transfer</option>
                                        <option>Corporate Event</option>
                                        <option>By the Hour</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Pickup Date</label>
                                    <input type="date" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Pickup Time</label>
                                    <input type="time" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Pickup Location</label>
                                    <input type="text" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" placeholder="Address, airport, hotel..." required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Drop-off Location</label>
                                    <input type="text" className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full" placeholder="Destination address..." />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-8">
                                <label className="text-[0.48rem] tracking-[0.38em] uppercase text-[rgba(201,168,76,0.5)]">Special Requests</label>
                                <textarea className="bg-[var(--K2)] border border-[rgba(201,168,76,0.1)] text-white font-raleway text-[0.7rem] tracking-[0.05em] p-[14px_18px] focus:border-[rgba(201,168,76,0.4)] outline-none transition-colors w-full min-h-[100px] resize-y" placeholder="Child seat, specific fragrance, route preferences, etc."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[var(--G)] text-black font-semibold text-[0.6rem] tracking-[0.35em] uppercase p-5 hover:bg-[var(--G1)] transition-all hover:-translate-y-[2px]">
                                Request Reservation
                            </button>
                            <p className="text-center text-[0.5rem] tracking-[0.2em] uppercase text-white/20 mt-4">
                                We will confirm within 15 minutes · Available 24 / 7 · +1 (854) 222 · 1177
                            </p>
                        </form>
                    ) : (
                        <div className="text-center p-10 animate-fadeIn">
                            <div className="mb-6">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4 block">
                                    <circle cx="24" cy="24" r="23" stroke="#c9a84c" strokeWidth="1.5" />
                                    <polyline points="14,24 21,31 34,18" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                                <p className="font-playfair text-[1.4rem] font-light text-white mb-2">Request Received</p>
                                <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[rgba(201,168,76,0.5)]">We will contact you shortly</p>
                            </div>
                            <p className="text-[0.65rem] text-white/30 leading-[2]">
                                Thank you for choosing AUTUM. A member of our team will confirm your reservation within 15 minutes at the contact details provided.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
        </section>
    );
}
