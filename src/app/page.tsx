"use client";

import React from "react";

export default function Home() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden font-raleway select-none">
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(201,168,76,.06) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 30%, rgba(201,168,76,.04) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 90%, rgba(201,168,76,.03) 0%, transparent 40%)
            `
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,.05) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── GEOMETRIC PATTERN ── */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] animate-[spin_60s_linear_infinite] pointer-events-none">
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="450,30 870,240 870,660 450,870 30,660 30,240" stroke="#c9a84c" strokeWidth="1" />
          <polygon points="450,80 820,270 820,630 450,820 80,630 80,270" stroke="#c9a84c" strokeWidth=".7" />
          <polygon points="450,130 770,300 770,600 450,770 130,600 130,300" stroke="#c9a84c" strokeWidth=".5" />
          <polygon points="450,180 720,330 720,570 450,720 180,570 180,330" stroke="#c9a84c" strokeWidth=".4" />
          <polygon points="450,230 670,360 670,540 450,670 230,540 230,360" stroke="#c9a84c" strokeWidth=".3" />
          <polygon points="450,280 620,390 620,510 450,620 280,510 280,390" stroke="#c9a84c" strokeWidth=".2" />
          <line x1="450" y1="30" x2="450" y2="870" stroke="#c9a84c" strokeWidth=".3" />
          <line x1="30" y1="450" x2="870" y2="450" stroke="#c9a84c" strokeWidth=".3" />
          <line x1="30" y1="240" x2="870" y2="660" stroke="#c9a84c" strokeWidth=".2" />
          <line x1="870" y1="240" x2="30" y2="660" stroke="#c9a84c" strokeWidth=".2" />
        </svg>
      </div>

      {/* ── TOP LINE ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 origin-center animate-[scaleX_1.5s_ease_forwards]"
        style={{
          background: 'linear-gradient(to right, transparent 0%, var(--G) 20%, var(--G1) 50%, var(--G) 80%, transparent 100%)',
          transform: 'scaleX(0)'
        }}
      />

      {/* ── BOTTOM LINE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-10"
        style={{
          background: 'linear-gradient(to right, transparent 10%, rgba(201,168,76,.25) 40%, rgba(201,168,76,.25) 60%, transparent 90%)'
        }}
      />

      {/* ── CORNER MONOGRAM ── */}
      <div className="absolute top-6 right-7 opacity-[0.08] animate-[riseIn_1.5s_ease_0.5s_forwards] translate-y-[30px] opacity-0">
        <svg width="60" height="60" viewBox="0 0 80 80">
          <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="#c9a84c" strokeWidth="1" fill="none" />
          <text x="40" y="51" textAnchor="middle" fontFamily="var(--font-playfair)" fontSize="28" fontWeight="300" fill="#c9a84c">A</text>
        </svg>
      </div>

      {/* ── CORNER WEB ── */}
      <div className="absolute bottom-5 right-7 text-[0.48rem] tracking-[0.4em] uppercase text-[rgba(201,168,76,0.2)]">
        autumvip.com
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-[5] w-full h-screen flex flex-col items-center justify-center p-5">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 animate-[riseIn_1.2s_ease_0.3s_forwards] translate-y-[30px] opacity-0">
          <div className="flex items-baseline">
            <span className="font-playfair text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">A</span>
            <span className="font-playfair text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-[var(--G)] italic leading-none relative">
              U
              <span className="absolute bottom-[3px] left-0 right-[0.55em] h-[2px] bg-gradient-to-r from-[var(--G)] to-[var(--G1)] rounded-[1px] animate-pulse" />
            </span>
            <span className="font-playfair text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">T</span>
            <span className="font-playfair text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">U</span>
            <span className="font-playfair text-[clamp(3.5rem,10vw,7rem)] font-light tracking-[clamp(0.3em,2vw,0.55em)] text-white leading-none">M</span>
          </div>
          <div className="text-[clamp(0.5rem,1.2vw,0.65rem)] tracking-[clamp(0.3em,2vw,0.55em)] uppercase text-[rgba(201,168,76,0.45)] font-light">
            Executive Mobility
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-[var(--G)] to-transparent opacity-50 my-11 animate-[riseIn_1s_ease_0.8s_forwards] translate-y-[30px] opacity-0" />

        {/* Message */}
        <div className="flex flex-col items-center gap-5 max-w-[600px] text-center animate-[riseIn_1.2s_ease_1s_forwards] translate-y-[30px] opacity-0">
          <div className="font-playfair text-[clamp(1.2rem,3vw,2rem)] font-light text-white tracking-[0.06em] leading-[1.3]">
            Our website is currently<br /><span className="italic text-[var(--G)]">under construction</span>
          </div>
          <div className="w-12 h-[1.5px] bg-[var(--G)] rounded-[1px] opacity-60" />
          <div className="text-[clamp(0.6rem,1.4vw,0.75rem)] tracking-[0.2em] uppercase text-white/30 leading-[2]">
            We apologize for any inconvenience.<br />
            We are working hard to bring you an exceptional experience.
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-4 mt-2 animate-[riseIn_1.2s_ease_1.4s_forwards] translate-y-[30px] opacity-0">
          <div className="text-[0.5rem] tracking-[0.5em] uppercase text-[rgba(201,168,76,0.4)]">
            In the meantime, reach us at
          </div>
          <div className="font-playfair text-[clamp(0.9rem,2vw,1.2rem)] font-light text-white/50 tracking-[0.1em]">
            +1 (854) 222 · 1177
          </div>

          <div className="flex gap-6 items-center">
            {/* Call */}
            <a href="tel:+18542221177" className="group flex flex-col items-center gap-[10px] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#111] border border-[rgba(201,168,76,0.2)] group-hover:shadow-[0_8px_28px_rgba(201,168,76,0.2)] transition-shadow">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[var(--G)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81a19.79 19.79 0 01-3.07-8.65A2 2 0 012 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <span className="text-[0.46rem] tracking-[0.3em] uppercase text-white/30">Call</span>
            </a>

            {/* SMS */}
            <a href="sms:+18542221177" className="group flex flex-col items-center gap-[10px] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--G)] group-hover:shadow-[0_8px_28px_rgba(201,168,76,0.2)] transition-shadow">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-black fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <span className="text-[0.46rem] tracking-[0.3em] uppercase text-white/30">Text</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/18542221177" className="group flex flex-col items-center gap-[10px] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white group-hover:shadow-[0_8px_28px_rgba(201,168,76,0.2)] transition-shadow">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#25D366] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <span className="text-[0.46rem] tracking-[0.3em] uppercase text-white/30">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
