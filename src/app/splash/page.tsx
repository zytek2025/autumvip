"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogoMonogram } from "@/components/icons/BrandIcons";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        // Determine target redirect; usually Home "/"
        const timer = setTimeout(() => {
            router.push("/");
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex-1 bg-[var(--K)] flex flex-col items-center justify-center gap-[14px] p-5 relative overflow-hidden h-full w-full">
            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(201,168,76,0.02)] to-transparent pointer-events-none" />

            {/* Animated Elements */}
            <div className="flex flex-col items-center animate-[fade_1s_ease-out]">
                <LogoMonogram size={100} color="var(--G)" />
                <div className="font-[family-name:var(--font-playfair)] text-[1rem] tracking-[0.4em] text-[var(--W)] uppercase mt-2">
                    AUTUM
                </div>
                <div className="w-[24px] h-[1px] bg-[var(--G)] mt-[14px]"></div>
                <div className="text-[0.45rem] tracking-[0.3em] uppercase text-[rgba(201,168,76,0.5)] mt-[14px]">
                    MOVILIDAD EJECUTIVA
                </div>
            </div>

            {/* Loading Bar at Bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60px] h-[1px] bg-[var(--K3)] overflow-hidden">
                <div className="h-full bg-[var(--G)] animate-[loading_2s_ease-in-out_forwards] origin-left" />
            </div>

            <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
}
