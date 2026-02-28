"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { fleet } from "@/data/fleet";

const FILTERS = ["Todos", "Executive SUV", "Sedán Premium", "Van Ejecutiva"];

export default function FleetCatalogPage() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    return (
        <div className="flex flex-col h-full bg-[var(--K1)]">
            <Header title="Nuestra Flota" />

            {/* Filter Strip */}
            <div className="px-6 shrink-0 mt-2">
                <div className="flex overflow-x-auto gap-3 pb-3 scrollbar-hide snap-x">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`whitespace-nowrap px-[18px] py-[10px] rounded-full text-[0.62rem] tracking-[0.1em] uppercase transition-all duration-300 snap-start border ${activeFilter === f
                                    ? "bg-[rgba(201,168,76,0.1)] border-[var(--G)] text-[var(--G)]"
                                    : "bg-transparent border-[var(--K3)] text-[rgba(255,255,255,0.4)] hover:border-[var(--Gb)]"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                    {/* spacer for scroll bounce */}
                    <div className="w-5 shrink-0" />
                </div>
            </div>

            {/* List Body */}
            <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[100px] scrollbar-hide">
                {fleet.map((vehicle) => (
                    <Link key={vehicle.id} href={`/fleet/${vehicle.id}`} className="block">
                        <VehicleCard
                            id={vehicle.id}
                            name={vehicle.name}
                            category={vehicle.cat}
                            price={vehicle.price}
                            stats={vehicle.stats}
                            photo={vehicle.photos[0].src}
                            isNew={vehicle.isNew}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
