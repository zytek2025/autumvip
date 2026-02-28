"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="bg-[var(--K2)] rounded-[16px] p-5 border border-[var(--K3)] relative overflow-hidden flex flex-col gap-3 transition-all duration-300 active:scale-95 active:border-[rgba(201,168,76,0.2)] group cursor-pointer"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.04)] to-transparent opacity-100 pointer-events-none" />

            {/* Icon Area */}
            <div className="w-10 h-10 rounded-full bg-[var(--K)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[var(--G)] shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>

            {/* Content */}
            <div className="font-[family-name:var(--font-playfair)] text-[1.1rem] text-[var(--W)] leading-[1.2]">
                {title}
            </div>
            <div className="text-[0.68rem] text-[rgba(255,255,255,0.4)] leading-[1.6]">
                {description}
            </div>

            {/* Arrow Icon */}
            <div className="absolute right-5 bottom-5 w-7 h-7 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[rgba(255,255,255,0.3)] transition-all duration-300 group-hover:bg-[var(--G)] group-hover:text-[var(--K)] group-hover:translate-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </Link>
    );
}
