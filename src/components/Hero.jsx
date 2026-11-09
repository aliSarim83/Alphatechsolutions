import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 bg-radial-glow overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-8 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-blue-950/40 border border-blue-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Terminal className="w-3.5 h-3.5" />
            Alpha Tech Solution
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
            Engineering Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Web & Cloud Systems
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We architect high-performance SaaS solutions, technical growth engines, and interactive digital experiences built to scale.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 rounded-xl bg-[#0b1329] border border-[#1e293b] hover:border-slate-600 text-slate-300 font-semibold transition-all cursor-pointer"
            >
              About Company
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}