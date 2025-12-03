"use client";

import PageTemplate from "../../components/PageTemplate";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const majorProjects = [
  {
    name: "SEED",
    tagline: "Smart Crop Monitoring System",
    date: "Mar 2025",
    stack: ["Flutter", "Arduino", "Firebase", "ML"],
    desc: "AI-powered soil analysis app providing smart irrigation and fertilizer recommendations.",
    link: "#"
  },
  {
    name: "Intelligent Learning Assistant",
    tagline: "Emotion Driven Training System",
    date: "Jan 2022",
    stack: ["Python", "TensorFlow", "OpenCV"],
    desc: "Emotion recognition system to support autism learning with adaptive responses.",
    link: "#"
  },
  {
    name: "Vote Ready",
    tagline: "Election Officers Training Platform",
    date: "Mar 2024",
    stack: ["Flutter", "Firebase", "Gamification"],
    desc: "Gamified mobile app for training 500+ officers under tight deadlines.",
    link: "#"
  },
  {
    name: "Mavericks",
    tagline: "Real-Time Vehicle Control App",
    date: "Dec 2023",
    stack: ["Flutter", "ESP32", "Bluetooth"],
    desc: "Mobile app for live vehicle telemetry and remote start — won 1st place.",
    link: "#"
  },
  {
    name: "De-Mentor",
    tagline: "Addiction Recovery Platform",
    date: "Jul 2024",
    stack: ["React", "Node"],
    desc: "Platform offering structured 5-week addiction recovery guidance.",
    link: "#"
  },
];

const otherProjects = [
  "FooBoo – Food Booking App",
  "DrySense – ESP32 Wetness Detector",
  "Attendance Management System",
  "Employee Management System",
  "Task Manager",
  "Next-Bus Real-Time Tracker",
];

export default function ProjectPage() {
  return (
    <PageTemplate title="Projects" helpText="Major projects + highlights.">

      {/* Responsive Grid */}
      <motion.div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          w-full 
          max-w-[1400px] 
          mx-auto 
          mt-8 
          pb-20
          px-3 sm:px-6
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {majorProjects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(239,65,73,0.35)" }}
            transition={{ duration: 0.22 }}
            className="
              bg-black/50 border border-[#ef4149] rounded-2xl 
              p-5 sm:p-6 
              backdrop-blur-md 
              flex flex-col justify-between 
              min-h-[220px] 
            "
          >
            {/* Header */}
            <div>
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-xs opacity-70 sm:text-sm">{item.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base opacity-85 leading-tight mt-3 mb-3 text-left">
              {item.desc}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[10px] sm:text-[11px] max-w-[180px]">
                {item.stack.map((tech, idx) => (
                  <span key={idx} className="bg-[#ef4149] px-2 py-[2px] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-right flex flex-col items-end">
                <span className="text-[10px] sm:text-[12px] px-2 py-[2px] border border-[#ef4149] rounded-md opacity-80">
                  {item.date}
                </span>

                <a 
                  href={item.link} 
                  className="text-[#ef4149] text-xs sm:text-sm flex gap-1 items-center hover:underline"
                >
                  View <ExternalLink size={14}/>
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects card */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(239,65,73,0.35)" }}
          className="
            bg-black/50 border border-[#ef4149] rounded-2xl 
            p-5 sm:p-6 backdrop-blur-md 
            min-h-[220px] flex flex-col justify-between
          "
        >
          <h3 className="font-bold text-lg mb-3">Other Projects</h3>

          <ul className="text-xs sm:text-sm opacity-80 leading-tight space-y-1 text-left">
            {otherProjects.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>

          <a 
            href="https://github.com/abypious"
            className="text-[#ef4149] text-sm mt-4 hover:underline self-end flex items-center gap-1"
          >
            View GitHub <ExternalLink size={16}/>
          </a>
        </motion.div>
      </motion.div>
    </PageTemplate>
  );
}
