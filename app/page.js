"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "@fontsource/anton/400.css";

export default function HeroPage() {
  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => router.push("/cube"), 50); 
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white overflow-x-hidden">
      <motion.h1
        onClick={handleClick}
        className="cursor-pointer select-none font-bold text-center"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.2, opacity: 1 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: "Anton", fontSize: "clamp(3rem, 15vw, 12rem)" }}
      >
        ABY PIOUS
      </motion.h1>
    </section>
  );
}
