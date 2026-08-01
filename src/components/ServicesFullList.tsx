import { 
  Coffee, Wifi, Briefcase, Dumbbell, Users, Sun, Plane, Car, Shirt, 
  Luggage, Clock, Map, CreditCard, Shield, Leaf, HeartHandshake 
} from 'lucide-react';

interface ServicesFullListProps {
  lang?: 'es' | 'en';
}

const servicesData = {
  es: [
    {
      icon: Coffee,
      title: "Servicio de Desayuno",
      description: "Desayuno con productos frescos servido en nuestra terraza panorámica de 6:30 a. m. a 9:30 a. m. Opción de Box Lunch bajo solicitud previa."
    },
    {
      icon: Wifi,
      title: "WiFi de Alta Velocidad",
      description: "Internet inalámbrico de alta velocidad sin costo adicional en habitaciones y áreas comunes, ideal para teletrabajo y reuniones virtuales."
    },
    {
      icon: Briefcase,
      title: "Área de Trabajo",
      description: "Espacios tranquilos y funcionales para huéspedes corporativos. Habitaciones con escritorio o mesa de trabajo."
    },
    {
      icon: Dumbbell,
      title: "Gimnasio",
      description: "Espacio exclusivo equipado para mantener su rutina de ejercicios durante su estadía, disponible todos los días."
    },
    {
      icon: Users,
      title: "Sala de Reuniones",
      description: "Moderna sala con vista a la Plaza, terraza, Smart TV 80\", HDMI y WiFi. Capacidad hasta 35 personas para eventos corporativos."
    },
    {
      icon: Coffee,
      title: "Servicio de Coffee Break",
      description: "Bebidas calientes, infusiones y bocadillos para sus reuniones y capacitaciones (previa reserva y costo adicional)."
    },
    {
      icon: Sun,
      title: "Terraza Panorámica",
      description: "Privilegiada vista a la Plaza e Iglesia San Antonio. Ideal para relajarse, disfrutar del desayuno o trabajar al aire libre."
    },
    {
      icon: Plane,
      title: "Traslado al Aeropuerto",
      description: "Servicio desde/hacia el Aeropuerto Internacional Alfredo Rodríguez Ballón (costo adicional y coordinación anticipada)."
    },
    {
      icon: Car,
      title: "Estacionamiento",
      description: "Estacionamiento exterior gratuito sujeto a disponibilidad, y cochera privada cercana con tarifa preferencial."
    },
    {
      icon: Shirt,
      title: "Lavandería y Planchado",
      description: "Servicio de lavado, secado y planchado (costo adicional). Área de planchado disponible para huéspedes."
    },
    {
      icon: Luggage,
      title: "Guarda Equipaje",
      description: "Servicio seguro y sin costo adicional para guardar su equipaje antes del Check-in o después del Check-out."
    },
    {
      icon: Clock,
      title: "Recepción 24 Horas",
      description: "Asistencia permanente para información, taxis, tours y cualquier requerimiento durante su estadía."
    },
    {
      icon: Map,
      title: "Información Turística",
      description: "Orientación y reserva de tours con agencias formales: Colca, Ruta del Sillar, Santa Catalina y más."
    },
    {
      icon: CreditCard,
      title: "Medios de Pago",
      description: "Aceptamos Visa, Mastercard, Amex, Diners, transferencias, enlaces de pago y efectivo para su comodidad."
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Recepción 24 horas, cámaras de seguridad en áreas comunes y caja de seguridad sujeta a disponibilidad."
    },
    {
      icon: Leaf,
      title: "Compromiso Ambiental",
      description: "Prácticas orientadas al ahorro de agua y energía, promoviendo el cuidado del medio ambiente."
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Personal bilingüe comprometido con brindar un servicio cordial, seguro y memorable a todos nuestros huéspedes."
    }
  ],
  en: [
    {
      icon: Coffee,
      title: "Breakfast Service",
      description: "Fresh breakfast served on our panoramic terrace from 6:30 AM to 9:30 AM. Box Lunch option available upon prior request."
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed wireless internet in rooms and common areas, ideal for remote work and virtual meetings."
    },
    {
      icon: Briefcase,
      title: "Work Area",
      description: "Quiet and functional spaces for corporate guests. Rooms equipped with a desk or work table."
    },
    {
      icon: Dumbbell,
      title: "Gym",
      description: "Exclusive fitness area equipped to maintain your workout routine during your stay, available daily."
    },
    {
      icon: Users,
      title: "Meeting Room",
      description: "Modern room overlooking the Plaza, terrace, 80\" Smart TV, HDMI, and WiFi. Capacity up to 35 people for corporate events."
    },
    {
      icon: Coffee,
      title: "Coffee Break Service",
      description: "Hot beverages, herbal teas, and snacks for your meetings and training sessions (prior reservation and extra cost)."
    },
    {
      icon: Sun,
      title: "Panoramic Terrace",
      description: "Privileged views of San Antonio Plaza and Church. Ideal for relaxing, enjoying breakfast, or working outdoors."
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      description: "Transfer service to/from Alfredo Rodríguez Ballón International Airport (extra cost and advance coordination required)."
    },
    {
      icon: Car,
      title: "Parking",
      description: "Free exterior parking subject to availability, and nearby private garage with preferential rate."
    },
    {
      icon: Shirt,
      title: "Laundry and Ironing",
      description: "Washing, drying, and ironing service (extra cost). Ironing area available for guest use."
    },
    {
      icon: Luggage,
      title: "Luggage Storage",
      description: "Safe and complimentary service to store your luggage before Check-in or after Check-out."
    },
    {
      icon: Clock,
      title: "24-Hour Reception",
      description: "Permanent assistance for information, taxis, tours, and any requirements during your stay."
    },
    {
      icon: Map,
      title: "Tourist Information",
      description: "Guidance and tour booking with certified agencies: Colca Canyon, Sillar Route, Santa Catalina Monastery, and more."
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "We accept Visa, Mastercard, Amex, Diners, bank transfers, payment links, and cash for your convenience."
    },
    {
      icon: Shield,
      title: "Security",
      description: "24-hour reception, security cameras in common areas, and safe deposit boxes subject to availability."
    },
    {
      icon: Leaf,
      title: "Environmental Commitment",
      description: "Practices focused on water and energy conservation, promoting environmental care."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Attention",
      description: "Bilingual staff committed to providing friendly, safe, and memorable service to all our guests."
    }
  ]
};

const pageHeader = {
  es: {
    badge: "Hotel Plaza San Antonio",
    title: "Todo lo que necesita para una estadía cómoda",
    description: "Trabajamos para brindarle una experiencia cómoda, segura y personalizada. Contamos con servicios e instalaciones diseñados para satisfacer las necesidades de viajeros corporativos, turistas, familias y grupos, ofreciendo confort, calidad y una atención cálida durante toda su estancia en Arequipa."
  },
  en: {
    badge: "Hotel Plaza San Antonio",
    title: "Everything you need for a comfortable stay",
    description: "We strive to provide a comfortable, safe, and personalized experience. We offer services and facilities designed to meet the needs of corporate travelers, tourists, families, and groups, delivering comfort, quality, and warm hospitality throughout your stay in Arequipa."
  }
};

export default function ServicesFullList({ lang = 'es' }: ServicesFullListProps) {
  const services = servicesData[lang];
  const t = pageHeader[lang];

  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <p className="text-brand-primary tracking-[0.2em] uppercase text-xs font-bold">{t.badge}</p>
            <div className="text-brand-primary text-sm tracking-[0.3em] font-bold mt-1">★★★</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">{t.title}</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 border border-transparent shadow-sm hover:border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-brand-primary/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-text mb-3">{service.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

