import { services } from "../data/servicesData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Our Core Competencies
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            From architecture to visibility, our solutions handle full digital life-cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative p-8 bg-[#0b1329] rounded-2xl border border-[#1e293b] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-700/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-300/80 px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1e293b]/70 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}