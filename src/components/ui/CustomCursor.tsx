"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const c1Ref = useRef<HTMLDivElement>(null);
    const c2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if on touch device (gross approximation)
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const onMouseMove = (e: MouseEvent) => {
            if (c1Ref.current) {
                c1Ref.current.style.left = `${e.clientX}px`;
                c1Ref.current.style.top = `${e.clientY}px`;
            }

            setTimeout(() => {
                if (c2Ref.current) {
                    c2Ref.current.style.left = `${e.clientX}px`;
                    c2Ref.current.style.top = `${e.clientY}px`;
                }
            }, 90);
        };

        document.addEventListener("mousemove", onMouseMove);
        return () => document.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <>
            <div ref={c1Ref} className="cur hidden lg:block" />
            <div ref={c2Ref} className="cur2 hidden lg:block" />
        </>
    );
}
