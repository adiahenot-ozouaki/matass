import { motion } from 'motion/react';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center space-y-2"
    >
      <div className="text-5xl md:text-6xl text-[#F2A900] tracking-tighter" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
        {number}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </motion.div>
  );
}
