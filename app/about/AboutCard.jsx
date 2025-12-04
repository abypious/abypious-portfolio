"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, FileDown } from "lucide-react";

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
      onClick={() => setOpen((prev) => !prev)}
      className="
        cursor-pointer relative transition-all mx-auto 
        w-full max-w-[500px] 
        sm:max-w-[560px] 
        lg:max-w-[1100px]
      "
      style={{
        height: open ? "auto" : 420,        // auto height when expanded
        borderRadius: open ? 32 : 999,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        marginBottom: open ? 60 : 10,       // leaves space for footer
      }}
    >
      {/* Card Container */}
      <motion.div
        layout
        className="
          bg-[#0d0d0d] border border-[#ef41494f] 
          w-full h-full 
          rounded-3xl shadow-xl 
          p-5 sm:p-6 lg:p-8 
          relative overflow-hidden
          flex flex-col lg:flex-row gap-6
        "
      >
        {/* Profile + extra details */}
        <motion.div
          layout
          whileHover={!open ? imageHover : expandedHover}
          className="
            flex flex-col items-center lg:items-start 
            gap-1 sm:gap-4 
            flex-shrink-0
          "
        >
          <motion.img
            src="/Profile.jpg"
            width={open ? 160 : 360}
            height={open ? 160 : 360}
            alt="Profile"
            className="rounded-full border border-[#ef41494f] object-cover"
            layout="position"
            transition={{ duration: 0.35 }}
          />

          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-300 text-xs sm:text-sm space-y-1.5 sm:space-y-2 mt-2 text-left"
            >
              <p>
                📅 <span className="text-white font-semibold">22 July 2002</span>
              </p>
              <p>
                📞 <span className="text-white font-semibold">+91 73564 95708</span>
              </p>
              <p>
                📍 <span className="text-white font-semibold">Wayanad, Kerala</span>
              </p>
              <p>
                🎂 <span className="text-white font-semibold">23</span>
              </p>
              <p>
                🎓 <span className="text-white font-semibold">B.Tech</span>
              </p>
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
            className="
              flex-1 
              grid gap-4 lg:gap-6 
              mt-4 lg:mt-0 
              text-left 
              grid-cols-1 
              md:grid-cols-3 
              auto-rows-min
            "
          >
            {/* About Me */}
            <motion.div
              variants={fadeItem}
              className="
                md:col-span-2 
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">About Me</p>
              <p className="text-base sm:text-lg font-semibold">
                I build fast and interactive software solutions.
              </p>
            </motion.div>

            {/* Role */}
            <motion.div
              variants={fadeItem}
              className="
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">Currently</p>
              <p className="text-sm sm:text-base font-semibold">
                Software Developer at Tarento Group
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeItem}
              className="
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">Location</p>
              <p className="text-sm sm:text-base font-semibold">
                Kerala, India
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={fadeItem}
              className="
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">
                Languages I speak
              </p>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                {["English", "Malayalam"].map((lang) => (
                  <span
                    key={lang}
                    className="bg-[#ef4149] rounded-full px-3 py-1 text-xs sm:text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeItem}
              className="
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">Education</p>
              <p className="text-sm sm:text-base">
                B.Tech in Computer Science Engineering
              </p>
            </motion.div>


            {/* Bio */}
            <motion.div
              variants={fadeItem}
              className="
                md:col-span-3 
                border border-[#2a2a2a] rounded-xl 
                p-4 sm:p-5 
                bg-black/30 hover:border-[#ef4149] 
                transition
              "
            >
              <p className="text-xs sm:text-sm opacity-60 mb-1.5">
                What I do
              </p>
              <p className="text-sm sm:text-base">
                I focus on React, Flutter and explore AI and ML. I love to
                build clean, minimal digital experiences.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeItem}
              className="
                md:col-span-3 
                flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 min-h-[90px]
              "
            >
              <button
                className="
                  flex-1 
                  h-14 sm:h-12 
                  flex items-center justify-center gap-2 sm:gap-3 
                  rounded-xl bg-[#ef4149] hover:bg-[#c92c34] 
                  transition font-semibold text-sm sm:text-base
                "
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/contact");
                }}
              >
                <Mail size={20} /> Contact Me
              </button>

              <a
                href="/cv.pdf"
                download
                className="
                  flex-1 
                  h-14 sm:h-12 
                  flex items-center justify-center gap-2 sm:gap-3 
                  rounded-xl border border-[#ef4149] 
                  hover:bg-[#ef4149] 
                  transition font-semibold text-sm sm:text-base
                "
                onClick={(e) => e.stopPropagation()}
              >
                <FileDown size={20} /> Download CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
