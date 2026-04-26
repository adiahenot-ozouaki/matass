import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760568787655-247d67618f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRydWNrJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMG1pbmluZ3xlbnwxfHx8fDE3NzYyMTM3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Transport Lourd"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay - Version Tailwind v4 */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0F2A1D]/80 via-[#0F2A1D]/60 to-[#0F2A1D]" />

        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95]"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Transport lourd &<br />
            <span className="text-[#F2A900]">logistique industrielle</span>
            <br />
            au Gabon
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Grumes, minerais, sable, graviers, matériaux BTP.
            <br />
            <span className="text-[#F2A900]">Fiabilité. Puissance. Précision.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F2A900] text-[#0F2A1D] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D69400] transition-all shadow-lg shadow-[#F2A900]/20 active:scale-95"
            >
              Demander un devis
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:border-[#F2A900] hover:text-[#F2A900] transition-all backdrop-blur-sm active:scale-95"
            >
              Voir nos services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1 }, 
          y: { repeat: Infinity, duration: 2 } 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#F2A900] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}