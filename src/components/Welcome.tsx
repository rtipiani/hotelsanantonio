import { MapPin } from 'lucide-react';

interface WelcomeProps {
  lang?: 'es' | 'en';
}

const translations = {
  es: {
    badge: "¡Bienvenido a Hotel Plaza San Antonio!",
    title: "Su mejor experiencia en Arequipa comienza aquí.",
    p1: "Descubra una nueva forma de hospedarse en la Ciudad Blanca. Hotel Plaza San Antonio es un hotel categoría 3 estrellas que combina tradición, hospitalidad y confort, ofreciendo una experiencia de alojamiento para viajeros corporativos, turistas nacionales e internacionales y familias que buscan calidad, excelente ubicación y una atención personalizada.",
    p2: "Ubicados frente a la tradicional Plaza e Iglesia San Antonio, en una zona tranquila y segura, nos encontramos a solo 10 minutos a pie de la Plaza de Armas de Arequipa, con fácil acceso a los principales atractivos turísticos, culturales y gastronómicos de la ciudad.",
    p3: "Contamos con acogedoras habitaciones Individuales, Superiores, Ejecutivas, Matrimoniales, Dobles y Familiares, varias de ellas con una privilegiada vista a la Plaza e Iglesia San Antonio y a los majestuosos volcanes Misti, Chachani y Pichu Pichu.",
    p4: "Comience cada mañana con un delicioso desayuno en nuestra terraza panorámica, disfrutando de una espectacular vista a la Plaza San Antonio y al paisaje volcánico que distingue a Arequipa.",
    p5: "Además, ponemos a su disposición WiFi de alta velocidad, gimnasio, sala de reuniones, cafetería, recepción las 24 horas, servicio de lavandería, información turística, estacionamiento privado exterior y cochera privada a media cuadra del hotel (sujeto a disponibilidad), todo acompañado de una atención cálida y profesional.",
    p6: "En Hotel Plaza San Antonio, cada detalle está pensado para brindarle una estadía cómoda, segura y memorable."
  },
  en: {
    badge: "Welcome to Hotel Plaza San Antonio!",
    title: "Your best experience in Arequipa starts here.",
    p1: "Discover a new way to stay in the White City. Hotel Plaza San Antonio is a 3-star hotel that combines tradition, hospitality, and comfort, offering an accommodation experience for corporate travelers, domestic and international tourists, and families seeking quality, excellent location, and personalized attention.",
    p2: "Located across from the traditional Plaza and Church of San Antonio, in a quiet and safe area, we are just a 10-minute walk from the Plaza de Armas of Arequipa, with easy access to the main tourist, cultural, and gastronomic attractions of the city.",
    p3: "We offer cozy Single, Superior, Executive, Matrimonial, Twin, and Family rooms, several of them with a privileged view of the Plaza and Church of San Antonio and the majestic volcanoes Misti, Chachani, and Pichu Pichu.",
    p4: "Start each morning with a delicious breakfast on our panoramic terrace, enjoying a spectacular view of Plaza San Antonio and the volcanic landscape that distinguishes Arequipa.",
    p5: "Additionally, we offer high-speed WiFi, a gym, a meeting room, a cafeteria, a 24-hour reception, laundry service, tourist information, private outdoor parking, and a private garage half a block from the hotel (subject to availability), all accompanied by warm and professional service.",
    p6: "At Hotel Plaza San Antonio, every detail is designed to provide you with a comfortable, safe, and memorable stay."
  }
};

export default function Welcome({ lang = 'es' }: WelcomeProps) {
  const t = translations[lang];

  return (
    <section className="py-16 md:py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-brand-primary-dark tracking-[0.2em] uppercase text-xs font-bold mb-4">{t.badge}</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6 leading-tight">
            {t.title}
          </h2>
          <div className="text-brand-text-muted space-y-4 text-base leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
            <p className="font-semibold text-brand-text">{t.p6}</p>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
          <img src="/about1.avif" alt="Hotel Vista Exterior" loading="lazy" decoding="async" className="w-full h-80 object-cover shadow-2xl shadow-black/10" />
          <img src="/about2.avif" alt="Hotel Detalles" loading="lazy" decoding="async" className="w-full h-80 object-cover shadow-2xl shadow-black/10 mt-12" />
        </div>
      </div>
    </section>
  );
}

