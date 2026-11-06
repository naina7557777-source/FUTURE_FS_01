import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-apricot focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      {/* Colour behind the glass: without it, backdrop blur has nothing to blur */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-drift rounded-full bg-iris/30 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] animate-drift-slow rounded-full bg-lagoon/20 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/3 h-[28rem] w-[28rem] animate-drift rounded-full bg-apricot/15 blur-[120px]" />
      </div>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
