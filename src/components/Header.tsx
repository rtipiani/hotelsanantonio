import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface HeaderProps {
  lang?: 'es' | 'en';
}

export default function Header({ lang = 'es' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const getLocalizedUrl = (lang: 'es' | 'en') => {
    if (!currentPath) return lang === 'es' ? '/' : '/en';
    const isEn = currentPath.startsWith('/en');
    const pathWithoutLang = isEn ? currentPath.replace(/^\/en/, '') || '/' : currentPath;
    if (lang === 'es') return pathWithoutLang;
    return `/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  };

  const navLinks = {
    es: [
      { name: 'Inicio', href: '/' },
      { name: 'Habitaciones', href: '/habitaciones' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Sala de Reuniones', href: '/sala-de-reuniones' },
      { name: 'Galería', href: '/galeria' },
      { name: 'Contacto', href: '/contacto' },
    ],
    en: [
      { name: 'Home', href: '/en' },
      { name: 'Rooms', href: '/en/habitaciones' },
      { name: 'Services', href: '/en/servicios' },
      { name: 'Meeting Room', href: '/en/sala-de-reuniones' },
      { name: 'Gallery', href: '/en/galeria' },
      { name: 'Contact', href: '/en/contacto' },
    ]
  };

  const currentLinks = navLinks[lang];
  const t = {
    es: { book: "Reservar", reservations: "Reservas", reception: "Recepción" },
    en: { book: "Book Now", reservations: "Reservations", reception: "Reception" }
  }[lang];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-brand-text text-white/90 py-2 text-[10px] font-bold uppercase tracking-widest hidden md:block w-full z-50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="https://wa.me/51973341847" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2">
              <span>{t.reservations}: +51 973 341 847</span>
            </a>
            <span className="text-white/30">|</span>
            <a href="tel:054220502" className="hover:text-brand-primary transition-colors">
              <span>{t.reception}: (054) 220502</span>
            </a>
          </div>
          <a href="mailto:reservas@hotelplazasanantonio.com.pe" className="hover:text-brand-primary transition-colors">
            reservas@hotelplazasanantonio.com.pe
          </a>
        </div>
      </div>

      <header className={clsx(
        'sticky top-0 w-full z-50 transition-all duration-300 ease-in-out bg-white border-b border-gray-100',
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logo_sanAntonio.png" 
              alt="Hotel Plaza San Antonio" 
              className="h-14 w-auto object-contain"
            />
          </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {currentLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text hover:text-brand-primary transition-colors">
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-8 ml-2">
            <Globe className="w-4 h-4 text-brand-text" />
            <a href={getLocalizedUrl('es')} className="text-[11px] font-extrabold text-brand-primary">ES</a>
            <span className="text-[11px] text-gray-300">/</span>
            <a href={getLocalizedUrl('en')} className="text-[11px] font-bold text-brand-text hover:text-brand-primary transition-colors">EN</a>
          </div>

          <a 
            href="https://wa.me/51973341847?text=Hola,%20deseo%20hacer%20una%20reserva." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ml-4"
          >
            {t.book}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2 text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 xl:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {currentLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest text-brand-text hover:text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-brand-text" />
                <a href={getLocalizedUrl('es')} className="text-sm font-extrabold text-brand-primary">ES</a>
                <a href={getLocalizedUrl('en')} className="text-sm font-bold text-brand-text hover:text-brand-primary">EN</a>
              </div>
              <a 
                href="https://wa.me/51973341847?text=Hola,%20deseo%20hacer%20una%20reserva." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-brand-primary text-white text-center py-4 text-sm font-bold uppercase tracking-widest mt-4"
              >
                {t.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
