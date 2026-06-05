"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Emulated API latency interface layer
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 border-t border-neutral-900 bg-neutral-950/20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">
            06. COMMUNICATIONS
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6">
            Initiate Transmission
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-md mb-8">
            Submit contract pipelines, engineering requirements, or system
            deployment requests directly into the network architecture using the
            secure configuration panel.
          </p>
          <div className="space-y-4 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-neutral-600 block uppercase tracking-wider">
                [Secure Endpoint]
              </span>
              <span className="text-white">dev.lingaraj@proton.me</span>
            </div>
            <div>
              <span className="text-neutral-600 block uppercase tracking-wider">
                [Availability Node]
              </span>
              <span className="text-white">Active Enterprise Hours</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 bg-black border border-neutral-900 rounded-none px-4 text-xs font-mono text-white focus:outline-none focus:border-neutral-500 placeholder-neutral-700 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-12 bg-black border border-neutral-900 rounded-none px-4 text-xs font-mono text-white focus:outline-none focus:border-neutral-500 placeholder-neutral-700 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject Matrix"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="h-12 bg-black border border-neutral-900 rounded-none px-4 text-xs font-mono text-white focus:outline-none focus:border-neutral-500 placeholder-neutral-700 w-full"
            />
            <textarea
              placeholder="Message payload specifications..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-black border border-neutral-900 rounded-none p-4 text-xs font-mono text-white focus:outline-none focus:border-neutral-500 placeholder-neutral-700 w-full resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full h-12 bg-white hover:bg-neutral-200 transition-colors text-black font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 disabled:bg-neutral-800 disabled:text-neutral-500"
            >
              {status === "sending" ? (
                "Transmitting..."
              ) : (
                <>
                  Transmit Message <Send size={12} />
                </>
              )}
            </button>

            {status === "success" && (
              <div className="p-4 bg-neutral-950 border border-neutral-800 flex items-center gap-3 text-xs font-mono text-white">
                <CheckCircle size={16} className="text-white" /> Transmission
                successfully routed through standard protocols.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-neutral-950 border border-neutral-800 flex items-center gap-3 text-xs font-mono text-neutral-400">
                <AlertCircle size={16} className="text-neutral-500" /> Input
                parameters invalid. Fill all critical data arrays.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
