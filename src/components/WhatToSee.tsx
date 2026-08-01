import { motion } from 'framer-motion';

interface WhatToSeeProps {
  lang?: 'es' | 'en';
}

const translations = {
  es: {
    titlePrefix: "Qué ver en ",
    city: "Arequipa",
    desc: "Llena tu viaje de aventuras y experiencias inolvidables. Senderismo, escalada, actividades de montaña, tours gastronómicos y culturales y todo cuanto busques en Arequipa lo encontrarás.",
    btn: "Descubre Más",
    href: "/que-ver"
  },
  en: {
    titlePrefix: "What to see in ",
    city: "Arequipa",
    desc: "Fill your trip with adventures and unforgettable experiences. Hiking, climbing, mountain activities, gastronomic and cultural tours—whatever you seek in Arequipa, you will find it.",
    btn: "Discover More",
    href: "/en/que-ver"
  }
};

export default function WhatToSee({ lang = 'es' }: WhatToSeeProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-cinzel text-4xl md:text-5xl text-brand-text font-bold uppercase tracking-wider leading-tight">
              {t.titlePrefix}<span className="text-brand-primary">{t.city}</span>
            </h2>
            <div className="w-20 h-1 bg-brand-primary"></div>
            <p className="text-lg text-brand-text/80 leading-relaxed font-light">
              {t.desc}
            </p>
            <div className="pt-4">
              <a 
                href={t.href}
                className="inline-block cursor-pointer bg-brand-primary text-white px-8 py-4 rounded uppercase tracking-widest text-sm font-bold hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.btn}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              <img 
                src="/arequipa_misti.avif" 
                alt="Volcán Misti Arequipa" 
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover transform translate-y-8 md:translate-y-12 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/arequipa_plaza.avif" 
                alt="Plaza de Armas Arequipa" 
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/10 rounded-full blur-3xl scale-150"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

