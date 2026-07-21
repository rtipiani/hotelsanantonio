import { MapPin, Phone, Mail, Clock, CalendarDays } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-serif text-brand-text mb-6">Póngase en contacto</h2>
            <p className="text-brand-text-muted leading-relaxed">
              En Hotel Plaza San Antonio ★★★ nos complace brindarle una atención cálida, profesional y personalizada desde el primer momento. Estamos para asistirle con rapidez y eficiencia.
            </p>
          </div>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text mb-2">Dirección</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  Hotel Plaza San Antonio ★★★<br/>
                  Parque San Antonio N.° 200<br/>
                  Distrito de Miraflores<br/>
                  Arequipa – Perú
                </p>
              </div>
            </div>

            {/* Reservations */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text mb-2">Área de Reservas</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-primary block mb-0.5 font-semibold">WhatsApp / Celulares</span>
                    <p className="text-brand-text-muted text-sm">+51 973 341 847 / +51 960 762 350</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-primary block mb-0.5 font-semibold">Correo Electrónico</span>
                    <p className="text-brand-text-muted text-sm">hplazasanantonio@gmail.com<br/>reservas@hotelplazasanantonio.com.pe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text mb-2">Recepción (24 horas)</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-primary block mb-0.5 font-semibold">Teléfono Fijo</span>
                    <p className="text-brand-text-muted text-sm">(054) 220502</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-primary block mb-0.5 font-semibold">Celular / WhatsApp</span>
                    <p className="text-brand-text-muted text-sm">+51 967 454 949</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-primary block mb-0.5 font-semibold">Correo Electrónico</span>
                    <p className="text-brand-text-muted text-sm">hplazasanantonio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Column */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 rounded-lg">
            <h3 className="text-2xl font-serif text-brand-text mb-2">Envíenos un mensaje</h3>
            <p className="text-brand-text-muted text-sm mb-8">
              Complete el siguiente formulario y nos pondremos en contacto con usted a la brevedad.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-brand-text uppercase">Nombres</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow rounded-sm border border-transparent focus:border-brand-primary/30 text-brand-text" 
                    placeholder="Ej. Juan" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-brand-text uppercase">Apellidos</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow rounded-sm border border-transparent focus:border-brand-primary/30 text-brand-text" 
                    placeholder="Ej. Pérez" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-brand-text uppercase">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow rounded-sm border border-transparent focus:border-brand-primary/30 text-brand-text" 
                    placeholder="correo@ejemplo.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-brand-text uppercase">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow rounded-sm border border-transparent focus:border-brand-primary/30 text-brand-text" 
                    placeholder="+51 900 000 000" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest text-brand-text uppercase">Mensaje</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-brand-bg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow rounded-sm border border-transparent focus:border-brand-primary/30 text-brand-text resize-none" 
                  placeholder="¿En qué podemos ayudarle?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-primary text-white font-bold uppercase tracking-[0.2em] text-[11px] py-4 hover:bg-brand-primary/90 transition-colors rounded-sm shadow-md hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
