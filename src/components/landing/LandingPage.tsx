"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { FleetSection } from "./FleetSection";
import { Process } from "./Process";
import { BookingForm } from "./BookingForm";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function LandingPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Hero />
            <Services />
            <FleetSection />
            <Process />
            <BookingForm />
            <Contact />
            <Footer />
        </div>
    );
}
