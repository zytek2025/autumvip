"use client";

import Link from "next/link";

export function QuickBooking() {
    return (
        <div className="bg-[var(--K)] border border-[var(--K3)] p-6 mb-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.02)] to-transparent pointer-events-none" />

            <div className="font-[family-name:var(--font-playfair)] text-[0.85rem] font-light text-[var(--W)] mb-4 tracking-[0.05em]">
                Reservar traslado
            </div>

            <div className="flex flex-col gap-2.5 mb-4">
                <div className="flex items-center gap-3 bg-[var(--K2)] border border-[var(--K3)] p-3 cursor-pointer transition-colors hover:border-[var(--Gb)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--G)] shrink-0" />
                    <span className="text-[0.7rem] text-[var(--W1)] flex-1">Torre Mayor, CDMX</span>
                </div>

                <div className="ml-4 h-2.5 w-[1px] bg-[var(--K3)]" />

                <div className="flex items-center gap-3 bg-[var(--K2)] border border-[var(--K3)] p-3 cursor-pointer transition-colors hover:border-[var(--Gb)]">
                    <div className="w-2 h-2 rounded-full border border-[var(--G)] bg-transparent shrink-0" />
                    <span className="text-[0.65rem] tracking-[0.12em] text-[rgba(255,255,255,0.25)] uppercase flex-1">Destino</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="flex items-center gap-2 bg-[var(--K2)] border border-[var(--K3)] p-3 cursor-pointer">
                    <svg width="14" height="14" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span className="text-[0.62rem] text-[var(--W1)]">Hoy, 09:00</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--K2)] border border-[var(--K3)] p-3 cursor-pointer">
                    <svg width="14" height="14" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    <span className="text-[0.62rem] text-[var(--W1)]">1 pasajero</span>
                </div>
            </div>

            <Link href="/instant" className="w-full bg-[var(--G)] border-none p-3.5 font-[family-name:var(--font-raleway)] text-[0.6rem] tracking-[0.35em] uppercase text-[var(--K)] cursor-pointer transition-opacity hover:opacity-90 active:scale-95 text-center flex justify-center font-medium shadow-[0_4px_15px_rgba(201,168,76,0.2)]">
                Buscar traslado
            </Link>
        </div>
    );
}
