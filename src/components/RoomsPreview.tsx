import { useState, useEffect } from 'react';
import { Wifi, Coffee, Tv, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';

const content = {
  es: {
    badge: "Habitaciones diseñadas para su descanso",
    title: "Habitaciones",
    desc: [
      "En Hotel Plaza San Antonio encontrará el espacio ideal para disfrutar de una estadía confortable. Contamos con 10 tipos de habitaciones, diseñadas para satisfacer las necesidades de viajeros corporativos, turistas nacionales e internacionales y familias, combinando comodidad, funcionalidad y una atención personalizada.",
      "Todas nuestras habitaciones disponen de baño privado completamente equipado con amenidades de cortesía, toallas, secador de cabello, ducha y agua caliente las 24 horas. Además, cuentan con Smart TV con canales por cable, WiFi de alta velocidad, escritorio o mesa de trabajo, clóset y cómodas camas que garantizan un descanso reparador. Algunas categorías también ofrecen terraza o balcón, desde donde podrá disfrutar de una privilegiada vista a la Plaza e Iglesia San Antonio y a los majestuosos volcanes Misti, Chachani y Pichu Pichu.",
      "Ya sea que viaje por negocios, turismo o en familia, encontrará la habitación ideal para disfrutar de una experiencia de confort, tranquilidad y hospitalidad en el corazón de Arequipa."
    ],
    from: "Desde",
    button: "Consultar ahora",
    rooms: [
      {
        id: 4,
        name: "Habitación Matrimonial Estándar",
        description: "Confortable habitación con baño privado, cama matrimonial y vista exterior. Cuenta con excelente iluminación y ventilación natural, ideal para parejas en viajes de ocio y huéspedes que buscan una estancia agradable y un descanso confortable.",
        image: "/matrimonial_estandar/matrimonial_estandar1.avif",
        images: [
          "/matrimonial_estandar/matrimonial_estandar1.avif",
          "/matrimonial_estandar/matrimonial_estandar2.avif",
          "/matrimonial_estandar/matrimonial_estandar3.avif",
          "/matrimonial_estandar/matrimonial_estandar4.avif",
          "/matrimonial_estandar/matrimonial_estandar5.avif",
          "/matrimonial_estandar/matrimonial_estandar6.avif",
          "/matrimonial_estandar/matrimonial_estandar7.avif"
        ],
        price: "S/ 110",
        features: [
          "Hasta 2 huéspedes",
          "18 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 5,
        name: "Habitación Queen Ejecutiva",
        description: "Exclusiva habitación con cama Queen, baño privado y privilegiada vista panorámica a la Plaza e Iglesia San Antonio y a los volcanes. Diseñada para brindar mayor confort, es ideal para viajeros de negocios o turismo que buscan una experiencia de hospedaje superior.",
        image: "/queen_ejecutiva/queen_ejecutiva1.avif",
        images: [
          "/queen_ejecutiva/queen_ejecutiva1.avif",
          "/queen_ejecutiva/queen_ejecutiva2.avif",
          "/queen_ejecutiva/queen_ejecutiva3.avif",
          "/queen_ejecutiva/queen_ejecutiva4.avif",
          "/queen_ejecutiva/queen_ejecutiva5.avif",
          "/queen_ejecutiva/queen_ejecutiva6.avif"
        ],
        price: "S/ 130",
        features: [
          "Hasta 2 huéspedes",
          "21 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Minibar",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Escritorio y mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 6,
        name: "Habitación Matrimonial Superior",
        description: "Amplia y confortable habitación ubicada en el 4.º piso, con cama Queen, baño privado y pequeño balcón con privilegiada vista a los volcanes y a la Plaza San Antonio. Ideal para huéspedes que buscan mayor confort, tranquilidad y una experiencia de alojamiento superior.",
        image: "/matrimonial_superior/matrimonial_superior1.avif",
        images: [
          "/matrimonial_superior/matrimonial_superior1.avif",
          "/matrimonial_superior/matrimonial_superior2.avif",
          "/matrimonial_superior/matrimonial_superior3.avif",
          "/matrimonial_superior/matrimonial_superior4.avif",
          "/matrimonial_superior/matrimonial_superior5.avif",
          "/matrimonial_superior/matrimonial_superior6.avif"
        ],
        price: "S/ 120",
        features: [
          "Hasta 2 huéspedes",
          "18 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Minibar",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Escritorio y mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 2,
        name: "Habitación Individual Superior",
        description: "Disfrute de una amplia y confortable habitación con baño privado y cama de 2 plazas. Diseñada para brindar mayor comodidad, es ideal para viajeros de negocios o turismo que buscan una estancia agradable y un excelente descanso.",
        image: "/individual_superior/individual_superior1.avif",
        images: [
          "/individual_superior/individual_superior1.avif",
          "/individual_superior/individual_superior2.avif",
          "/individual_superior/individual_superior3.avif"
        ],
        price: "S/ 80",
        features: [
          "1 huésped",
          "16 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Escritorio y mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 7,
        name: "Habitación Doble Superior",
        description: "Amplia y confortable habitación con baño privado, equipada con una cama matrimonial y una cama de 1½ plazas. Ideal para familias, viajeros o compañeros de trabajo. Puede alojar hasta 2 adultos y 1 niño menor de 5 años utilizando las camas existentes.",
        image: "/doble_superior/doble_superior1.avif",
        images: [
          "/doble_superior/doble_superior1.avif",
          "/doble_superior/doble_superior2.avif",
          "/doble_superior/doble_superior3.avif",
          "/doble_superior/doble_superior4.avif",
          "/doble_superior/doble_superior5.avif"
        ],
        price: "S/ 120",
        features: [
          "Hasta 2 huéspedes + 1 niño menor de 5 años",
          "24 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 8,
        name: "Habitación Familiar",
        description: "Amplia y confortable habitación con baño privado, equipada con una cama matrimonial y una cama de 1½ plazas. Ideal para familias o grupos de viajeros que buscan comodidad y amplitud.",
        image: "/familiar/familiar1.avif",
        images: [
          "/familiar/familiar1.avif",
          "/familiar/familiar2.avif",
          "/familiar/familiar3.avif",
          "/familiar/familiar4.avif"
        ],
        price: "S/ 130",
        features: [
          "Hasta 3 huéspedes",
          "24 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 10,
        name: "Habitación Triple Económica",
        description: "Acogedora y funcional habitación con tres camas de 1½ plazas y baño privado de diseño compacto. Ideal para familias o grupos de viajeros que buscan comodidad y una excelente relación calidad-precio.",
        image: "/triple_economica/triple_economica1.avif",
        images: [
          "/triple_economica/triple_economica1.avif"
        ],
        price: "S/ 120",
        features: [
          "Hasta 3 huéspedes",
          "21 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 9,
        name: "Habitación Triple Estándar",
        description: "Amplia y confortable habitación con baño privado, equipada con tres camas de 1½ plazas y ventana con vista exterior que brinda iluminación y ventilación natural. Ideal para familias o grupos de viajeros.",
        image: "/triple_estandar/triple_estandar1.avif",
        images: [
          "/triple_estandar/triple_estandar1.avif",
          "/triple_estandar/triple_estandar2.avif"
        ],
        price: "S/ 130",
        features: [
          "Hasta 3 huéspedes",
          "25 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 11,
        name: "Habitación Cuádruple Económica",
        description: "Cómoda y funcional habitación con baño privado, equipada con 1 cama matrimonial + 2 camas de 1½ plazas. Ideal para familias o grupos de viajeros que buscan comodidad y una distribución práctica.",
        image: "/cuadruple_estandar/cuadruple_estandar1.avif",
        images: [
          "/cuadruple_estandar/cuadruple_estandar1.avif",
          "/cuadruple_estandar/cuadruple_estandar2.avif",
          "/cuadruple_estandar/cuadruple_estandar3.avif"
        ],
        price: "S/ 160",
        features: [
          "Hasta 4 huéspedes",
          "29 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Calefacción",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 1,
        name: "Habitación Individual Básica",
        description: "Acogedora habitación ubicada en el 4.º piso, con baño privado, cama de 1½ plazas y vista interior. Su diseño compacto y funcional brinda el confort necesario para una estadía agradable, ideal para viajeros de negocios o turismo que buscan una excelente relación calidad-precio.",
        image: "/individual_basica/individual_basica1.avif",
        images: [
          "/individual_basica/individual_basica1.avif",
          "/individual_basica/individual_basica2.avif",
          "/individual_basica/individual_basica3.avif"
        ],
        price: "S/ 65",
        features: [
          "1 huésped",
          "11 m²",
          "Smart TV, con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Desayuno incluido"
        ]
      },
      {
        id: 3,
        name: "Habitación Matrimonial Económica",
        description: "Confortable habitación con baño privado, equipada con una cama matrimonial y vista interior. Ideal para parejas o amigos que buscan una estancia cómoda y funcional, en un ambiente acogedor, perfecto para disfrutar de un descanso reparador y una excelente relación calidad-precio.",
        image: "/matrimonial_economica/matrimonial_economica1.avif",
        images: [
          "/matrimonial_economica/matrimonial_economica1.avif",
          "/matrimonial_economica/matrimonial_economica2.avif",
          "/matrimonial_economica/matrimonial_economica3.avif"
        ],
        price: "S/ 88",
        features: [
          "Hasta 2 huéspedes",
          "16 m²",
          "Smart TV de 32\" con canales por cable",
          "WiFi de alta velocidad",
          "Amenidades de cortesía",
          "Secador de cabello",
          "Agua caliente las 24 horas",
          "Mesa de trabajo",
          "Clóset",
          "Enchufes de 220 V junto a la cama",
          "Desayuno americano incluido"
        ]
      }
    ]
  },
  en: {
    badge: "Rooms Designed for Your Comfort",
    title: "Rooms",
    desc: [
      "At Hotel Plaza San Antonio you will find the ideal space to enjoy a comfortable stay. We have 10 types of rooms, designed to meet the needs of corporate travelers, domestic and international tourists, and families, combining comfort, functionality, and personalized attention.",
      "All our rooms have a fully equipped private bathroom with complimentary amenities, towels, a hairdryer, a shower, and 24-hour hot water. Additionally, they feature a Smart TV with cable channels, high-speed WiFi, a desk or work table, a closet, and comfortable beds that guarantee a restful sleep. Some categories also offer a terrace or balcony, from where you can enjoy a privileged view of the Plaza and Church of San Antonio and the majestic volcanoes Misti, Chachani, and Pichu Pichu.",
      "Whether you are traveling for business, tourism, or with your family, you will find the ideal room to enjoy an experience of comfort, tranquility, and hospitality in the heart of Arequipa."
    ],
    from: "From",
    button: "Inquire now",
    rooms: [
      {
        id: 4,
        name: "Standard Matrimonial Room",
        description: "Comfortable room with private bathroom, double matrimonial bed and exterior view. It features excellent natural lighting and ventilation, ideal for couples on leisure trips and guests seeking a pleasant stay and comfortable rest.",
        image: "/matrimonial_estandar/matrimonial_estandar1.avif",
        images: [
          "/matrimonial_estandar/matrimonial_estandar1.avif",
          "/matrimonial_estandar/matrimonial_estandar2.avif",
          "/matrimonial_estandar/matrimonial_estandar3.avif",
          "/matrimonial_estandar/matrimonial_estandar4.avif",
          "/matrimonial_estandar/matrimonial_estandar5.avif",
          "/matrimonial_estandar/matrimonial_estandar6.avif",
          "/matrimonial_estandar/matrimonial_estandar7.avif"
        ],
        price: "S/ 110",
        features: [
          "Up to 2 guests",
          "18 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 5,
        name: "Executive Queen Room",
        description: "Exclusive room with a Queen-size bed, private bathroom, and a privileged panoramic view of San Antonio Square, the Church, and the volcanoes. Designed to provide greater comfort, it is ideal for business or leisure travelers seeking a superior lodging experience.",
        image: "/queen_ejecutiva/queen_ejecutiva1.avif",
        images: [
          "/queen_ejecutiva/queen_ejecutiva1.avif",
          "/queen_ejecutiva/queen_ejecutiva2.avif",
          "/queen_ejecutiva/queen_ejecutiva3.avif",
          "/queen_ejecutiva/queen_ejecutiva4.avif",
          "/queen_ejecutiva/queen_ejecutiva5.avif",
          "/queen_ejecutiva/queen_ejecutiva6.avif"
        ],
        price: "S/ 130",
        features: [
          "Up to 2 guests",
          "21 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Minibar",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Desk and work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 6,
        name: "Superior Matrimonial Room",
        description: "Spacious and comfortable room located on the 4th floor, featuring a Queen-size bed, private bathroom, and a small balcony with a privileged view of the volcanoes and San Antonio Square. Ideal for guests seeking greater comfort, tranquility, and a superior lodging experience.",
        image: "/matrimonial_superior/matrimonial_superior1.avif",
        images: [
          "/matrimonial_superior/matrimonial_superior1.avif",
          "/matrimonial_superior/matrimonial_superior2.avif",
          "/matrimonial_superior/matrimonial_superior3.avif",
          "/matrimonial_superior/matrimonial_superior4.avif",
          "/matrimonial_superior/matrimonial_superior5.avif",
          "/matrimonial_superior/matrimonial_superior6.avif"
        ],
        price: "S/ 120",
        features: [
          "Up to 2 guests",
          "18 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Minibar",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Desk and work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 2,
        name: "Superior Single Room",
        description: "Enjoy a spacious and comfortable room with a private bathroom and a full-size (2 plaza) bed. Designed to provide greater comfort, it is ideal for business or leisure travelers seeking a pleasant stay and excellent rest.",
        image: "/individual_superior/individual_superior1.avif",
        images: [
          "/individual_superior/individual_superior1.avif",
          "/individual_superior/individual_superior2.avif",
          "/individual_superior/individual_superior3.avif"
        ],
        price: "S/ 80",
        features: [
          "1 guest",
          "16 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Desk and work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 7,
        name: "Superior Twin Room",
        description: "Spacious and comfortable room with a private bathroom, equipped with one double matrimonial bed and one twin-size (1½ plaza) bed. Ideal for families, travelers or coworkers. It can accommodate up to 2 adults and 1 child under 5 years old using existing beds.",
        image: "/doble_superior/doble_superior1.avif",
        images: [
          "/doble_superior/doble_superior1.avif",
          "/doble_superior/doble_superior2.avif",
          "/doble_superior/doble_superior3.avif",
          "/doble_superior/doble_superior4.avif",
          "/doble_superior/doble_superior5.avif"
        ],
        price: "S/ 120",
        features: [
          "Up to 2 guests + 1 child under 5",
          "24 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 8,
        name: "Family Room",
        description: "Spacious and comfortable room with a private bathroom, equipped with one double matrimonial bed and one twin-size (1½ plaza) bed. Ideal for families or groups of travelers seeking comfort and spaciousness.",
        image: "/familiar/familiar1.avif",
        images: [
          "/familiar/familiar1.avif",
          "/familiar/familiar2.avif",
          "/familiar/familiar3.avif",
          "/familiar/familiar4.avif"
        ],
        price: "S/ 130",
        features: [
          "Up to 3 guests",
          "24 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 10,
        name: "Economy Triple Room",
        description: "Cozy and functional room with three twin-size (1½ plaza) beds and a compact private bathroom. Ideal for families or groups of travelers seeking comfort and an excellent quality-price ratio.",
        image: "/triple_economica/triple_economica1.avif",
        images: [
          "/triple_economica/triple_economica1.avif"
        ],
        price: "S/ 120",
        features: [
          "Up to 3 guests",
          "21 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 9,
        name: "Standard Triple Room",
        description: "Spacious and comfortable room with a private bathroom, equipped with three twin-size (1½ plaza) beds and an exterior window that provides natural lighting and ventilation. Ideal for families or groups of travelers.",
        image: "/triple_estandar/triple_estandar1.avif",
        images: [
          "/triple_estandar/triple_estandar1.avif",
          "/triple_estandar/triple_estandar2.avif"
        ],
        price: "S/ 130",
        features: [
          "Up to 3 guests",
          "25 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 11,
        name: "Economy Quadruple Room",
        description: "Comfortable and functional room with a private bathroom, equipped with 1 double matrimonial bed + 2 twin-size (1½ plaza) beds. Ideal for families or groups of travelers seeking comfort and a practical layout.",
        image: "/cuadruple_estandar/cuadruple_estandar1.avif",
        images: [
          "/cuadruple_estandar/cuadruple_estandar1.avif",
          "/cuadruple_estandar/cuadruple_estandar2.avif",
          "/cuadruple_estandar/cuadruple_estandar3.avif"
        ],
        price: "S/ 160",
        features: [
          "Up to 4 guests",
          "29 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "Heating",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 1,
        name: "Basic Single Room",
        description: "Cozy room located on the 4th floor, with a private bathroom, twin-size (1½ plaza) bed and interior view. Its compact and functional design provides the necessary comfort for a pleasant stay, ideal for business or leisure travelers seeking an excellent quality-price ratio.",
        image: "/individual_basica/individual_basica1.avif",
        images: [
          "/individual_basica/individual_basica1.avif",
          "/individual_basica/individual_basica2.avif",
          "/individual_basica/individual_basica3.avif"
        ],
        price: "S/ 65",
        features: [
          "1 guest",
          "11 m²",
          "Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "Breakfast included"
        ]
      },
      {
        id: 3,
        name: "Economy Matrimonial Room",
        description: "Comfortable room with a private bathroom, equipped with a double matrimonial bed and an interior view. Ideal for couples or friends looking for a comfortable and functional stay in a cozy atmosphere, perfect for enjoying a restful sleep and an excellent quality-price ratio.",
        image: "/matrimonial_economica/matrimonial_economica1.avif",
        images: [
          "/matrimonial_economica/matrimonial_economica1.avif",
          "/matrimonial_economica/matrimonial_economica2.avif",
          "/matrimonial_economica/matrimonial_economica3.avif"
        ],
        price: "S/ 88",
        features: [
          "Up to 2 guests",
          "16 m²",
          "32\" Smart TV with cable channels",
          "High-speed Wi-Fi",
          "Complimentary amenities",
          "Hairdryer",
          "24-hour hot water",
          "Work table",
          "Closet",
          "220V bedside power outlets",
          "American breakfast included"
        ]
      }
    ]
  }
};

const genericImages = [
  "/about1.avif",
  "/about2.avif",
  "/sala_reuniones/sala_reuniones1.avif",
  "/arequipa_centro_historico.avif"
];

function RoomCard({ room, data, hoveredId, setHoveredId }: any) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = room.images && room.images.length > 0 ? room.images : [room.image, ...genericImages];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hoveredId === room.id) {
      timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1500);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [images.length, hoveredId, room.id]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage(index);
  };

  return (
    <div 
      className="group cursor-pointer flex flex-col h-full transition-all duration-500 border-b border-gray-200 pb-10"
      onMouseEnter={() => setHoveredId(room.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative h-80 mb-6 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 h-full ease-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((img: string, idx: number) => (
             <img key={idx} src={img} alt={`${room.name} ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover shrink-0" />
          ))}
        </div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 z-20 bg-brand-text-muted px-4 py-2 flex flex-col items-center border-b-4 border-brand-primary shadow-md">
          <p className="text-[10px] uppercase tracking-widest text-white mb-1.5">{data.from}</p>
          <div className="w-full h-px bg-brand-primary mb-1.5"></div>
          <p className="text-2xl font-serif text-white">{room.price}</p>
        </div>

        {/* Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={(e) => goToImage(e, idx)}
              className={clsx(
                "h-1.5 rounded-full transition-all",
                currentImage === idx ? "bg-white w-4" : "bg-white/50 w-1.5 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold font-serif text-brand-text mb-3 group-hover:text-brand-primary-dark transition-colors uppercase">
        {room.name}
      </h3>
      
      <p className="text-brand-text-muted text-sm leading-relaxed mb-6 line-clamp-2">
        {room.description}
      </p>

      <div className="space-y-3 mb-6 flex-1">
        {room.features.map((feature: string, idx: number) => (
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
        onClick={() => {
          fetch('/api/track-click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomId: room.id, roomName: room.name })
          }).catch(err => console.error('Failed to track click:', err));
        }}
        className={clsx(
          "inline-flex items-center justify-center gap-2 w-full text-xs font-bold uppercase tracking-widest transition-all px-6 py-4 mt-auto",
          "bg-brand-primary hover:bg-brand-primary-dark text-white shadow-sm hover:shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary-dark/20 duration-300"
        )}
      >
        <FaWhatsapp className={clsx(
          "w-5 h-5 transition-transform",
          hoveredId === room.id ? "scale-110" : ""
        )} />
        {data.button}
      </a>
    </div>
  );
}

interface RoomsPreviewProps {
  lang?: 'es' | 'en';
  showAll?: boolean;
}

export default function RoomsPreview({ lang = 'es', showAll = false }: RoomsPreviewProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const data = content[lang];
  
  const displayedRooms = showAll ? data.rooms : data.rooms.slice(0, 3);

  return (
    <section id="habitaciones" className="pt-16 pb-12 md:pt-20 md:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-brand-primary tracking-[0.2em] font-bold uppercase text-xs mb-4 block">{data.badge}</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4">{data.title}</h2>
          <div className="text-brand-text-muted max-w-4xl mx-auto text-base leading-relaxed space-y-4">
            {Array.isArray(data.desc) ? (
              data.desc.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{data.desc}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {displayedRooms.map((room) => (
            <RoomCard 
              key={room.id} 
              room={room} 
              data={data} 
              hoveredId={hoveredId} 
              setHoveredId={setHoveredId} 
            />
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <a href={lang === 'en' ? "/en/habitaciones" : "/habitaciones"} className="inline-block border-2 border-brand-primary-dark text-brand-primary-dark hover:bg-brand-primary hover:text-white transition-colors px-8 py-3 uppercase tracking-widest text-sm font-bold">
              {lang === 'en' ? "View all rooms" : "Ver todas las habitaciones"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
