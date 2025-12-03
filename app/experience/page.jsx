"use client";

import PageTemplate from "../../components/PageTemplate";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Software Developer",
      place: "Tarento Group",
      duration: "Oct 2025 — Present",
      logo: "/logos/Tarento.png",
    },
    {
      title: "Secretary",
      place: "ISTE Chapter, RIT Kottayam",
      duration: "2024 — 2025",
      logo: "/logos/Iste.png",
    },
    {
      title: "Department Coordinator",
      place: "CGPC Placement Cell",
      duration: "2024 — 2025",
      logo: "/logos/cgpc.png",
    },
  ];

  return (
    <PageTemplate title="Experience" helpText="A quick timeline of my journey so far.">
      <div className="flex justify-center w-full pt-10 pb-6">
        <div className="relative w-full space-y-8">

          {experiences.map((exp, i) => (
            <TimelineCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}


/* ---------- Card Component ---------- */

function TimelineCard({ title, place, duration, logo }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative pl-12 sm:pl-20 ga"
    >
      {/* Node Pin */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-[20px] sm:left-[30px] top-8 w-5 h-5 rounded-full bg-[#ef4149] shadow-[0_0_12px_#ef4149]"
      ></motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 0 18px rgba(239,65,73,0.35)" }}
        transition={{ duration: 0.3 }}
        className="border border-[#ef41494f] bg-black/40 backdrop-blur-lg rounded-xl p-5 sm:p-6"
      >
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Logo */}
          <img
            src={logo}
            alt={place}
            className="w-20 h-20 sm:w-20 sm:h-20 object-contain 
                       opacity-80 group-hover:opacity-100 transition-all"
          />

          {/* Text */}
          <div>
            <p className="text-lg sm:text-xl font-semibold">{title}</p>
            <p className="text-sm sm:text-base opacity-70">{place}</p>
            <p className="text-xs sm:text-sm opacity-40 mt-1">{duration}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
