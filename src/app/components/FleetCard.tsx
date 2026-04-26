import { motion } from 'motion/react';

interface FleetCardProps {
  image: string;
  name: string;
  capacity: string;
  availability: string;
  delay?: number;
}

export function FleetCard({ 
  image, 
  name, 
  capacity, 
  availability, 
  delay = 0 
}: FleetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group overflow-hidden rounded-3xl"   // ← mieux que rounded-2xl
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Overlay gradient - Version Tailwind v4 */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0F2A1D] via-[#0F2A1D]/40 to-transparent" />
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3 bg-linear-to-t from-black/80 to-transparent">
        <h3 
          className="text-white text-2xl tracking-tight"
          style={{ fontFamily: 'Inter Tight, sans-serif' }}
        >
          {name}
        </h3>

        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-1.5 rounded-full bg-[#F2A900]/20 border border-[#F2A900]/30 text-[#F2A900] text-sm font-medium backdrop-blur-md">
            {capacity}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-md">
            {availability}
          </span>
        </div>
      </div>
    </motion.div>
  );
}