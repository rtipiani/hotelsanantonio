import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const slidesData = {
  es: [
    {
      id: 1,
      image: "/sliders/slide6.avif",
      subtitle: "A 10 min de la Plaza de Armas",
      title: "Tu Refugio Urbano",
      description: "Tranquilidad a pasos del centro. El equilibrio perfecto para tus viajes corporativos o familiares en Miraflores, Arequipa.",
      buttonText: "Descubrir Habitaciones",
      buttonLink: "/habitaciones"
    },
    {
      id: 2,
      image: "/sliders/slide2.avif",
      subtitle: "Vistas Inolvidables",
      title: "Frente a San Antonio",
      description: "Despierta con vistas panorámicas directas al templo histórico y a las imponentes montañas de Arequipa.",
      buttonText: "Ver Vistas Únicas",
      buttonLink: "/habitaciones"
    },
    {
      id: 3,
      image: "/sliders/slide5.avif",
      subtitle: "Infraestructura de Primer Nivel",
      title: "Enfoque Corporativo",
      description: "Sala de reuniones equipada con TV de 80\", conectividad total y tarifas diseñadas a la medida de tu empresa.",
      buttonText: "Ver Instalaciones",
      buttonLink: "/servicios"
    },
    {
      id: 4,
      image: "/sliders/slide7.avif",
      subtitle: "Detalles que Enamoran",
      title: "Diseño y Confort",
      description: "Cada rincón de nuestro hotel está pensado para ofrecerte la mejor experiencia y calidez en tu estadía.",
      buttonText: "Ver Galería",
      buttonLink: "/galeria"
    },
    {
      id: 5,
      image: "/sliders/slide1.avif",
      subtitle: "Descanso Garantizado",
      title: "Confort y Elegancia",
      description: "Habitaciones modernas, amplias y diseñadas para un descanso profundo y reparador.",
      buttonText: "Reservar Ahora",
      buttonLink: "/habitaciones"
    },
    {
      id: 6,
      image: "/sliders/slide3.avif",
      subtitle: "Experiencia Única",
      title: "Momentos Especiales",
      description: "Disfruta de espacios diseñados para crear recuerdos inolvidables con nosotros en cada visita.",
      buttonText: "Descubrir Más",
      buttonLink: "/galeria"
    },
    {
      id: 7,
      image: "/sliders/slide4.avif",
      subtitle: "Atención Personalizada",
      title: "Servicio de Primera",
      description: "Nuestro equipo está siempre dispuesto a hacer de tu estadía una experiencia verdaderamente excepcional.",
      buttonText: "Contactar",
      buttonLink: "/#contacto"
    }
  ],
  en: [
    {
      id: 1,
      image: "/sliders/slide6.avif",
      subtitle: "10 mins from the Main Square",
      title: "Your Urban Haven",
      description: "Tranquility steps away from downtown. The perfect balance for your corporate or family trips in Miraflores, Arequipa.",
      buttonText: "Discover Rooms",
      buttonLink: "/en/habitaciones"
    },
    {
      id: 2,
      image: "/sliders/slide2.avif",
      subtitle: "Unforgettable Views",
      title: "Facing San Antonio",
      description: "Wake up to direct panoramic views of the historic temple and the imposing mountains of Arequipa.",
      buttonText: "See Unique Views",
      buttonLink: "/en/habitaciones"
    },
    {
      id: 3,
      image: "/sliders/slide5.avif",
      subtitle: "Top-Tier Infrastructure",
      title: "Corporate Focus",
      description: "Meeting room equipped with an 80\" TV, full connectivity, and rates tailored to your company's needs.",
      buttonText: "View Facilities",
      buttonLink: "/en/servicios"
    },
    {
      id: 4,
      image: "/sliders/slide7.avif",
      subtitle: "Details to Fall in Love With",
      title: "Design and Comfort",
      description: "Every corner of our hotel is designed to offer you the best experience and warmth during your stay.",
      buttonText: "View Gallery",
      buttonLink: "/en/galeria"
    },
    {
      id: 5,
      image: "/sliders/slide3.avif",
      subtitle: "Guaranteed Rest",
      title: "Comfort and Elegance",
      description: "Modern, spacious rooms designed for a deep and restful sleep.",
      buttonText: "Book Now",
      buttonLink: "/en/habitaciones"
    },
    {
      id: 6,
      image: "/sliders/slide1.avif",
      subtitle: "Unique Experience",
      title: "Special Moments",
      description: "Enjoy spaces designed to create unforgettable memories with us during every single visit.",
      buttonText: "Discover More",
      buttonLink: "/en/galeria"
    },
    {
      id: 7,
      image: "/sliders/slide4.avif",
      subtitle: "Personalized Care",
      title: "First-Class Service",
      description: "Our team is always ready to make your stay a truly exceptional and memorable experience.",
      buttonText: "Contact Us",
      buttonLink: "/en/#contacto"
    }
  ]
};

interface HeroSliderProps {
  lang?: 'es' | 'en';
}

export default function HeroSlider({ lang = 'es' }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = slidesData[lang];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-text">
      {/* Background Images Crossfade */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center text-center px-6 max-w-5xl mx-auto pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-white/90 tracking-[0.4em] uppercase text-xs font-semibold mb-8 drop-shadow-md">
              {slides[current].subtitle}
            </p>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1] drop-shadow-lg">
              {slides[current].title}
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {slides[current].description}
            </p>

            <div>
              <a
                href={slides[current].buttonLink}
                className="inline-block bg-brand-primary text-white hover:bg-brand-primary-dark px-10 py-4 uppercase text-sm tracking-widest font-bold transition-all hover:scale-105 shadow-xl shadow-brand-primary/30"
              >
                {slides[current].buttonText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-20 bottom-12 left-0 right-0 flex justify-center items-center gap-12">
        <button
          onClick={prevSlide}
          className="text-white/70 hover:text-white transition-colors"
          aria-label={lang === 'es' ? "Anterior" : "Previous"}
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
        </button>

        <div className="flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(index);
              }}
              className={clsx(
                "h-[3px] transition-all duration-500",
                current === index ? "w-8 bg-brand-primary" : "w-4 bg-white/40 hover:bg-white"
              )}
              aria-label={lang === 'es' ? `Ir a slide ${index + 1}` : `Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white/70 hover:text-white transition-colors"
          aria-label={lang === 'es' ? "Siguiente" : "Next"}
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

