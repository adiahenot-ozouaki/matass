import { motion } from "motion/react";
import { Shield, Award, Clock } from "lucide-react";
import { FleetCard } from "../FleetCard";

export default function Fleet() {
  return (
    <section 
      id="fleet" 
      className="py-24 bg-linear-to-b from-[#1a3d2e] to-[#0F2A1D]"
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2
              className="text-5xl md:text-6xl text-white tracking-tighter leading-tight"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              Notre Flotte
              <br />
              <span className="text-[#F2A900]">Moderne & Performante</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              Une flotte complète de camions lourds, semi-remorques et engins spécialisés, entretenus
              régulièrement pour garantir fiabilité et sécurité sur tous vos chantiers au Gabon.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F2A900]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#F2A900]" />
                </div>
                <div>
                  <div className="text-white">Entretien régulier</div>
                  <div className="text-white/60 text-sm">Contrôles techniques systématiques</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F2A900]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#F2A900]" />
                </div>
                <div>
                  <div className="text-white">Normes internationales</div>
                  <div className="text-white/60 text-sm">Conformité et certifications</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F2A900]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#F2A900]" />
                </div>
                <div>
                  <div className="text-white">Disponibilité 24/7</div>
                  <div className="text-white/60 text-sm">Service d'urgence et interventions rapides</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partie droite : Cartes de la flotte */}
          <div className="space-y-6">
            <FleetCard
              image="https://images.unsplash.com/photo-1772852336286-933f5b460e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRyYW5zcG9ydCUyMHRyYWlsZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc2MjEzNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              name="Semi-remorques lourdes"
              capacity="Jusqu'à 40 tonnes"
              availability="Disponible"
              delay={0.2}
            />
            <FleetCard
              image="https://images.unsplash.com/photo-1686081590531-b32bf668fbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBkdW1wJTIwdHJ1Y2slMjBvcmV8ZW58MXx8fHwxNzc2MjEzNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              name="Camions bennes"
              capacity="30-35 tonnes"
              availability="Disponible"
              delay={0.4}
            />
          </div>

        </div>
      </div>
    </section>
  );
}