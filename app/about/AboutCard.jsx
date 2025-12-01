"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, FileDown, CircleHelp } from "lucide-react";

const cardHoverEffect = {
  scale: 1.01,
  boxShadow: "0 0 25px rgba(239, 65, 73, 0.25)",
  transition: { duration: 0.25, ease: "easeOut" },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const imageHover = {
  scale: 1.06,
  filter: "drop-shadow(0px 0px 12px rgba(239, 65, 73, 0.4))",
  transition: { duration: 0.55, ease: "easeOut" },
};

const expandedHover = {
  scale: 1.03,
  rotate: 2,
  filter: "drop-shadow(0px 0px 6px rgba(239, 65, 73, 0.2))",
  transition: { duration: 0.55, ease: "easeOut" },
};


export default function AboutCard() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      whileHover={open ? cardHoverEffect : {}}
      onClick={() => setOpen(!open)}
      className="cursor-pointer relative transition-all mx-auto "
      style={{
        width: open ? "1150px" : "520px",
        minWidth: open ? "1150px" : "500px",
        height: open ? "550px" : "500px",
        borderRadius: open ? "32px" : "999px",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Card Container */}
      <motion.div
        layout
        className="bg-[#0d0d0d] border border-[#ef41494f] w-full h-full rounded-3xl shadow-xl p-6 relative overflow-hidden"
      >
        {/* Profile + Side Info */}
        <motion.div
          layout
          whileHover={!open ? imageHover : expandedHover}
          className="flex flex-col items-center sm:items-start transition-all gap-4"
          style={{
            position: open ? "absolute" : "relative",
            top: open ? "30px" : "0",
            left: open ? "30px" : "0",
          }}
        >
          {/* Profile Image */}
          <motion.img
            src="/Profile.jpg"
            width={open ? 150 : 450}
            height={open ? 150 : 450}
            alt="Profile"
            className="rounded-full border border-[#ef41494f] object-cover"
            layout="position"
            transition={{ duration: 0.35 }}
          />

          {/* EXTRA DETAILS (only visible when open) */}
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-300 text-[15px] space-y-2 mt-3 text-left"
            >
              <p>📅 <span className="text-white font-semibold">22 July 2002</span></p>
              <p>📞 <span className="text-white font-semibold">+91 73564 95708</span></p>
              <p>📍 <span className="text-white font-semibold">Wayanad, Kerala</span></p>
              <p>🎂 <span className="text-white font-semibold">23</span></p>
              <p>🎓 <span className="text-white font-semibold">B.Tech</span></p>
            </motion.div>
          )}
        </motion.div>

        {/* Expanded Content */}
        {open && (
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="absolute top-[40px] left-[200px] w-[900px] grid gap-6 text-left"
            style={{
              gridTemplateColumns: "260px 1fr 1fr",
              gridAutoRows: "minmax(90px, auto)",
            }}
          >
            {/* About Me */}
            <motion.div variants={fadeItem} className="col-span-2 border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">About Me</p>
              <p className="text-lg font-semibold">I build fast and interactive software solutions.</p>
            </motion.div>

            {/* Role */}
            <motion.div variants={fadeItem} className="border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">Currently</p>
              <p className="font-semibold">Working as Software Developer at Tarento Group</p>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeItem} className="border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">Location</p>
              <p className="font-semibold">Wayanad, Kerala</p>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeItem} className="border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">Education</p>
              <p className="font-semibold">B.Tech Computer Science Engineering</p>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeItem} className="border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">Languages I speak</p>
              <div className="flex gap-3 flex-wrap mt-3">
                {["English", "Malayalam"].map((lang) => (
                  <span key={lang} className="bg-[#ef4149] rounded-full px-4 py-1 text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeItem} className="col-span-3 border border-[#2a2a2a] rounded-xl p-5 bg-black/30 hover:border-[#ef4149] transition">
              <p className="text-sm opacity-60">What I do</p>
              I focus on React, Flutter and explore AI and ML. I love to build clean, minimal digital experiences.
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeItem} className="col-span-3 flex gap-4">
              <button className="flex-1 h-12 flex items-center justify-center gap-3 rounded-xl bg-[#ef4149] hover:bg-[#c92c34] transition font-semibold" onClick={() => router.push("/contact")}>
                <Mail size={18} /> Contact Me
              </button>

              <a href="/cv.pdf" download className="flex-1 h-12 flex items-center justify-center gap-3 rounded-xl border border-[#ef4149] hover:bg-[#ef4149] transition font-semibold">
                <FileDown size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
