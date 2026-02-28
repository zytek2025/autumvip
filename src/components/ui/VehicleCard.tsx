"use client";

import Image from "next/image";
import { useState } from "react";
import { IconPremium, IconPerson, IconClock } from "@/components/icons/BrandIcons";

interface VehicleProps {
    id: string | number;
    name: string;
    category: string;
    price: string;
    stats: string[]; // [passengers, bags, engine, availability]
    photo: string;
    isNew?: boolean;
}

export function VehicleCard({ id, name, category, price, stats, photo, isNew }: VehicleProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="mb-6 bg-[var(--K2)] border border-[var(--K3)] rounded-[16px] overflow-hidden relative transition-all duration-300 active:scale-[0.98] active:border-[rgba(201,168,76,0.2)]">
            {/* Badge */}
            {isNew && (
                <div className="absolute top-4 left-4 bg-[rgba(0,0,0,0.6)] backdrop-blur-[8px] px-3 py-1.5 rounded-[8px] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--G)] border border-[rgba(201,168,76,0.15)] z-10">
                    Nuevo en flota
                </div>
            )}

            {/* Photo Area */}
            <div className="w-full h-[220px] relative bg-[var(--K)] border-b border-[var(--K3)] overflow-hidden">
                {/* Skeleton */}
                {!imgLoaded && !imgError && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--K2)] via-[var(--K3)] to-[var(--K2)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite_linear]" />
                )}

                {/* Error State */}
                {imgError && (
                    <div className="absolute inset-0 bg-[var(--K3)] flex flex-col items-center justify-center text-[rgba(255,255,255,0.4)] gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span className="text-[0.6rem] uppercase tracking-[0.1em]">No disponible</span>
                    </div>
                )}

                <Image
                    src={photo}
                    alt={name}
                    fill
                    className={`object-cover object-center transition-opacity duration-300 ease-in ${imgLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                />

                <div className="absolute bottom-3 left-4 text-[0.6rem] tracking-[0.2em] font-medium text-[rgba(255,255,255,0.4)] uppercase">
                    {name}
                </div>
            </div>

            {/* Info Content */}
            <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <div className="text-[0.58rem] tracking-[0.15em] uppercase text-[var(--G)] mb-1">{category}</div>
                        <div className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-medium leading-[1.1] text-[var(--W)]">{name}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[0.55rem] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.3)] mb-1">Día desde</div>
                        <div className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-medium text-[var(--W)] leading-[1]">{price}</div>
                    </div>
                </div>

                {/* Specs Strip */}
                <div className="flex gap-4 border-y border-[var(--K3)] py-3">
                    <div className="flex items-center gap-2">
                        <IconPerson size={14} className="text-[rgba(255,255,255,0.3)]" />
                        <span className="text-[0.7rem] font-medium text-[rgba(255,255,255,0.7)]">{stats[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.3)]">
                            <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        <span className="text-[0.7rem] font-medium text-[rgba(255,255,255,0.7)]">{stats[1]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.3)]">
                            <circle cx="12" cy="12" r="10" /><path d="M12 2v20" /><path d="M2 12h20" />
                        </svg>
                        <span className="text-[0.7rem] font-medium text-[rgba(255,255,255,0.7)]">{stats[2]}</span>
                    </div>
                    <div className="flex justify-end flex-1 items-center gap-2">
                        <IconClock size={12} className="text-[var(--G)]" />
                        <span className="text-[0.65rem] font-medium text-[var(--G)] tracking-[0.05em] uppercase">{stats[3]}</span>
                    </div>
                </div>

                {/* Categories/Amenities Summary */}
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-[rgba(255,255,255,0.03)] border border-[var(--K3)] px-2.5 py-1 rounded-[4px] text-[0.6rem] font-medium text-[rgba(255,255,255,0.5)]">Blindaje Opcional</span>
                    <span className="bg-[rgba(255,255,255,0.03)] border border-[var(--K3)] px-2.5 py-1 rounded-[4px] text-[0.6rem] font-medium text-[var(--G)]">WiFi Integrado</span>
                    <span className="bg-[rgba(255,255,255,0.03)] border border-[var(--K3)] px-2.5 py-1 rounded-[4px] text-[0.6rem] font-medium text-[rgba(255,255,255,0.5)]">Asientos Masaje</span>
                </div>

                {/* CTA */}
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">
                        Ver Detalles
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[var(--G)] transition-colors duration-300 hover:bg-[var(--G)] hover:text-black">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
