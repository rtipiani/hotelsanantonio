import { MapPin, Navigation } from 'lucide-react';
import { FaWalking, FaPlane, FaBus } from 'react-icons/fa';

interface LocationProps {
  lang?: 'es' | 'en';
}

const translations = {
  es: {
    badge: "📍 UBICACIÓN",
    title: "En el corazón de la Ciudad Blanca de Arequipa",
    desc: "Hotel Plaza San Antonio ★★★ – Arequipa se encuentra frente a la histórica Plaza e Iglesia San Antonio, en una zona tranquila, segura y de fácil acceso. Su excelente ubicación permite llegar rápidamente a los principales atractivos turísticos, centros comerciales, instituciones y zonas empresariales de la ciudad.",
    subtitle: "Distancias de referencia",
    d1: "Frente a la Plaza e Iglesia San Antonio.",
    d2: "A solo 10 minutos a pie de la Plaza de Armas y del Centro Histórico de Arequipa.",
    d3: "A 15–20 minutos en automóvil del Aeropuerto Internacional Alfredo Rodríguez Ballón.",
    d4: "A 10–15 minutos en automóvil del Terminal Terrestre de Arequipa.",
    mapTitle: "Ubicación del Hotel Plaza San Antonio"
  },
  en: {
    badge: "📍 LOCATION",
    title: "In the heart of the White City of Arequipa",
    desc: "Hotel Plaza San Antonio ★★★ – Arequipa is located directly across from the historic Plaza and Church of San Antonio, in a calm, secure, and easily accessible area. Its excellent location allows quick access to the city's main tourist attractions, shopping centers, institutions, and business zones.",
    subtitle: "Reference distances",
    d1: "Directly across from San Antonio Plaza and Church.",
    d2: "Just a 10-minute walk from the Plaza de Armas and Arequipa's Historic Center.",
    d3: "A 15–20 minute drive from Alfredo Rodríguez Ballón International Airport.",
    d4: "A 10–15 minute drive from Arequipa's Terrestrial Terminal.",
    mapTitle: "Location of Hotel Plaza San Antonio"
  }
};

export default function Location({ lang = 'es' }: LocationProps) {
  const t = translations[lang];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-brand-primary-dark tracking-[0.2em] uppercase text-xs font-bold mb-4">{t.badge}</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">
            {t.title}
          </h2>
          <p className="text-brand-text-muted mb-8 text-base leading-relaxed">
            {t.desc}
          </p>
          
          <h3 className="font-serif font-bold text-lg text-brand-text mb-6">{t.subtitle}</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary-dark">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed font-medium text-sm">{t.d1}</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary-dark">
                <FaWalking className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">{t.d2}</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary-dark">
                <FaPlane className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">{t.d3}</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary-dark">
                <FaBus className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">{t.d4}</p>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.590544543668!2d-71.53055242306255!3d-16.394807497604372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a52d81922ed%3A0xaf3e95829184dceb!2sHotel%20Plaza%20San%20Antonio%20-%20Arequipa!5e0!3m2!1ses-419!2spe!4v1785456714042!5m2!1ses-419!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title={t.mapTitle}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

