"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServiceList() {
    return (
        <>
            <div className="text-[0.55rem] tracking-[0.45em] uppercase text-[var(--G)] mb-3.5">
                Nuestros servicios
            </div>
            <div className="flex flex-col gap-3 mb-8">
                <ServiceCard
                    title="Executive SUV"
                    description="Mercedes GLS · BMW X7"
                    href="/fleet"
                    icon={
                        <svg viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
                            <rect x="1" y="9" width="38" height="14" rx="3" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M6 9L10 2H28L34 9" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="10" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="30" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                            <rect x="14" y="3" width="10" height="6" rx="1" stroke="rgba(201,168,76,.4)" strokeWidth=".8" />
                        </svg>
                    }
                />
                <ServiceCard
                    title="Premium Sedan"
                    description="Mercedes S-Class · Audi A8"
                    href="/fleet"
                    icon={
                        <svg viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
                            <rect x="1" y="10" width="38" height="13" rx="2" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M5 10L9 3H28L35 10" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="10" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="30" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                    }
                />
                <ServiceCard
                    title="Van Ejecutiva"
                    description="Mercedes V-Class · hasta 6p"
                    href="/fleet"
                    icon={
                        <svg viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
                            <rect x="1" y="8" width="38" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M4 8L7 2H32L36 8" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="9" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                            <circle cx="31" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                            <line x1="18" y1="2" x2="18" y2="8" stroke="rgba(201,168,76,.3)" strokeWidth=".8" />
                            <line x1="24" y1="2" x2="24" y2="8" stroke="rgba(201,168,76,.3)" strokeWidth=".8" />
                        </svg>
                    }
                />
            </div>
        </>
    );
}
