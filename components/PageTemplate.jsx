"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import QuickNav from "./QuickNav";
import "@fontsource/poppins/600.css";

export default function PageTemplate({ title, children, helpText }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="
        min-h-screen bg-black text-white 
        px-4 sm:px-6 lg:px-10 
        pt-2 sm:pt-4       
        pb-16 sm:pb-20 lg:pb-24
        flex flex-col gap-6 
        relative
      "
    >
      {/* PAGE TITLE */}
      <h1
        className="
          mt-0                 
          text-3xl sm:text-4xl lg:text-5xl 
          font-bold border-l-4 border-red-500 pl-3 sm:pl-5
          uppercase tracking-[0.18em] sm:tracking-[0.28em]
          leading-tight
        " style={{fontFamily: "Anton"}}
      >
        {title}
      </h1>

      {/* CONTENT */}
      <div className="flex justify-center w-full">
        <div className="opacity-90 text-base sm:text-lg max-w-5xl text-center px-2 sm:px-4 scale-100">
          {children}
        </div>
      </div>

      {/* HOME BUTTON */}
      <button
        onClick={() => router.push("/cube")}
        className="
          fixed 
          bottom-3 left-3 
          sm:bottom-5 sm:left-5 
          pointer-events-auto flex items-center gap-2 
          px-3 py-2 sm:px-4 sm:py-2 
          bg-[#ef4149] hover:bg-[#c92c35] 
          transition-all shadow-lg 
          rounded-md text-xs sm:text-sm font-semibold cursor-pointer z-40
        "
      >
        <ArrowLeft size={18} />
        <span>Home</span>
      </button>

      {/* HELP ICON */}
      {helpText && (
        <motion.div
          className="
            fixed 
            top-4 right-4 
            sm:top-6 sm:right-6 
            text-[#ef4149] cursor-pointer z-40
          "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        >
          <CircleHelp size={32} />

          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="
                absolute right-0 mt-2 
                text-[10px] sm:text-xs 
                bg-black/80 border border-[#ef4149] 
                px-2.5 py-2 sm:px-3 sm:py-2 
                rounded-lg backdrop-blur-md whitespace-nowrap
              "
            >
              {helpText}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* COPYRIGHT FOOTER */}
      <footer
        className="
          fixed 
          bottom-2 sm:bottom-3 
          w-full text-center 
          opacity-60 text-[10px] sm:text-xs 
          pointer-events-none
        "
      >
        © {new Date().getFullYear()} Aby Pious — All Rights Reserved.
      </footer>

      <QuickNav />
    </section>
  );
}
