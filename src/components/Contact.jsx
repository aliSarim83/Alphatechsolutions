import { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("SaaS Development");
  const [message, setMessage] = useState("");

  const email = "Alphatechsolutions370@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nService: ${service}\n\nScope:\n${message}`);
    // Open Gmail web or mail client
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1e293b]/80 bg-[#060c1d] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Reach out directly or send an inquiry to discuss your next system build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Direct Email Card */}
          <div className="md:col-span-2 p-8 bg-[#0b1329] border border-[#1e293b] rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-700/30 flex items-center justify-center text-cyan-400 mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Email</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Send us your project details or inquiries directly:
            </p>

            <div className="mt-6 p-3 bg-[#030712] border border-[#1e293b] rounded-xl flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm text-cyan-300 font-mono select-all">
                {email}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                title="Copy email address"
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white text-sm transition-all shadow-lg shadow-blue-600/20"
            >
              <Send className="w-4 h-4" />
              Email Us Directly
            </a>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-8 bg-[#0b1329] border border-[#1e293b] rounded-2xl">
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Alex Rivers"
                  className="w-full px-4 py-3 bg-[#030712] border border-[#1e293b] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Target Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-[#030712] border border-[#1e293b] rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="SaaS Platform Development">SaaS Development</option>
                  <option value="Web & Interactive Applications">Web Development & Interactive</option>
                  <option value="SEO Architecture">SEO Architecture</option>
                  <option value="SEM & Performance PPC">SEM & Ads</option>
                  <option value="Custom E-Commerce">Custom E-Commerce</option>
                  <option value="General Consultation">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your requirements..."
                  className="w-full px-4 py-3 bg-[#030712] border border-[#1e293b] rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Open Gmail & Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}