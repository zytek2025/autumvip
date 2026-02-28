import { fleet } from "@/data/fleet";
import VehicleDetailPageClient from "./VehicleDetailClient";

export function generateStaticParams() {
    return fleet.map((vehicle) => ({
        id: vehicle.id,
    }));
}

export default function Page() {
    return <VehicleDetailPageClient />;
}
