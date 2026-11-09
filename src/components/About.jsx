import { ShieldCheck, Cpu, Zap, Activity } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "99.99%", label: "System Availability", icon: ShieldCheck },
    { title: "<120ms", label: "Edge Response Latency", icon: Zap },
    { title: "Cloud Native", label: "Scalable Architecture", icon: Cpu },
    { title: "100%", label: "Conversion Focused", icon: Activity },
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-[#1e293b]/60 bg-[#060c1d]/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
            About Alpha Tech Solution
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Modern Engineering Meets Targeted Digital Performance
          </h2>
          <p className="mt-6 text-slate-400 leading-relaxed">
            At Alpha Tech Solution, we build scalable software foundations for ambitious businesses. We combine technical backend execution with engaging frontend design, helping companies convert organic search, run targeted marketing campaigns, and serve high-volume traffic without degradation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#0b1329] border border-[#1e293b] rounded-2xl hover:border-cyan-500/40 transition-colors"
              >
                <Icon className="w-5 h-5 text-cyan-400 mb-4" />
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{item.title}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}