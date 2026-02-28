"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fleet, Vehicle } from "@/data/fleet";
import { IconPerson, IconClock } from "@/components/icons/BrandIcons";

export default function VehicleDetailPageClient() {
    const params = useParams();
    const router = useRouter();

    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [activePhoto, setActivePhoto] = useState(0);
    const [activeTab, setActiveTab] = useState<"amenities" | "interior" | "specs">("amenities");

    useEffect(() => {
        if (params.id) {
            const found = fleet.find((v) => v.id === params.id);
            if (found) setVehicle(found);
        }
    }, [params.id]);

    if (!vehicle) {
        return (
            <div className="flex-1 bg-[var(--K)] flex items-center justify-center">
                <div className="text-[var(--W)] opacity-50">Cargando...</div>
            </div>
        );
    }

    const currentPhoto = vehicle.photos[activePhoto];

    return (
        <div className="flex flex-col h-full bg-[var(--K1)] relative">
            <div className="flex-1 overflow-y-auto scrollbar-hide pb-[100px]">
                {/* Hero Photo Section */}
                <div className="h-[340px] w-full relative bg-[var(--K)] border-b border-[var(--K3)]">
                    <Image
                        src={currentPhoto.src}
                        alt={vehicle.name}
                        fill
                        className="object-cover object-center transition-opacity duration-300"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--K1)] via-transparent to-transparent pointer-events-none" />

                    {currentPhoto.credit && (
                        <div className="absolute bottom-4 left-6 text-[0.45rem] tracking-[0.2em] text-[rgba(255,255,255,0.3)] uppercase z-10 drop-shadow-md">
                            {currentPhoto.credit}
                        </div>
                    )}

                    {/* Back Button Overlay */}
                    <button
                        onClick={() => router.back()}
                        className="absolute top-[52px] left-6 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.4)] backdrop-blur-md flex items-center justify-center text-white z-50 transition-colors hover:bg-[var(--G)] hover:text-black hover:border-transparent"
                    >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                </div>

                {/* Thumbnail Strip */}
                {vehicle.photos.length > 1 && (
                    <div className="flex overflow-x-auto gap-2.5 px-6 py-4 scrollbar-hide snap-x border-b border-[var(--K3)]">
                        {vehicle.photos.map((p, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActivePhoto(idx)}
                                className={`relative w-[80px] h-[56px] shrink-0 rounded-[8px] overflow-hidden snap-start transition-all duration-300 border-2 ${activePhoto === idx ? "border-[var(--G)] scale-105" : "border-transparent opacity-50 hover:opacity-100"
                                    }`}
                            >
                                <Image src={p.src} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}

                {/* Info Block */}
                <div className="px-6 py-5 pb-6">
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-[var(--G)] mb-1">
                        {vehicle.cat}
                    </div>
                    <div className="font-[family-name:var(--font-playfair)] text-[1.8rem] font-light text-[var(--W)] leading-[1.1] mb-1">
                        {vehicle.name}
                    </div>
                    <div className="text-[0.68rem] tracking-[0.05em] text-[rgba(255,255,255,0.4)] mb-4">
                        {vehicle.model}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="bg-[var(--K2)] border border-[var(--K3)] h-9 px-3 flex items-center justify-center gap-2 rounded-[6px]">
                            <IconPerson size={14} className="text-[rgba(255,255,255,0.4)]" />
                            <span className="text-[0.8rem] font-medium text-[var(--W)]">{vehicle.stats[0]}</span>
                        </div>
                        <div className="bg-[var(--K2)] border border-[var(--K3)] h-9 px-3 flex items-center justify-center gap-2 rounded-[6px]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.4)]">
                                <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            <span className="text-[0.8rem] font-medium text-[var(--W)]">{vehicle.stats[1]}</span>
                        </div>
                        <div className="bg-[var(--K2)] border border-[var(--K3)] h-9 px-3 flex items-center justify-center gap-2 rounded-[6px]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.4)]">
                                <circle cx="12" cy="12" r="10" /><path d="M12 2v20" /><path d="M2 12h20" />
                            </svg>
                            <span className="text-[0.7rem] font-medium text-[rgba(255,255,255,0.8)]">{vehicle.stats[2]}</span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[var(--K3)] px-6 relative">
                    <button
                        onClick={() => setActiveTab("amenities")}
                        className={`flex-1 pb-3 text-center text-[0.62rem] tracking-[0.1em] uppercase transition-colors ${activeTab === "amenities" ? "text-[var(--G)]" : "text-[rgba(255,255,255,0.3)] hover:text-white"}`}
                    >
                        Comodidades
                    </button>
                    <button
                        onClick={() => setActiveTab("interior")}
                        className={`flex-1 pb-3 text-center text-[0.62rem] tracking-[0.1em] uppercase transition-colors ${activeTab === "interior" ? "text-[var(--G)]" : "text-[rgba(255,255,255,0.3)] hover:text-white"}`}
                    >
                        Interior
                    </button>
                    <button
                        onClick={() => setActiveTab("specs")}
                        className={`flex-1 pb-3 text-center text-[0.62rem] tracking-[0.1em] uppercase transition-colors ${activeTab === "specs" ? "text-[var(--G)]" : "text-[rgba(255,255,255,0.3)] hover:text-white"}`}
                    >
                        Equipamiento
                    </button>

                    {/* Active indicator */}
                    <div
                        className="absolute bottom-[-1px] h-[2px] bg-[var(--G)] transition-all duration-300 w-[calc((100%-48px)/3)]"
                        style={{
                            left: `calc(24px + ${activeTab === "amenities" ? 0 : activeTab === "interior" ? 1 : 2
                                } * (100% - 48px) / 3)`,
                        }}
                    />
                </div>

                {/* Tab Panes */}
                <div className="p-6">
                    {activeTab === "amenities" && (
                        <div className="grid grid-cols-2 gap-y-5 gap-x-4 animate-[fade_0.3s_ease]">
                            <div className="flex items-start gap-3">
                                <div className="text-[var(--G)] shrink-0 mt-0.5"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                                <div>
                                    <div className="text-[0.7rem] text-[var(--W1)] mb-0.5">Privacidad</div>
                                    <div className="text-[0.55rem] text-[rgba(255,255,255,0.4)]">Cristales tintados</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-[var(--G)] shrink-0 mt-0.5"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" /></svg></div>
                                <div>
                                    <div className="text-[0.7rem] text-[var(--W1)] mb-0.5">WiFi</div>
                                    <div className="text-[0.55rem] text-[rgba(255,255,255,0.4)]">Red de alta velocidad</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-[var(--G)] shrink-0 mt-0.5"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 22h8" /><path d="M12 11v11" /><path d="M17.5 5a5 5 0 0 1-11 0L5 3h14z" /><path d="M18 3c.5 1.5.5 3 0 4.5" /></svg></div>
                                <div>
                                    <div className="text-[0.7rem] text-[var(--W1)] mb-0.5">Refrescos</div>
                                    <div className="text-[0.55rem] text-[rgba(255,255,255,0.4)]">Agua mineral Evian</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "interior" && (
                        <div className="animate-[fade_0.3s_ease]">
                            <div className="text-[0.8rem] text-[rgba(255,255,255,0.7)] leading-relaxed mb-4">
                                El entorno interior de nuestros vehículos está diseñado para ser un oasis de calma en medio de la ciudad, con insonorización avanzada y materiales premium orientados a su descanso.
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 border-t border-[var(--K3)] pt-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--G)]" />
                                    <span className="text-[0.7rem] text-[var(--W)]">Asientos en piel genuina</span>
                                </div>
                                <div className="flex items-center gap-3 border-t border-[var(--K3)] pt-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--G)]" />
                                    <span className="text-[0.7rem] text-[var(--W)]">Control de clima multizona</span>
                                </div>
                                <div className="flex items-center gap-3 border-t border-[var(--K3)] pt-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--G)]" />
                                    <span className="text-[0.7rem] text-[var(--W)]">Iluminación ambiental adaptable</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "specs" && (
                        <div className="animate-[fade_0.3s_ease]">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {vehicle.specs.map((spec, i) => (
                                        <tr key={i} className="border-b border-[var(--K3)] last:border-0">
                                            <td className="py-3 pr-4 text-[0.65rem] tracking-[0.1em] text-[rgba(255,255,255,0.3)] uppercase w-[35%] align-top">
                                                {spec[0]}
                                            </td>
                                            <td className="py-3 text-[0.75rem] text-[var(--W1)] align-top">
                                                {spec[1]}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-[rgba(10,10,10,0.92)] backdrop-blur-[20px] border-t border-[var(--K3)] flex items-center justify-between px-6 z-[900]">
                <div>
                    <div className="flex items-end gap-1 mb-1">
                        <span className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-light text-[var(--W)] leading-[1]">
                            {vehicle.price}
                        </span>
                        <span className="text-[0.6rem] text-[rgba(255,255,255,0.4)] tracking-[0.1em] mb-[2px]">/día</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <IconClock size={10} className="text-[var(--G)]" />
                        <span className="text-[0.55rem] tracking-[0.15em] text-[var(--G)] uppercase">{vehicle.stats[3]}</span>
                    </div>
                </div>

                <Link
                    href="/instant"
                    className="bg-[var(--G)] hover:opacity-90 active:scale-[0.98] transition-all duration-300 text-[var(--K)] font-medium text-[0.65rem] tracking-[0.2em] uppercase px-6 py-4"
                >
                    Reservar Vehículo
                </Link>
            </div>

            <style jsx>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
