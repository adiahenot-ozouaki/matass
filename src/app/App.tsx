import { Navbar } from './components/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Fleet from './components/sections/Fleet';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="bg-[#0F2A1D] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Fleet />
        <Stats />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}