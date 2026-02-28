"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    IconPremium,
    IconCalendar,
    IconVehicle,
    IconPerson,
} from "@/components/icons/BrandIcons";

const _navItems = [
    { href: "/", label: "Inicio", icon: IconPremium },
    { href: "/fleet", label: "Flota", icon: IconVehicle },
    { href: "/reservations", label: "Reservas", icon: IconCalendar },
    { href: "/account", label: "Cuenta", icon: IconPerson },
];

export function BottomNav() {
    const pathname = usePathname();

    // Do not show bottom nav on splash screen
    if (pathname === "/splash") return null;

    return (
        <nav className="absolute bottom-0 left-0 right-0 h-[64px] bg-[rgba(0,0,0,0.85)] flex justify-around items-center border-t border-[rgba(255,255,255,0.06)] z-[900] backdrop-blur-[12px] pb-[env(safe-area-inset-bottom)]">
            {_navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors duration-300 ${isActive ? "text-[var(--G)]" : "text-[rgba(255,255,255,0.4)] hover:text-white"
                            }`}
                    >
                        <div className={`relative flex items-center justify-center transition-transform duration-300 ${isActive ? "-translate-y-1" : ""}`}>
                            <Icon size={22} className="relative z-10" />
                            {/* Active Glow */}
                            {isActive && (
                                <div className="absolute inset-0 bg-[var(--G)] blur-[8px] opacity-30 rounded-full scale-150" />
                            )}
                        </div>
                        <span
                            className={`text-[0.6rem] tracking-[0.1em] font-medium transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute"
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
