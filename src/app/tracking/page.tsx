"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TrackingPage() {
    const router = useRouter();

    // You can set an interval to drop ETA down, but we'll stick to static emulation for now.

    return (
        <div className="flex flex-col h-full bg-[var(--K)] relative">
            <div className="absolute top-12 left-6 z-50">
                <button
                    onClick={() => router.back()}
                    className="w-10 h-10 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md flex items-center justify-center text-[var(--G)] transition-colors hover:bg-[var(--G)] hover:text-black hover:border-transparent cursor-pointer"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-[length:40px_40px] opacity-40 mix-blend-screen"
                    style={{ backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)` }} />

                {/* Animated Car */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[trackDrift_4s_ease-in-out_infinite]">
                    <svg width="40" height="40" viewBox="0 0 40 26" fill="none">
                        <rect x="1" y="9" width="38" height="14" rx="3" fill="rgba(201,168,76,.15)" stroke="#c9a84c" strokeWidth="1.2" />
                        <path d="M6 9L10 2H28L34 9" fill="transparent" stroke="#c9a84c" strokeWidth="1.2" />
                        <circle cx="10" cy="22" r="3" fill="#c9a84c" />
                        <circle cx="30" cy="22" r="3" fill="#c9a84c" />
                    </svg>
                </div>

                {/* Pulsing Pin */}
                <div className="absolute bottom-[30%] right-[25%] flex flex-col items-center gap-1 animate-[pinPulse_2s_ease-in-out_infinite]">
                    <div className="w-11 h-11 border border-[rgba(201,168,76,0.4)] rounded-full flex items-center justify-center relative">
                        <div className="w-5 h-5 bg-[var(--G)] rounded-full shadow-[0_0_16px_rgba(201,168,76,0.6)]" />
                    </div>
                    <div className="text-[0.5rem] tracking-[0.2em] text-[rgba(201,168,76,0.6)] uppercase">Recogida</div>
                </div>
            </div>

            {/* Bottom Panel */}
            <div className="bg-[var(--K1)] border-t border-[var(--K3)] p-6 pb-[90px] w-full shrink-0 relative z-20">

                {/* Driver */}
                <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-[var(--K3)] border border-[var(--G)] flex items-center justify-center font-[family-name:var(--font-playfair)] text-[1rem] text-[var(--G)] shrink-0">
                        ER
                    </div>
                    <div>
                        <div className="font-[family-name:var(--font-playfair)] text-[1rem] text-[var(--W)] mb-1">
                            Eduardo Ríos
                        </div>
                        <div className="flex items-center gap-1 text-[0.55rem] tracking-[0.2em] text-[rgba(201,168,76,0.6)]">
                            <span>★ 4.9</span>
                        </div>
                        <div className="text-[0.58rem] tracking-[0.15em] text-[rgba(255,255,255,0.25)] uppercase mt-0.5">
                            Mercedes GLS 580
                        </div>
                    </div>
                    <div className="ml-auto flex gap-2">
                        <button className="w-10 h-10 border border-[var(--K3)] rounded-full hover:border-[var(--G)] flex items-center justify-center transition-colors text-[var(--W)]">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </button>
                        <button className="w-10 h-10 border border-[var(--K3)] rounded-full hover:border-[var(--G)] flex items-center justify-center transition-colors text-[var(--W)]">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </button>
                    </div>
                </div>

                {/* ETA */}
                <div className="bg-[var(--K)] border border-[var(--K3)] p-4 flex items-center justify-between mb-4">
                    <span className="text-[0.55rem] tracking-[0.3em] text-[rgba(255,255,255,0.3)] uppercase">
                        Llegada est.
                    </span>
                    <div className="font-[family-name:var(--font-playfair)] text-[1.8rem] font-light text-[var(--G)]">
                        4 <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(255,255,255,0.25)] uppercase font-sans">min</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-[2px] bg-[var(--K3)] mb-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-[var(--G2)] via-[var(--G)] to-[var(--G1)] animate-[progressMove_3s_ease-in-out_infinite]" />
                </div>

                <div className="text-[0.62rem] tracking-[0.15em] text-[rgba(255,255,255,0.3)] uppercase text-center">
                    El conductor está en camino
                </div>
            </div>

            <style jsx>{`
        @keyframes trackDrift {
          0% { transform: translate(-50%, -50%) rotate(-5deg); }
          50% { transform: translate(-40%, -55%) rotate(3deg); }
          100% { transform: translate(-50%, -50%) rotate(-5deg); }
        }
        @keyframes pinPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes progressMove {
          0% { width: 30%; left: 0%; }
          50% { width: 45%; left: 20%; }
          100% { width: 30%; left: 0%; }
        }
      `}</style>
        </div>
    );
}
