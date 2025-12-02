"use client";

import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Mail, Phone, Github, Linkedin, Instagram, Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const email = "aby.pious.in@gmail.com";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 3000);
    }
  }

  return (
    <PageTemplate title="Contact Me" helpText="Click icons or send a message.">
      {/* wrapper to center the card inside the page */}
      <div className="w-full flex justify-center items-center min-h-[70vh]">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01, boxShadow: "0 0 25px #ef414960" }}
          transition={{ duration: 0.4 }}
          className="border border-[#ef41494f] bg-[#0d0d0d] rounded-3xl shadow-2xl p-12
                     w-[85vw] max-w-[1200px] h-[450px] grid grid-cols-2 gap-8 mt-18"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-10 text-left">
            <h2 className="text-2xl font-semibold">Let's build something meaningful.</h2>

            {/* Contact Info */}
            <div className="space-y-4 text-[18px] opacity-80 ml-2">
              <div className="flex items-center gap-3 hover:opacity-100 hover:scale-[1.02] transition-all">
                <Mail className="text-[#ef4149]" />
                <span>{email}</span>
              </div>

              <div className="flex items-center gap-3 hover:opacity-100 hover:scale-[1.02] transition-all">
                <Phone className="text-[#ef4149]" />
                <span>+91 73564 95708</span>
              </div>

              <div className="flex items-center gap-3 hover:opacity-100 hover:scale-[1.02] transition-all">
                <span className="text-[#ef4149] text-xl">📍</span>
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 ml-2">
              {[
                { icon: <Instagram size={26} />, href: "https://www.instagram.com/mr.pious_/" },
                { icon: <Linkedin size={26} />, href: "https://linkedin.com/in/abypious" },
                { icon: <Github size={26} />, href: "https://github.comhttps://github.com/abypious" },
                { icon: <Mail size={26} />, href: `mailto:${email}` },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="w-14 h-14 flex items-center justify-center border border-[#ef41494f]
                             rounded-full transition-all duration-300
                             hover:scale-[1.3] hover:bg-[#ef4149]
                             hover:shadow-[0_0_20px_#ef4149]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-[#ef41494f] outline-none 
                         focus:border-[#ef4149] focus:shadow-[0_0_15px_#ef41496b] transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-[#ef41494f] outline-none 
                         focus:border-[#ef4149] focus:shadow-[0_0_15px_#ef41496b] transition-all duration-300"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-[#ef41494f] outline-none resize-none
                         focus:border-[#ef4149] focus:shadow-[0_0_15px_#ef41496b] transition-all duration-300"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#ef4149] hover:bg-[#c92c34] 
                         cursor-pointer transition font-semibold flex items-center justify-center gap-2
                         hover:shadow-[0_0_20px_#ef4149] active:scale-95 duration-300"
            >
              {loading ? "Sending..." : <><Send size={18} /> Send</>}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 flex items-center justify-center gap-2 font-semibold"
              >
                <Check size={18} /> Message Sent Successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </PageTemplate>
  );
}
