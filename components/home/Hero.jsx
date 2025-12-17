"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CubeScene from "./CubeScene";
import "@fontsource/anton/400.css";

export default function Hero() {
  const [activated, setActivated] = useState(false);

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center relative bg-black text-white overflow-x-hidden">

      <motion.h1
        onClick={() => setActivated(true)}
        className="font-bold cursor-pointer select-none"
        initial={false}
        animate={
          activated
            ? {
                position: "absolute",
                top: "20px",
                left: "30px",
                fontSize: "2.5rem",
                transition: { duration: 1, ease: "easeInOut" },
              }
            : {
                fontSize: "14rem",
                fontFamily: "Anton",
              }
        }
      >
        ABY PIOUS
      </motion.h1>


      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div style={{ transform: "scale(3.8)" }}>
            <CubeScene />
          </div>

          {/* COPYRIGHT FOOTER */}
      <footer className="fixed bottom-2 w-full text-center opacity-20 text-xs pointer-events-none">
        © {new Date().getFullYear()} Aby Pious — All Rights Reserved.
      </footer>

        </motion.div>
      )}

    </section>
  );
}
