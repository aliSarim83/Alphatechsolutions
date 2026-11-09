import { Layers } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Layers className="w-4 h-4 text-cyan-400" />
          </span>
          <span>ALPHA <span className="text-cyan-400">TECH</span></span>
        </a>
        <nav className="flex items-center gap-6 sm:gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            Services
          </a>
          <a 
            href="#contact"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-blue-600/20 text-cyan-300 border border-blue-500/40 hover:bg-blue-600/30 transition-all text-xs font-semibold uppercase tracking-wider inline-block"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}