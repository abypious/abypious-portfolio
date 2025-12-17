"use client";

import { motion } from "framer-motion";
import CubeScene from "../../components/home/CubeScene";
import { CircleHelp } from "lucide-react";
import { useState, useEffect } from "react";
import "@fontsource/anton/400.css";
import MobileExperienceNotice from "../../components/MobileExperienceNotice";

export default function CubePage() {
  const [hovered, setHovered] = useState(null);
  const [typed, setTyped] = useState("");
  const [scale, setScale] = useState(1.5);

  // Responsive scaling logic
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width > 1800) setScale(4.2);
      else if (width > 1500) setScale(4);
      else if (width > 1200) setScale(3.6);
      else if (width > 992) setScale(3);
      else if (width > 768) setScale(2.4);
      else if (width > 550) setScale(3.0);
      else setScale(2.0);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Typing animation for hover text
  useEffect(() => {
    if (!hovered) return setTyped("");
    const text = `<${hovered}/>`;
    let index = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-black text-white relative overflow-x-hidden p-4">

    <MobileExperienceNotice />

      {/* ---- Name (Top-Left) ---- */}
      <div 
        className="fixed top-4 left-4 select-none font-bold"
        style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.8rem)", fontFamily: "Anton" }}
      >
        ABY PIOUS
      </div>

      {/* ---- Cube ---- */}
      <motion.div
        initial={{ opacity: 0, scale: scale * 0.8 }}
        animate={{ opacity: 1, scale }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center"
      >
        <CubeScene setHovered={setHovered} />
      </motion.div>

      {/* ---- Help Icon (Top-Right) ---- */}
      <div
        className="fixed top-10 right-10 cursor-pointer text-red-400 transition"
        style={{ fontFamily: "Anton", fontSize: "clamp(2rem, 3vw, 3.6rem)" }}
        onMouseEnter={() => setHovered("Click or tap a cube")}
        onMouseLeave={() => setHovered(null)}
      >
        <CircleHelp size={32} />
      </div>

      {/* ---- Hover Label (Bottom-Right) ---- */}
      <div
        className={`fixed bottom-6 right-6 font-mono text-red-400 duration-200 
        ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.6rem)" }}
      >
        {typed}
        {hovered && <span className="cursor blink ml-1"> </span>}
      </div>

      {/* ---- Footer ---- */}
      <footer className="absolute bottom-2 w-full text-center text-xs opacity-50">
        © {new Date().getFullYear()} Aby Pious — All Rights Reserved.
      </footer>
    </section>
  );
}
