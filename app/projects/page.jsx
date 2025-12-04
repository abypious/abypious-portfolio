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
    link: "https://github.com/abypious/Seed.git"
  },
  {
    name: "Intelligent Learning Assistant",
    tagline: "Emotion Driven Training System",
    date: "Jan 2022",
    stack: ["Python", "TensorFlow", "OpenCV"],
    desc: "Emotion recognition system to support autism learning with adaptive responses.",
    link: "https://github.com/abypious/Intelligent-learning-assistant.git"
  },
  {
    name: "Vote Ready",
    tagline: "Election Officers Training Platform",
    date: "Mar 2024",
    stack: ["Flutter", "Firebase", "Gamification"],
    desc: "Gamified mobile app for training 500+ officers under tight deadlines.",
    link: "https://github.com/abypious/vote-ready.git"
  },
  {
    name: "Mavericks",
    tagline: "Real-Time Vehicle Control App",
    date: "Dec 2023",
    stack: ["Flutter", "ESP32", "Bluetooth"],
    desc: "Mobile app for live vehicle telemetry and remote start — won 1st place.",
    link: "https://github.com/abypious/maverics.git"
  },
  {
    name: "De-Mentor",
    tagline: "Addiction Recovery Platform",
    date: "Jul 2024",
    stack: ["React", "Node"],
    desc: "Platform offering structured 5-week addiction recovery guidance.",
    link: "https://github.com/abypious/De-Mentor.git"
  },
];

const otherProjects = [
  { name: "FooBoo – Food Booking App", link: "https://github.com/abypious/FoodBoo.git" },
  { name: "DrySense – ESP32 Wetness Detector", link: "https://github.com/abypious/Dry-Sense.git" },
  { name: "Attendance Management System", link: "https://github.com/abypious/attendance-management.git" },
  { name: "Employee Management System", link: "https://github.com/abypious/Employee-Management.git" },
  { name: "Task Manager", link: "https://github.com/abypious/Simple-Task-Manager.git" },
  { name: "Next-Bus Real-Time Tracker", link: "https://github.com/abypious/Next-Bus.git" },
];


export default function ProjectPage() {
  return (
    <PageTemplate title="Projects" helpText="Tap a card or item to open its repository.">

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
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(239,65,73,0.35)" }}
            transition={{ duration: 0.22 }}
            className="
              bg-black/50 border border-[#ef4149] rounded-2xl 
              p-5 sm:p-6 backdrop-blur-md 
              flex flex-col justify-between 
              min-h-[220px] cursor-pointer
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
              </div>
            </div>
          </motion.a>
        ))}

        {/* Other Projects card */}
        <motion.a
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(239,65,73,0.35)" }}
          href="https://github.com/abypious"
          target="_blank"
          className="
            bg-black/50 border border-[#ef4149] rounded-2xl 
            p-5 sm:p-6 backdrop-blur-md 
            min-h-[220px] flex flex-col justify-between cursor-pointer
          "
        >
          <h3 className="font-bold text-lg mb-3">Other Projects</h3>

          <ul className="text-xs sm:text-sm leading-tight space-y-2 text-left">
            {otherProjects.map((proj, i) => (
              <li key={i}>
                <span className="opacity-80 hover:opacity-100 hover:text-[#ef4149] transition-all duration-200 flex items-center gap-1">
                  • {proj.name}
                </span>
              </li>
            ))}
          </ul>

          <span className="text-[#ef4149] text-sm mt-4 underline self-end flex items-center gap-1">
            View GitHub <ExternalLink size={16}/>
          </span>
        </motion.a>
      </motion.div>
    </PageTemplate>
  );
}
