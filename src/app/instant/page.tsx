"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstantBookingPage() {
    const router = useRouter();
    const [selectedVeh, setSelectedVeh] = useState(1);
    const [extras, setExtras] = useState({ privacy: true, wifi: false, water: true, press: false });

    return (
        <div className="flex flex-col h-full bg-[var(--K1)]">
            {/* Header */}
            <div className="pt-[52px] px-7 pb-5 flex items-center gap-3.5 shrink-0 border-b border-[var(--K3)]">
                <button
                    onClick={() => router.back()}
                    className="w-9 h-9 border border-[var(--K3)] rounded-full flex items-center justify-center shrink-0 transition-colors hover:border-[var(--G)]"
                >
                    <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div>
                    <div className="font-[family-name:var(--font-playfair)] text-[1rem] font-light text-[var(--W)] tracking-[0.05em]">Nueva Reserva</div>
                    <div className="text-[0.55rem] tracking-[0.3em] text-[rgba(255,255,255,0.25)] uppercase mt-0.5">Torre Mayor · Aeropuerto</div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-7 py-6 pb-[100px] scrollbar-hide">
                {/* Map Area */}
                <div className="w-full h-[160px] bg-[var(--K)] border border-[var(--K3)] relative overflow-hidden mb-5">
                    <div className="absolute inset-0 bg-[length:30px_30px] opacity-40 mix-blend-screen"
                        style={{ backgroundImage: `linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)` }} />
                    <div className="absolute top-2.5 right-2.5 text-[0.5rem] tracking-[0.25em] text-[rgba(201,168,76,0.4)] uppercase">Vista de ruta</div>

                    {/* Animated Route SVG */}
                    <div className="absolute bottom-6 left-9 right-14">
                        <div className="absolute bottom-1.5 left-1.5 w-[180px] h-[60px] border border-[rgba(201,168,76,0.25)] border-l-0 border-b-0 rounded-tr-[40px] border-dashed" />
                        <div className="absolute bottom-0 left-0 flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[var(--G)] shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
                            <span className="text-[0.55rem] tracking-[0.15em] text-[rgba(201,168,76,0.7)] uppercase">Torre Mayor</span>
                        </div>
                        <div className="absolute top-[-60px] right-0 flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full border-2 border-[var(--G)]" />
                            <span className="text-[0.55rem] tracking-[0.15em] text-[rgba(201,168,76,0.7)] uppercase">Aeropuerto</span>
                        </div>
                        {/* Animated Car */}
                        <div className="absolute bottom-2.5 left-[80px] animate-[carMove_3s_ease-in-out_infinite_alternate]">
                            <svg width="24" height="24" viewBox="0 0 40 26" fill="none">
                                <rect x="1" y="9" width="38" height="14" rx="3" fill="rgba(201,168,76,.2)" stroke="#c9a84c" strokeWidth="1.2" />
                                <path d="M6 9L10 2H28L34 9" fill="rgba(201,168,76,.1)" stroke="#c9a84c" strokeWidth="1.2" />
                                <circle cx="10" cy="22" r="3" fill="#c9a84c" />
                                <circle cx="30" cy="22" r="3" fill="#c9a84c" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Vehicle Selection */}
                <div className="mb-6">
                    <div className="text-[0.55rem] tracking-[0.4em] uppercase text-[var(--G)] mb-3">Seleccionar vehículo</div>
                    <div className="flex flex-col gap-2">
                        {[
                            { id: 1, name: "Mercedes GLS 580", spec: "7 plazas · Full equip.", price: "$1,240", eta: "4 min" },
                            { id: 2, name: "BMW X7", spec: "6 plazas · Confort", price: "$980", eta: "8 min" },
                            { id: 3, name: "Range Rover LWB", spec: "5 plazas · Prestige", price: "$1,480", eta: "12 min" },
                        ].map((v) => (
                            <div
                                key={v.id}
                                onClick={() => setSelectedVeh(v.id)}
                                className={`flex items-center gap-3.5 p-4 border cursor-pointer transition-all duration-300 ${selectedVeh === v.id ? "bg-[rgba(201,168,76,0.05)] border-[var(--G)]" : "bg-[var(--K2)] border-[var(--K3)]"
                                    }`}
                            >
                                <div className="flex-1">
                                    <div className={`font-[family-name:var(--font-playfair)] text-[0.85rem] mb-0.5 ${selectedVeh === v.id ? "text-white" : "text-[rgba(255,255,255,0.6)]"}`}>{v.name}</div>
                                    <div className="text-[0.55rem] tracking-[0.15em] text-[rgba(255,255,255,0.25)] uppercase">{v.spec}</div>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className={`font-[family-name:var(--font-playfair)] text-[1.1rem] ${selectedVeh === v.id ? "text-[var(--G)]" : "text-[rgba(201,168,76,0.5)]"}`}>{v.price}</div>
                                    <div className="text-[0.5rem] tracking-[0.15em] text-[rgba(255,255,255,0.25)] uppercase">ETA {v.eta}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extras */}
                <div className="mb-6">
                    <div className="text-[0.55rem] tracking-[0.4em] uppercase text-[var(--G)] mb-3">Preferencias</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div onClick={() => setExtras({ ...extras, privacy: !extras.privacy })} className={`p-3 border flex items-center gap-2 cursor-pointer transition-all ${extras.privacy ? "bg-[rgba(201,168,76,0.06)] border-[var(--G)]" : "bg-[var(--K2)] border-[var(--K3)]"}`}>
                            <span className={`text-[0.6rem] tracking-[0.12em] uppercase flex-1 ${extras.privacy ? "text-[var(--W1)]" : "text-[rgba(255,255,255,0.4)]"}`}>Privacidad</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${extras.privacy ? "bg-[var(--G)] border-[var(--G)]" : "border-[var(--K3)]"}`}>
                                {extras.privacy && <svg width="8" height="8" viewBox="0 0 10 10"><polyline points="2,5 4,7 8,3" stroke="#000" strokeWidth="1.5" fill="none" /></svg>}
                            </div>
                        </div>
                        <div onClick={() => setExtras({ ...extras, wifi: !extras.wifi })} className={`p-3 border flex items-center gap-2 cursor-pointer transition-all ${extras.wifi ? "bg-[rgba(201,168,76,0.06)] border-[var(--G)]" : "bg-[var(--K2)] border-[var(--K3)]"}`}>
                            <span className={`text-[0.6rem] tracking-[0.12em] uppercase flex-1 ${extras.wifi ? "text-[var(--W1)]" : "text-[rgba(255,255,255,0.4)]"}`}>WiFi</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${extras.wifi ? "bg-[var(--G)] border-[var(--G)]" : "border-[var(--K3)]"}`}>
                                {extras.wifi && <svg width="8" height="8" viewBox="0 0 10 10"><polyline points="2,5 4,7 8,3" stroke="#000" strokeWidth="1.5" fill="none" /></svg>}
                            </div>
                        </div>
                        <div onClick={() => setExtras({ ...extras, water: !extras.water })} className={`p-3 border flex items-center gap-2 cursor-pointer transition-all ${extras.water ? "bg-[rgba(201,168,76,0.06)] border-[var(--G)]" : "bg-[var(--K2)] border-[var(--K3)]"}`}>
                            <span className={`text-[0.6rem] tracking-[0.12em] uppercase flex-1 ${extras.water ? "text-[var(--W1)]" : "text-[rgba(255,255,255,0.4)]"}`}>Agua mineral</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${extras.water ? "bg-[var(--G)] border-[var(--G)]" : "border-[var(--K3)]"}`}>
                                {extras.water && <svg width="8" height="8" viewBox="0 0 10 10"><polyline points="2,5 4,7 8,3" stroke="#000" strokeWidth="1.5" fill="none" /></svg>}
                            </div>
                        </div>
                        <div onClick={() => setExtras({ ...extras, press: !extras.press })} className={`p-3 border flex items-center gap-2 cursor-pointer transition-all ${extras.press ? "bg-[rgba(201,168,76,0.06)] border-[var(--G)]" : "bg-[var(--K2)] border-[var(--K3)]"}`}>
                            <span className={`text-[0.6rem] tracking-[0.12em] uppercase flex-1 ${extras.press ? "text-[var(--W1)]" : "text-[rgba(255,255,255,0.4)]"}`}>Prensa</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${extras.press ? "bg-[var(--G)] border-[var(--G)]" : "border-[var(--K3)]"}`}>
                                {extras.press && <svg width="8" height="8" viewBox="0 0 10 10"><polyline points="2,5 4,7 8,3" stroke="#000" strokeWidth="1.5" fill="none" /></svg>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="mb-4">
                    <div className="text-[0.55rem] tracking-[0.4em] uppercase text-[var(--G)] mb-3">Resumen</div>
                    <div className="bg-[var(--K)] border border-[var(--K3)] p-5">
                        <div className="flex justify-between items-center py-2 border-b border-[var(--K3)]">
                            <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(255,255,255,0.35)] uppercase">Vehículo</span>
                            <span className="font-[family-name:var(--font-playfair)] text-[0.85rem] text-[var(--W)]">Mercedes GLS 580</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[var(--K3)]">
                            <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(255,255,255,0.35)] uppercase">Distancia</span>
                            <span className="font-[family-name:var(--font-playfair)] text-[0.85rem] text-[var(--W)]">42 km</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[var(--K3)]">
                            <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(255,255,255,0.35)] uppercase">Tiempo</span>
                            <span className="font-[family-name:var(--font-playfair)] text-[0.85rem] text-[var(--W)]">52 min</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 mt-1">
                            <span className="text-[0.6rem] tracking-[0.2em] text-[var(--G)] uppercase">Total estimado</span>
                            <span className="font-[family-name:var(--font-playfair)] text-[1.1rem] text-[var(--G)]">$1,240</span>
                        </div>
                    </div>
                </div>

                <Link href="/tracking" className="w-full bg-[var(--G)] border-none p-4 text-center text-[0.6rem] tracking-[0.35em] uppercase text-[var(--K)] transition-opacity hover:opacity-90 active:scale-[0.99] block font-medium">
                    Confirmar Reserva
                </Link>
            </div>

            <style jsx>{`
        @keyframes carMove {
          from { left: 70px; }
          to { left: 130px; }
        }
      `}</style>
        </div>
    );
}
