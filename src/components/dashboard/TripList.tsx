"use client";

export function TripList() {
    const trips = [
        { badge: "GLS", route: "Torre Mayor → Aeropuero NAIM", meta: "Mar 24 · 07:30 · 52 min", price: "$1,240" },
        { badge: "S·CL", route: "Polanco → Santa Fe", meta: "Mar 22 · 14:00 · 38 min", price: "$680" },
        { badge: "GLS", route: "Reforma → Lomas de Chapultepec", meta: "Mar 20 · 20:15 · 22 min", price: "$890" },
    ];

    return (
        <>
            <div className="text-[0.55rem] tracking-[0.45em] uppercase text-[var(--G)] mb-3.5">
                Viajes recientes
            </div>
            <div className="flex flex-col">
                {trips.map((trip, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 py-3.5 border-b border-[var(--K3)] cursor-pointer last:border-none group">
                        <div className="w-9 h-9 border border-[var(--K3)] flex items-center justify-center shrink-0 text-[0.5rem] tracking-[0.1em] text-[rgba(255,255,255,0.3)] transition-colors group-hover:border-[var(--Gb)]">
                            {trip.badge}
                        </div>
                        <div className="flex-1">
                            <div className="text-[0.72rem] text-[var(--W1)] mb-1 group-hover:text-white transition-colors">{trip.route}</div>
                            <div className="text-[0.55rem] tracking-[0.12em] text-[rgba(255,255,255,0.2)] uppercase">{trip.meta}</div>
                        </div>
                        <div className="font-[family-name:var(--font-playfair)] text-[0.85rem] text-[rgba(201,168,76,0.7)] group-hover:text-[var(--G)] transition-colors">
                            {trip.price}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
