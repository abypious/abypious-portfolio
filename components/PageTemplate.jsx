"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import QuickNav from "./QuickNav";

export default function PageTemplate({ title, children, helpText }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white p-10 flex flex-col gap-1 relative">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold border-l-4 border-red-500 pl-4 uppercase tracking-widest">
        {title}
      </h1>

      {/* CONTENT */}
      <div className="flex justify-center w-full">
        <div className="opacity-90 text-lg max-w-5xl text-center">
          {children}
        </div>
      </div>

      {/* HOME BUTTON */}
      <button
        onClick={() => router.push("/")}
        className="fixed bottom-6 left-6 pointer-events-auto flex items-center gap-2 px-4 py-2 
        bg-[#ef4149] hover:bg-[#c92c35] transition-all shadow-lg 
        rounded-md text-sm font-semibold cursor-pointer"
      >
        <ArrowLeft size={18} /> Home
      </button>

      {/* HELP ICON */}
      {helpText && (
        <motion.div
          className="fixed top-6 right-6 text-[#ef4149] cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <CircleHelp size={35} />

          {/* Tooltip */}
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 mt-2 text-xs bg-black/80 border border-[#ef4149] px-3 py-2 rounded-lg backdrop-blur-md whitespace-nowrap"
            >
              {helpText}
            </motion.div>
          )}
        </motion.div>
      )}

    {/* COPYRIGHT FOOTER */}
      <footer className="fixed bottom-6 w-full text-center opacity-60 text-sm pointer-events-none">
        © {new Date().getFullYear()} Aby Pious — All Rights Reserved.
      </footer>
      <QuickNav />
    </section>
  );
}
