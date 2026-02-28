import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}

// ==========================================
// LOGOS
// ==========================================
export const LogoMonogram = ({ size = 110, color = "var(--G)", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="55,8 100,55 55,102 10,55" stroke={color} strokeWidth="1.2" fill="none" />
        <polygon points="55,22 86,55 55,88 24,55" stroke="var(--Go)" strokeWidth="0.6" fill="none" />
        <text x="55" y="63" textAnchor="middle" fontFamily="var(--font-playfair)" fontSize="30" fontWeight="400" fill={color}>A</text>
    </svg>
);

export const LogoWordmark = ({ size = 220, color = "var(--W)", ...props }: IconProps) => (
    <svg width={size} viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="110" y="42" textAnchor="middle" fontFamily="var(--font-playfair)" fontSize="40" fontWeight="300" letterSpacing="14" fill={color}>AUTUM</text>
        <rect x="82" y="44" width="28" height="1.5" fill="var(--G)" />
    </svg>
);

export const LogoCircular = ({ size = 110, color = "var(--G)", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="55" cy="55" r="46" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="55" cy="55" r="38" stroke="var(--Gb)" strokeWidth="0.5" fill="none" />
        <text x="55" y="64" textAnchor="middle" fontFamily="var(--font-playfair)" fontSize="34" fontWeight="300" fill={color} letterSpacing="2">A</text>
        <path id="arc1" d="M 15,55 A 40,40 0 0,1 95,55" fill="none" />
        <text fontFamily="var(--font-raleway)" fontSize="5.5" fill="var(--Go)" letterSpacing="4">
            <textPath href="#arc1" startOffset="5%">AUTUM · MOVILIDAD EJECUTIVA ·</textPath>
        </text>
    </svg>
);

// ==========================================
// SYSTEM ICONS
// ==========================================
export const IconVehicle = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5,13 L6.5,8.5 Q7.5,6 9,6 L15,6 Q16.5,6 17.5,8.5 L19,13" />
        <rect x="3" y="13" width="18" height="5" rx="1.5" />
        <circle cx="7.5" cy="18.5" r="1.5" />
        <circle cx="16.5" cy="18.5" r="1.5" />
        <line x1="9" y1="10" x2="15" y2="10" />
    </svg>
);

export const IconClock = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" {...props}>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12,7 12,12 16,14" />
    </svg>
);

export const IconLocation = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" {...props}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

export const IconPremium = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,3 21,12 12,21 3,12" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
);

export const IconShield = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

export const IconStar = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);

export const IconPlane = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2v0A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
    </svg>
);

export const IconWiFi = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" {...props}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill={color} />
    </svg>
);

export const IconChampagne = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="M17.5 5a5 5 0 0 1-11 0L5 3h14z" />
        <path d="M18 3c.5 1.5.5 3 0 4.5" />
    </svg>
);

export const IconPerson = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const IconCalendar = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

export const IconVIP = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7z" />
        <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
);
