import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="py-10 border-t border-[#1e293b] text-center text-xs text-slate-500 bg-[#02050c]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Alpha Tech Solution. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="mailto:Alphatechsolutions370@gmail.com" className="hover:text-cyan-400 transition-colors">
              Alphatechsolutions370@gmail.com
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
}