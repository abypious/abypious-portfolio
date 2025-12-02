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

      <motion.div 
        className="grid grid-cols-3 gap-6 w-full max-w-[1350px] mx-auto mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        {majorProjects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 18px rgba(239,65,73,0.35)",
            }}
            transition={{ duration: 0.22 }}
            className="bg-black/50 border border-[#ef4149] rounded-2xl p-6 backdrop-blur-md h-[260px] flex flex-col justify-between"
          >
            {/* TITLE */}
            <div className="space-y-[2px]">
              <h3 className="font-bold text-[18px] mb-1">{item.name}</h3>
              <p className="text-[12px] opacity-70">{item.tagline}</p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[16px] opacity-85 leading-tight text-left">{item.desc}</p>

            {/* STACK + DATE + LINK */}
            <div className="flex justify-between items-end">
              
              {/* STACK TAGS */}
              <div className="flex flex-wrap gap-2 text-[11px] max-w-[160px]">
                {item.stack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#ef4149] px-2 py-[2px] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-right flex flex-col items-end gap-[4px]">
                {/* DATE BADGE */}
                <span className="text-[11px] px-2 py-[2px] border border-[#ef4149] rounded-md opacity-80">
                  {item.date}
                </span>

                <a 
                  href={item.link}
                  className="text-[#ef4149] text-[13px] flex gap-1 items-center hover:underline"
                >
                  View <ExternalLink size={12}/>
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* OTHER PROJECTS CARD */}
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 18px rgba(239,65,73,0.35)",
          }}
          transition={{ duration: 0.22 }}
          className="bg-black/50 border border-[#ef4149] rounded-2xl p-6 backdrop-blur-md h-[260px] flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-[18px] mb-3">Other Projects</h3>
            <ul className="text-[13px] opacity-80 leading-tight space-y-[5px] text-left p-2">
              {otherProjects.map((p, idx) => (
                <li key={idx}>• {p}</li>
              ))}
            </ul>
          </div>

          <a 
            href="https://github.com/abypious"
            className="text-[#ef4149] text-[14px] mt-auto hover:underline self-end flex items-center gap-1"
          >
            View GitHub <ExternalLink size={18}/>
          </a>
        </motion.div>

      </motion.div>
    </PageTemplate>
  );
}
