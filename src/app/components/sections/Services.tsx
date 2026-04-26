import { Truck, Mountain, Construction, Package, Forklift, HardHat } from "lucide-react";
import { motion } from "motion/react";
import { ServiceCard } from "../ServiceCard";

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-24 bg-linear-to-b from-[#0F2A1D] to-[#1a3d2e]"
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2
            className="text-5xl md:text-6xl text-white tracking-tighter"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Nos Services
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Solutions complètes de transport lourd et logistique pour tous vos besoins industriels au Gabon
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Truck}
            image="https://images.unsplash.com/photo-1759240215970-c14e6859ccb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dnaW5nJTIwdHJ1Y2slMjB0aW1iZXIlMjBmb3Jlc3R8ZW58MXx8fHwxNzc2MjEzNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Transport de grumes"
            description="Transport sécurisé de bois et grumes avec camions spécialisés et équipements adaptés aux forêts gabonaises."
            delay={0.1}
          />
          <ServiceCard
            icon={Mountain}
            image="https://images.unsplash.com/photo-1686081590531-b32bf668fbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBkdW1wJTIwdHJ1Y2slMjBvcmV8ZW58MXx8fHwxNzc2MjEzNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Transport de minerais"
            description="Acheminement fiable de minerais avec camions haute capacité et respect des normes de sécurité minière."
            delay={0.2}
          />
          <ServiceCard
            icon={Construction}
            image="https://images.unsplash.com/photo-1681880511033-b9582a379ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYW5kJTIwZ3JhdmVsJTIwbWF0ZXJpYWxzfGVufDF8fHwxNzc2MjEzNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Sable & graviers"
            description="Livraison rapide et en volume de sable, graviers et agrégats pour tous vos projets de construction."
            delay={0.3}
          />
          <ServiceCard
            icon={Package}
            image="https://images.unsplash.com/photo-1760568787655-247d67618f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRydWNrJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMG1pbmluZ3xlbnwxfHx8fDE3NzYyMTM3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Matériaux BTP"
            description="Transport de matériaux de construction, ciment, fer et équipements pour chantiers de toutes tailles."
            delay={0.4}
          />
          <ServiceCard
            icon={Forklift}
            image="https://images.unsplash.com/photo-1759850425285-46f70357253d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGxvYWRlciUyMGV4Y2F2YXRvcnxlbnwxfHx8fHwxNzc2MjEzNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Transport d'engins"
            description="Acheminement sécurisé de machines lourdes et engins de chantier sur porte-engins spécialisés."
            delay={0.5}
          />
          <ServiceCard
            icon={HardHat}
            image="https://images.unsplash.com/photo-1764423023083-1c4c1fc1bdee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbG9naXN0aWNzJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzYyMTM3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Logistique chantier"
            description="Gestion complète de la logistique de chantier avec planification et coordination professionnelle."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}