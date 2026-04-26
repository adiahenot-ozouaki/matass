import { motion } from 'motion/react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 bg-linear-to-b from-[#0F2A1D] to-[#1a3d2e]"
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-130 lg:h-140"   // hauteur plus cohérente
          >
            <img
              src="https://images.unsplash.com/photo-1770430724878-ef327337a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwc2FmZXR5JTIwaGVsbWV0fGVufDF8fHx8MTc3NjIxMzc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Matass Team"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0F2A1D]/70 via-[#0F2A1D]/30 to-transparent" />
          </motion.div>

          {/* Texte à droite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2
              className="text-5xl md:text-6xl text-white tracking-tighter leading-tight"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              Expertise Gabonaise,
              <br />
              <span className="text-[#F2A900]">Standards Internationaux</span>
            </h2>

            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                Matass est une entreprise gabonaise spécialisée dans le transport lourd et la logistique
                industrielle. Depuis plus de 10 ans, nous accompagnons les entreprises du secteur forestier, 
                minier et de la construction avec des solutions fiables et performantes.
              </p>
              <p>
                Notre engagement : offrir un service de qualité supérieure, respecter les délais, garantir la 
                sécurité des marchandises et assurer la satisfaction totale de nos clients à travers tout le Gabon.
              </p>
            </div>

            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#F2A900] text-[#0F2A1D] px-9 py-4 rounded-full text-lg font-medium 
                           hover:bg-[#D69400] transition-all shadow-lg shadow-[#F2A900]/30 active:scale-95"
              >
                En savoir plus sur nous
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}