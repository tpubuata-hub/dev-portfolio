import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidChromeBackground from './components/LiquidChromeBackground';
import Vignette from './components/Vignette';

export default function App() {
  return (
    <>
      <LiquidChromeBackground />
      <Vignette />
      <div className="relative z-10 min-h-screen text-white">
        <Header />
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
