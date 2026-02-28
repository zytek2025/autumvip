"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    showBack?: boolean;
    rightAction?: ReactNode;
}

export function Header({ title, showBack = true, rightAction }: HeaderProps) {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between px-5 h-[60px] shrink-0">
            {/* Back Button */}
            {showBack ? (
                <button
                    onClick={() => router.back()}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[var(--W)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            ) : (
                <div className="w-10 h-10" />
            )}

            {/* Title */}
            <div className="font-[family-name:var(--font-playfair)] text-[1.1rem] text-[var(--W)] font-normal tracking-[0.05em] flex-1 text-center">
                {title}
            </div>

            {/* Right Action or More Button */}
            {rightAction ? (
                rightAction
            ) : (
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[var(--W)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                    </svg>
                </button>
            )}
        </header>
    );
}
