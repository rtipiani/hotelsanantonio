import { MapPin } from 'lucide-react';

export default function Welcome() {
  return (
    <section className="py-16 md:py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-brand-primary-dark tracking-[0.2em] uppercase text-xs font-bold mb-4">¡Bienvenido a Hotel Plaza San Antonio!</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6 leading-tight">
            Su mejor experiencia en Arequipa comienza aquí.
          </h2>
          <div className="text-brand-text-muted space-y-4 text-base leading-relaxed">
            <p>
              Descubra una experiencia de alojamiento única en la Ciudad Blanca. Combinamos tradición, hospitalidad y confort, ofreciendo la mejor atención para viajeros corporativos, turistas y familias.
            </p>
            <p>
              Ubicados frente a la histórica Plaza San Antonio, en una zona tranquila, estamos a solo 10 minutos de la Plaza de Armas, con rápido acceso a los principales atractivos de Arequipa.
            </p>
            <p>
              Disfrute de nuestro desayuno en la terraza panorámica con vista a los volcanes, y aproveche servicios como WiFi de alta velocidad, gimnasio, sala de reuniones y cochera privada.
            </p>
            <p className="font-semibold text-brand-text">
              Cada detalle está pensado para brindarle una estadía memorable.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
          <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" alt="Hotel Vista Exterior" className="w-full h-80 object-cover shadow-2xl shadow-black/10" />
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80" alt="Hotel Detalles" className="w-full h-80 object-cover shadow-2xl shadow-black/10 mt-12" />
        </div>
      </div>
    </section>
  );
}
