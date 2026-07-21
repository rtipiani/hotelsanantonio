import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, BedDouble, CalendarDays, Settings, Users, Percent, LogOut, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { label: 'Dashboard', icon: Home, href: '/admin' },
    { label: 'Reservas', icon: CalendarDays, href: '/admin/reservas' },
    { label: 'Habitaciones', icon: BedDouble, href: '/admin/habitaciones' },
    { label: 'Huéspedes', icon: Users, href: '/admin/huespedes' },
    { label: 'Promociones', icon: Percent, href: '/admin/promociones' },
    { label: 'Analíticas', icon: BarChart3, href: '/admin/analiticas' },
    { label: 'Configuración', icon: Settings, href: '/admin/configuracion' },
  ];

  return (
    <motion.aside 
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      className="h-screen bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
    >
      {/* Botón de Colapsar */}
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full p-1 shadow-sm text-gray-500 hover:text-brand-primary z-50 transition-colors"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className="p-6 flex items-center justify-center border-b border-gray-100 dark:border-zinc-800/50 min-h-[89px]">
        <img 
          src="/logo_sanAntonio.png" 
          alt="Logo San Antonio" 
          className={`object-contain transition-all duration-300 ${collapsed ? 'h-10 w-10' : 'h-12 w-auto max-w-[180px]'}`} 
        />
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === '/admin'; // En el mundo real se usaría window.location.pathname
          return (
            <a 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                isActive 
                  ? 'bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20' 
                  : 'text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon size={18} className={`shrink-0 ${isActive ? 'text-brand-primary' : 'text-gray-400 group-hover:text-brand-primary'} transition-colors`} />
              {!collapsed && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl">
                  {item.label}
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                </div>
              )}
            </a>
          );
        })}
      </nav>

      {/* Footer del Sidebar */}
      <div className="p-4 border-t border-gray-100 dark:border-zinc-800/50">
        <button className="flex items-center gap-3 px-3 py-3 rounded-lg w-full text-gray-600 dark:text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors group">
          <LogOut size={18} className="shrink-0 group-hover:text-red-500" />
          {!collapsed && <span className="font-medium text-sm">Cerrar Sesión</span>}
        </button>
      </div>
    </motion.aside>
  );
};
