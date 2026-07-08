import { MapPin, Mountain, Monitor, Dumbbell } from 'lucide-react';

const content = {
  es: {
    badge: "¿Por qué elegirnos?",
    title: "Tu Refugio Urbano",
    desc: "Nuestra propuesta de 3 estrellas combina un enfoque corporativo y familiar, brindándote servicios e infraestructura superior en una ubicación privilegiada.",
    features: [
      {
        icon: Mountain,
        title: "Vistas Únicas",
        description: "Habitaciones con vistas panorámicas directas al templo histórico de San Antonio y a las montañas de la ciudad."
      },
      {
        icon: Monitor,
        title: "Infraestructura Corporativa",
        description: "Sala de reuniones equipada con TV de 80\" y conectividad HDMI, ideal para empresas con tarifas corporativas."
      },
      {
        icon: MapPin,
        title: "Equilibrio Perfecto",
        description: "Ubicados en Miraflores, un oasis urbano libre del ruido comercial pero a solo 10 minutos a pie de la Plaza de Armas."
      },
      {
        icon: Dumbbell,
        title: "Servicios de Bienestar",
        description: "Comodidades exclusivas en nuestra categoría de 3 estrellas: un gimnasio propio y una terraza panorámica en la azotea."
      }
    ]
  },
  en: {
    badge: "Why Choose Us?",
    title: "Your Urban Haven",
    desc: "Our 3-star proposal combines a corporate and family focus, providing you with superior services and infrastructure in a privileged location.",
    features: [
      {
        icon: Mountain,
        title: "Unique Views",
        description: "Rooms with direct panoramic views of the historic San Antonio temple and the city's mountains."
      },
      {
        icon: Monitor,
        title: "Corporate Infrastructure",
        description: "Meeting room equipped with an 80\" TV and HDMI connectivity, ideal for companies with corporate rates."
      },
      {
        icon: MapPin,
        title: "Perfect Balance",
        description: "Located in Miraflores, an urban oasis free from commercial noise but just a 10-minute walk from the Main Square."
      },
      {
        icon: Dumbbell,
        title: "Wellness Services",
        description: "Exclusive amenities in our 3-star category: our own gym and a panoramic rooftop terrace."
      }
    ]
  }
};

interface FeaturesProps {
  lang?: 'es' | 'en';
}

export default function Features({ lang = 'es' }: FeaturesProps) {
  const data = content[lang];

  return (
    <section id="caracteristicas" className="py-12 md:py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <p className="text-brand-primary tracking-[0.2em] uppercase text-xs font-bold mb-4">{data.badge}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">{data.title}</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-16">
          {data.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300">
                <feature.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-text mb-3">{feature.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
