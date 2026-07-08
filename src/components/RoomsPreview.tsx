import { useState } from 'react';
import { Wifi, Coffee, Tv } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';

const content = {
  es: {
    badge: "Confort y descanso",
    title: "Habitaciones",
    desc: "En el Hotel Plaza San Antonio te ofrecemos unos fantásticos espacios pensados para tu descanso y comodidad. Nuestras habitaciones están completamente equipadas y todas ellas disponen de TV de pantalla plana con canales por cable, Internet Wi-Fi de alta velocidad, baño privado con bañera o ducha, agua caliente las 24 horas. Además, algunas habitaciones disponen de terraza o balcón.",
    from: "Desde",
    button: "Consultar ahora",
    rooms: [
      {
        id: 4,
        name: "Habitación individual básica",
        description: "Habitación individual básica con baño privado equipada con una cama de 1.5 plazas. Ideal para los viajeros solitarios para estancias cortas a un precio asequible.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
        price: "$45",
        features: ["Cama 1.5 Plazas", "Wi-Fi Alta Velocidad", "Baño Privado"]
      },
      {
        id: 1,
        name: "Habitación Matrimonial",
        description: "Confort ideal para parejas o ejecutivos, equipada con escritorio, conectividad de alta velocidad y un gran descanso.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
        price: "$65",
        features: ["Cama King", "Wi-Fi Fibra", "Escritorio"]
      },
      {
        id: 2,
        name: "Habitación Doble",
        description: "El espacio perfecto para viajes familiares o de negocios en equipo, garantizando comodidad después de una jornada en la ciudad.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        price: "$75",
        features: ["2 Camas Queen", "Tv Cable", "Baño Privado"]
      },
      {
        id: 3,
        name: "Suite Corporativa",
        description: "Amplitud superior con espacios diferenciados para trabajar y descansar. Ideal para estadías prolongadas.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
        price: "$95",
        features: ["Sala de Estar", "Smart TV", "Frigobar"]
      }
    ]
  },
  en: {
    badge: "Comfort and Rest",
    title: "Rooms",
    desc: "At Hotel Plaza San Antonio, we offer fantastic spaces designed for your rest and comfort. Our rooms are fully equipped and all feature flat-screen cable TV, high-speed Wi-Fi, private bathrooms with bathtub or shower, and 24-hour hot water. Additionally, some rooms include a terrace or balcony.",
    from: "From",
    button: "Inquire Now",
    rooms: [
      {
        id: 4,
        name: "Basic Single Room",
        description: "Basic single room with a private bathroom equipped with a twin bed. Ideal for solo travelers for short stays at an affordable price.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
        price: "$45",
        features: ["Twin Bed", "High-Speed Wi-Fi", "Private Bathroom"]
      },
      {
        id: 1,
        name: "Matrimonial Room",
        description: "Ideal comfort for couples or executives, equipped with a desk, high-speed connectivity, and great rest.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
        price: "$65",
        features: ["King Bed", "Fiber Wi-Fi", "Desk"]
      },
      {
        id: 2,
        name: "Double Room",
        description: "The perfect space for family trips or business teams, ensuring comfort after a long day in the city.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        price: "$75",
        features: ["2 Queen Beds", "Cable TV", "Private Bathroom"]
      },
      {
        id: 3,
        name: "Corporate Suite",
        description: "Superior spaciousness with separate areas for working and resting. Ideal for extended stays.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
        price: "$95",
        features: ["Living Room", "Smart TV", "Minibar"]
      }
    ]
  }
};

interface RoomsPreviewProps {
  lang?: 'es' | 'en';
}

export default function RoomsPreview({ lang = 'es' }: RoomsPreviewProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const data = content[lang];

  return (
    <section id="habitaciones" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">{data.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">{data.title}</h2>
          <p className="text-brand-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.rooms.slice(0, 3).map((room) => (
            <div 
              key={room.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-brand-text/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-brand-text-muted mb-1">{data.from}</p>
                  <p className="text-xl font-serif text-brand-primary">{room.price}</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                {room.name}
              </h3>
              
              <p className="text-brand-text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                {room.description}
              </p>

              <div className="space-y-3 mb-6">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/51973341847?text=Hola,%20quisiera%20consultar%20sobre%20la%20${encodeURIComponent(room.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "inline-flex items-center justify-center gap-2 w-full text-xs font-bold uppercase tracking-widest transition-all px-6 py-4",
                  "bg-brand-primary hover:bg-brand-primary-dark text-white shadow-sm hover:shadow-md"
                )}
              >
                <FaWhatsapp className={clsx(
                  "w-5 h-5 transition-transform",
                  hoveredId === room.id ? "scale-110" : ""
                )} />
                {data.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
