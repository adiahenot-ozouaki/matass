import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, image, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F2A900]/50 transition-all duration-300 cursor-pointer"
    >
      {/* Image Background */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0F2A1D] via-[#0F2A1D]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#F2A900]/10 border border-[#F2A900]/20 group-hover:bg-[#F2A900] transition-colors duration-300">
            <Icon className="w-5 h-5 text-[#F2A900] group-hover:text-[#0F2A1D] transition-colors duration-300" />
          </div>
          <h3 className="text-white text-lg tracking-tight" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            {title}
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-tr from-[#F2A900]/5 to-transparent" />
      </div>
    </motion.div>
  );
}
