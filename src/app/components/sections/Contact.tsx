import { motion } from 'motion/react';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  transportType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    transportType: '',
    message: '',
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Ajoute ici ta logique d'envoi (console.log pour le moment)
    console.log('Formulaire soumis :', formData);
    alert('Merci ! Votre demande a bien été envoyée. Nous vous contacterons rapidement.');
    
    // Réinitialiser le formulaire
    setFormData({ name: '', phone: '', transportType: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#D6C3A3]">
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2
            className="text-5xl md:text-6xl text-[#0F2A1D] tracking-tighter"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Demandez votre devis
          </h2>
          <p className="text-[#3B2F2F]/80 text-lg max-w-xl mx-auto">
            Remplissez le formulaire et recevez une réponse rapide et personnalisée
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
          >
            <div>
              <label className="block text-[#3B2F2F] mb-2 font-medium">Nom complet</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F1E8] border border-[#D6C3A3] 
                           focus:border-[#F2A900] focus:ring-2 focus:ring-[#F2A900]/20 
                           transition-all text-[#0F2A1D] placeholder:text-[#3B2F2F]/50"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-[#3B2F2F] mb-2 font-medium">Téléphone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F1E8] border border-[#D6C3A3] 
                           focus:border-[#F2A900] focus:ring-2 focus:ring-[#F2A900]/20 
                           transition-all text-[#0F2A1D] placeholder:text-[#3B2F2F]/50"
                placeholder="+241 XX XX XX XX"
              />
            </div>

            <div>
              <label className="block text-[#3B2F2F] mb-2 font-medium">Type de transport</label>
              <select
                required
                value={formData.transportType}
                onChange={(e) => setFormData({ ...formData, transportType: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F1E8] border border-[#D6C3A3] 
                           focus:border-[#F2A900] focus:ring-2 focus:ring-[#F2A900]/20 
                           transition-all text-[#0F2A1D]"
              >
                <option value="">Sélectionnez un service</option>
                <option value="grumes">Transport de grumes</option>
                <option value="minerais">Transport de minerais</option>
                <option value="sable">Sable & graviers</option>
                <option value="btp">Matériaux BTP</option>
                <option value="engins">Transport d'engins</option>
                <option value="logistique">Logistique chantier</option>
              </select>
            </div>

            <div>
              <label className="block text-[#3B2F2F] mb-2 font-medium">Message / Détails de votre besoin</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F1E8] border border-[#D6C3A3] 
                           focus:border-[#F2A900] focus:ring-2 focus:ring-[#F2A900]/20 
                           transition-all text-[#0F2A1D] resize-none placeholder:text-[#3B2F2F]/50"
                placeholder="Décrivez vos besoins (volume, trajet, délai souhaité...)"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#F2A900] text-[#0F2A1D] py-4 rounded-full text-lg font-medium 
                         hover:bg-[#D69400] transition-all shadow-lg shadow-[#F2A900]/30 mt-4"
            >
              Obtenir mon devis gratuit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}