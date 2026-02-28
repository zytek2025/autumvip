export interface Vehicle {
    id: string;
    name: string;
    cat: string;
    model: string;
    price: string;
    stats: string[];
    isNew?: boolean;
    photos: { src: string; credit: string; lbl?: string }[];
    specs: [string, string][];
}

export const fleet: Vehicle[] = [
    {
        id: "v1",
        name: "Tahoe High Country",
        cat: "Full-Size Executive SUV · Chevrolet",
        model: "Chevrolet Tahoe 2021 · High Country · 6.2L V8 · 420 hp",
        price: "$920",
        stats: ["8", "5", "V8 6.2L", "4 min"],
        isNew: true,
        photos: [
            {
                src: "https://images.pexels.com/photos/11091622/pexels-photo-11091622.jpeg?auto=compress&cs=tinysrgb&w=800",
                credit: "© Abdulwahab Alawadhi · Pexels",
            },
            {
                src: "https://images.pexels.com/photos/11091649/pexels-photo-11091649.jpeg?auto=compress&cs=tinysrgb&w=800",
                credit: "© Abdulwahab Alawadhi · Pexels",
            }
        ],
        specs: [
            ["Motor", "V8 6.2L EcoTec3 · 420 hp"],
            ["Interior", "Piel Mocha · Detalles de madera real"],
            ["Infoentretenimiento", "10.2\" central · HUD de 15\""],
            ["Blindaje", "Opción Nivel III+ disponible"],
        ]
    },
    {
        id: "v2",
        name: "Audi A8 L",
        cat: "Premium Sedan · Long Wheelbase",
        model: "Audi A8 L 2023 · 55 TFSI · Mild Hybrid",
        price: "$1,150",
        stats: ["3", "3", "V6 3.0L", "8 min"],
        photos: [
            {
                src: "https://images.pexels.com/photos/10006733/pexels-photo-10006733.jpeg?auto=compress&cs=tinysrgb&w=800",
                credit: "© Pexels Contributor",
            }
        ],
        specs: [
            ["Motor", "V6 3.0L TFSI · 335 hp"],
            ["Interior", "Piel Valcona · Asientos ejecutivos"],
            ["Confort", "Masaje · Ventilación · Cortinillas elec."],
        ]
    },
    {
        id: "v3",
        name: "Mercedes V-Class",
        cat: "Executive Van · Transport",
        model: "Mercedes-Benz V-Class V 250 d",
        price: "$1,380",
        stats: ["6", "6", "I4 2.1L", "12 min"],
        photos: [
            {
                src: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800",
                credit: "© Pexels",
            }
        ],
        specs: [
            ["Motor", "4 cil Turbodiesel · 190 hp"],
            ["Interior", "Configuración de asientos vis-à-vis"],
            ["Confort", "Doble puerta corrediza · Mesas de trabajo"],
        ]
    }
];
