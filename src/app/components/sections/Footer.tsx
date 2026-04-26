import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A1D] border-t border-white/10 py-16">
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo + Description */}
          <div className="md:col-span-5 space-y-5">
            <h3 
              className="text-3xl tracking-tighter"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              <span className="text-white font-bold">MATASS</span>
              <span className="text-[#F2A900] ml-1">Malemba Transport Assistance Solutions & Services</span>
            </h3>
            
            <p className="text-white/60 leading-relaxed max-w-md">
              Votre partenaire de confiance pour le transport lourd et la logistique industrielle au Gabon.
              Fiabilité, puissance et précision depuis plus de 10 ans.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white text-lg font-medium">Contact</h4>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F2A900] mt-0.5" />
                <span>+241 XX XX XX XX</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F2A900] mt-0.5" />
                <span>contact@matass.ga</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F2A900] mt-0.5" />
                <span>Libreville, Gabon</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-white text-lg font-medium">Liens rapides</h4>
            <div className="space-y-3 text-white/70">
              <a href="#services" className="block hover:text-[#F2A900] transition-colors">
                Nos services
              </a>
              <a href="#fleet" className="block hover:text-[#F2A900] transition-colors">
                Notre flotte
              </a>
              <a href="#about" className="block hover:text-[#F2A900] transition-colors">
                À propos de nous
              </a>
              <a href="#contact" className="block hover:text-[#F2A900] transition-colors">
                Demander un devis
              </a>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 Matass. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            Conçu avec excellence au Gabon 
            <span className="text-lg">🇬🇦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}