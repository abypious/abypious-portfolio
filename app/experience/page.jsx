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

      <div className="flex flex-col items-center w-full mt-10">
        <div className="w-full max-w-3xl space-y-10 relative">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2.5px] bg-[#ef41496a]"></div>

          {experiences.map((item, idx) => (
            <TimelineCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}


/* ------- COMPONENTS ------- */

function TimelineCard({ title, place, duration, logo }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative pl-10"
    >
      {/* Timeline Node */}
      <div className="absolute left-1 top-10 w-5 h-5 rounded-full bg-[#ef4149] shadow-[0_0_12px_#ef4149]"></div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="border border-[#ef41494f] rounded-xl bg-black/40 p-4 transition-all group hover:border-[#ef4149]  mr-5"
      >
        <div className="flex items-center gap-5">

          {/* Logo */}
          <img
            src={logo}
            alt={place}
            className="w-25 h-25 object-contain opacity-80 group-hover:opacity-100 
            group-hover:drop-shadow-[0_0_8px_#ef4149] transition-all"
          />

          {/* Text */}
          <div>
            <p className="text-xl font-semibold">{title}</p>
            <p className="opacity-60 text-base">{place}</p>
            <p className="opacity-30 text-xs mt-1">{duration}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
