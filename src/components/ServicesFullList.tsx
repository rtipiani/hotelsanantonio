import { 
  Coffee, Wifi, Briefcase, Dumbbell, Users, Sun, Plane, Car, Shirt, 
  Luggage, Clock, Map, CreditCard, Shield, Leaf, HeartHandshake 
} from 'lucide-react';

const services = [
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
];

export default function ServicesFullList() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-brand-primary tracking-[0.2em] uppercase text-xs font-bold mb-4">Hotel Plaza San Antonio ★★★</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Todo lo que necesita para una estadía cómoda</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            Trabajamos para brindarle una experiencia cómoda, segura y personalizada. Contamos con servicios e instalaciones diseñados para satisfacer las necesidades de viajeros corporativos, turistas, familias y grupos, ofreciendo confort, calidad y una atención cálida durante toda su estancia en Arequipa.
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
