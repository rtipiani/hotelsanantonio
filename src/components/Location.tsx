import { MapPin, Navigation } from 'lucide-react';
import { FaWalking, FaPlane, FaBus } from 'react-icons/fa';
export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-brand-primary tracking-[0.2em] uppercase text-xs font-bold mb-4">📍 UBICACIÓN</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">
            En el corazón de la Ciudad Blanca de Arequipa
          </h2>
          <p className="text-brand-text-muted mb-8 text-base leading-relaxed">
            Hotel Plaza San Antonio ★★★ – Arequipa se encuentra frente a la histórica Plaza e Iglesia San Antonio, en una zona tranquila, segura y de fácil acceso. Su excelente ubicación permite llegar rápidamente a los principales atractivos turísticos, centros comerciales, instituciones y zonas empresariales de la ciudad.
          </p>
          
          <h3 className="font-serif font-bold text-lg text-brand-text mb-6">Distancias de referencia</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed font-medium text-sm">Frente a la Plaza e Iglesia San Antonio.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                <FaWalking className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">A solo 10 minutos a pie de la Plaza de Armas y del Centro Histórico de Arequipa.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                <FaPlane className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">A 15–20 minutos en automóvil del Aeropuerto Internacional Alfredo Rodríguez Ballón.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                <FaBus className="w-4 h-4" />
              </div>
              <p className="text-brand-text-muted leading-relaxed text-sm">A 10–15 minutos en automóvil del Terminal Terrestre de Arequipa.</p>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.6841261358905!2d-71.53675000000002!3d-16.398869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a66a15324ab%3A0xc6e4cf3dd8f2f2be!2sPlaza%20San%20Antonio%2C%20Arequipa%2004001!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del Hotel Plaza San Antonio"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
