import { useState } from 'react';
import { Wifi, Coffee, Tv } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';

const content = {
  es: {
    badge: "Habitaciones diseñadas para su descanso",
    title: "Habitaciones",
    desc: "Espacios diseñados para garantizar su descanso y comodidad. Contamos con 11 opciones ideales para viajes de negocios o turismo, equipadas con Smart TV, WiFi de alta velocidad y baño privado. Encuentre el ambiente perfecto para disfrutar de una estadía excepcional en el corazón de Arequipa.",
    from: "Desde",
    button: "Consultar ahora",
    rooms: [
      {
        id: 1,
        name: "Habitación Individual Básica",
        description: "Acogedora habitación con baño privado, equipada con una cama de 1½ plazas y vista interior. Ideal para viajeros que buscan buena relación calidad-precio.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
        price: "S/ 55",
        features: ["1 Huésped", "11 m²", "Cama 1½ plazas"]
      },
      {
        id: 2,
        name: "Habitación Individual Superior",
        description: "Amplia y confortable habitación equipada con cama de 2 plazas. Ofrece mayor comodidad y confort para viajeros de negocios o turismo.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
        price: "S/ 80",
        features: ["1 Huésped", "16 m²", "Cama 2 plazas"]
      },
      {
        id: 3,
        name: "Habitación Matrimonial Económica",
        description: "Confortable habitación con cama matrimonial y vista interior. Ideal para parejas o amigos que buscan una estancia funcional y acogedora.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        price: "S/ 88",
        features: ["2 Huéspedes", "16 m²", "Cama Matrimonial"]
      },
      {
        id: 4,
        name: "Habitación Matrimonial Estándar",
        description: "Con vista exterior, excelente iluminación y ventilación natural. Un ambiente acogedor ideal para parejas buscando una estancia placentera.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
        price: "S/ 105",
        features: ["2 Huéspedes", "18 m²", "Vista exterior"]
      },
      {
        id: 5,
        name: "Habitación Queen Ejecutiva",
        description: "Exclusiva habitación con cama Queen y vista panorámica a la Plaza San Antonio y volcanes. Para quienes buscan hospedaje superior.",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
        price: "S/ 120",
        features: ["2 Huéspedes", "21 m²", "Cama Queen"]
      },
      {
        id: 6,
        name: "Habitación Matrimonial Superior",
        description: "Amplia habitación con cama Queen, balcón y hermosa vista a la Plaza y volcanes. Tranquilidad, privacidad y elegancia.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        price: "S/ 115",
        features: ["2 Huéspedes", "18 m²", "Balcón con vista"]
      },
      {
        id: 7,
        name: "Habitación Doble Superior",
        description: "Equipada con cama matrimonial y una cama de 1½ plazas. Amplitud y comodidad para familias o compañeros de trabajo.",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80",
        price: "S/ 120",
        features: ["2 Adultos, 1 Niño", "24 m²", "2 Camas"]
      },
      {
        id: 8,
        name: "Habitación Familiar",
        description: "Amplia habitación con cama matrimonial y cama de 1½ plazas. Ideal para familias con niños buscando comodidad y amplitud.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
        price: "S/ 125",
        features: ["3 Huéspedes", "24 m²", "2 Camas"]
      },
      {
        id: 9,
        name: "Habitación Triple Estándar",
        description: "Equipada con tres camas individuales y ventana con vista exterior para excelente iluminación. Perfecta para grupos de amigos.",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80",
        price: "S/ 125",
        features: ["3 Huéspedes", "25 m²", "3 Camas simples"]
      },
      {
        id: 10,
        name: "Habitación Triple Económica",
        description: "Diseño compacto con tres camas individuales. Excelente opción para grupos buscando confort a buena relación calidad-precio.",
        image: "https://images.unsplash.com/photo-1598928506311-c55dd580e550?auto=format&fit=crop&q=80",
        price: "S/ 117",
        features: ["3 Huéspedes", "19 m²", "3 Camas simples"]
      },
      {
        id: 11,
        name: "Habitación Cuádruple Estándar",
        description: "Nuestra habitación más amplia, con cama matrimonial y dos camas de 1½ plazas. Ideal para grupos grandes o familias numerosas.",
        image: "https://images.unsplash.com/photo-1574643014728-06cb7debb2e2?auto=format&fit=crop&q=80",
        price: "S/ 150",
        features: ["4 Huéspedes", "29 m²", "3 Camas en total"]
      }
    ]
  },
  en: {
    badge: "Comfort and Rest",
    title: "Rooms",
    desc: "Spaces designed to ensure your rest and comfort. We offer 11 options ideal for business or leisure travel, equipped with Smart TV, high-speed Wi-Fi, and private bathrooms. Find the perfect setting to enjoy an exceptional stay in the heart of Arequipa.",
    from: "From",
    button: "Inquire Now",
    rooms: [
      {
        id: 1,
        name: "Basic Single Room",
        description: "Cozy room with private bathroom, equipped with a twin bed and interior view. Ideal for travelers looking for great value.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
        price: "S/ 55",
        features: ["1 Guest", "11 m²", "Twin Bed"]
      },
      {
        id: 2,
        name: "Superior Single Room",
        description: "Spacious and comfortable room equipped with a full bed. Offers greater comfort for business or leisure travelers.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
        price: "S/ 80",
        features: ["1 Guest", "16 m²", "Full Bed"]
      },
      {
        id: 3,
        name: "Economic Double Room",
        description: "Comfortable room with a double bed and interior view. Ideal for couples or friends looking for a functional stay.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        price: "S/ 88",
        features: ["2 Guests", "16 m²", "Double Bed"]
      },
      {
        id: 4,
        name: "Standard Double Room",
        description: "With an exterior view, excellent lighting, and natural ventilation. A cozy environment ideal for couples.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
        price: "S/ 105",
        features: ["2 Guests", "18 m²", "Exterior View"]
      },
      {
        id: 5,
        name: "Executive Queen Room",
        description: "Exclusive room with a Queen bed and panoramic views of the San Antonio Square and volcanoes.",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
        price: "S/ 120",
        features: ["2 Guests", "21 m²", "Queen Bed"]
      },
      {
        id: 6,
        name: "Superior Double Room",
        description: "Spacious room with a Queen bed, balcony, and beautiful views of the square and volcanoes.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        price: "S/ 115",
        features: ["2 Guests", "18 m²", "Balcony View"]
      },
      {
        id: 7,
        name: "Superior Twin Room",
        description: "Equipped with a double bed and a twin bed. Spacious and comfortable for families or coworkers.",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80",
        price: "S/ 120",
        features: ["2 Adults, 1 Child", "24 m²", "2 Beds"]
      },
      {
        id: 8,
        name: "Family Room",
        description: "Spacious room with a double bed and an additional twin bed. Ideal for families with children.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
        price: "S/ 125",
        features: ["3 Guests", "24 m²", "2 Beds"]
      },
      {
        id: 9,
        name: "Standard Triple Room",
        description: "Equipped with three single beds and an exterior window for excellent lighting. Perfect for groups of friends.",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80",
        price: "S/ 125",
        features: ["3 Guests", "25 m²", "3 Single Beds"]
      },
      {
        id: 10,
        name: "Economic Triple Room",
        description: "Compact design with three single beds. Excellent option for groups looking for comfort and value.",
        image: "https://images.unsplash.com/photo-1598928506311-c55dd580e550?auto=format&fit=crop&q=80",
        price: "S/ 117",
        features: ["3 Guests", "19 m²", "3 Single Beds"]
      },
      {
        id: 11,
        name: "Standard Quadruple Room",
        description: "Our most spacious room, with a double bed and two twin beds. Ideal for large groups or families.",
        image: "https://images.unsplash.com/photo-1574643014728-06cb7debb2e2?auto=format&fit=crop&q=80",
        price: "S/ 150",
        features: ["4 Guests", "29 m²", "3 Beds Total"]
      }
    ]
  }
};

interface RoomsPreviewProps {
  lang?: 'es' | 'en';
  showAll?: boolean;
}

export default function RoomsPreview({ lang = 'es', showAll = false }: RoomsPreviewProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const data = content[lang];
  
  const displayedRooms = showAll ? data.rooms : data.rooms.slice(0, 3);

  return (
    <section id="habitaciones" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">{data.badge}</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4">{data.title}</h2>
          <p className="text-brand-text-muted max-w-3xl mx-auto text-base leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedRooms.map((room) => (
            <div 
              key={room.id}
              className="group cursor-pointer flex flex-col h-full transition-all duration-500 hover:-translate-y-2"
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

              <div className="space-y-3 mb-6 flex-1">
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
                  "inline-flex items-center justify-center gap-2 w-full text-xs font-bold uppercase tracking-widest transition-all px-6 py-4 mt-auto",
                  "bg-brand-primary hover:bg-brand-text text-white shadow-sm hover:shadow-xl shadow-brand-primary/20 hover:shadow-brand-text/20 duration-300"
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
        
        {!showAll && (
          <div className="text-center mt-12">
            <a href="/habitaciones" className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors px-8 py-3 uppercase tracking-widest text-sm font-bold">
              Ver todas las habitaciones
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
