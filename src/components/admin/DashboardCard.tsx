import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  delay?: number;
}

export const DashboardCard = ({ title, value, icon: Icon, trend, trendValue, delay = 0 }: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 pointer-events-none">
        <Icon size={120} />
      </div>
      
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-gray-500 dark:text-zinc-400 text-xs font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white">{value}</h3>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gray-50 dark:bg-zinc-800/50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
          <Icon size={20} />
        </div>
      </div>

      {(trend && trendValue) && (
        <div className="mt-4 flex items-center gap-2 relative z-10">
          <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-md ${
            trend === 'up' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 
            trend === 'down' ? 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400' :
            'bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-400'
          }`}>
            {trend === 'up' && <ArrowUpRight size={14} className="mr-1" />}
            {trend === 'down' && <ArrowDownRight size={14} className="mr-1" />}
            {trendValue}
          </div>
          <span className="text-xs text-gray-400 dark:text-zinc-500">vs mes anterior</span>
        </div>
      )}
    </motion.div>
  );
};
