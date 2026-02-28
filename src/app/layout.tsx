import type { Metadata } from "next";
import { Playfair_Display, Raleway, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { PhoneShell } from "@/components/ui/PhoneShell";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BottomNav } from "@/components/ui/BottomNav";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AUTUM — Movilidad Ejecutiva",
  description: "Executive mobility and private transfers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${raleway.variable} ${cormorant.variable} antialiased`}
      >
        <CustomCursor />
        <main className="min-h-screen bg-black">
          {children}
        </main>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script src="https://ionos.ai-voice-receptionist.com/chat-scripts-MqGN74WP/web-chat.js" name="web-chat" data-client-secret="adf9bab9-8f8d-406e-aec8-1fb5e235f44c"></script>`,
          }}
        />
      </body>
    </html>
  );
}
