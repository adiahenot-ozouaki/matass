import { motion } from 'motion/react';
import { StatCard } from '../StatCard';

export default function Stats() {
  return (
    <section className="py-20 bg-[#3B2F2F]">
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCard 
            number="10+" 
            label="Années d'expérience" 
            delay={0.1} 
          />
          <StatCard 
            number="500+" 
            label="Missions réussies" 
            delay={0.2} 
          />
          <StatCard 
            number="100%" 
            label="Clients satisfaits" 
            delay={0.3} 
          />
          <StatCard 
            number="24/7" 
            label="Disponibilité" 
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
}