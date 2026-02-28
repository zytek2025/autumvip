import { ReactNode } from "react";

export function PhoneShell({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="fixed inset-0 bg-[var(--K1)] -z-10" />
            <div className="w-full h-[100dvh] mx-auto bg-[var(--K)] relative overflow-hidden flex flex-col sm:w-[390px] sm:h-[844px] sm:mt-[clamp(10px,4vh,40px)] sm:rounded-[32px] sm:shadow-[0_40px_80px_rgba(0,0,0,0.8)] sm:border sm:border-[var(--K3)]">
                {/* Dynamic Island Mockup for Desktop */}
                <div className="hidden sm:flex h-[28px] w-full justify-center absolute top-0 z-[100] pointer-events-none">
                    <div className="w-[120px] h-[28px] bg-[var(--K4)] rounded-b-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                </div>

                {/* Main Application Area */}
                <div className="flex-1 w-full h-full relative overflow-hidden flex flex-col">
                    {children}
                </div>
            </div>
        </>
    );
}
