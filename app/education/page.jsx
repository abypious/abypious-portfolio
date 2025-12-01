"use client";

import PageTemplate from "../../components/PageTemplate";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science Engineering",
    year: "2022 — 2025",
    score: "CGPA: 7.30",
    place: "RIT Kottayam",
    board: "APJ Abdul Kalam Technological University",
  },
  {
    title: "Diploma in Computer Engineering",
    year: "2020 — 2022",
    score: "CGPA: 7.56",
    place: "Govt Polytechnic Mananthavadi",
    board: "SBTE Kerala",
  },
  {
    title: "Vocational Higher Secondary (12th)",
    year: "2018 — 2020",
    score: "72.87%",
    place: "GVHSS Sulthan Bathery",
    board: "HSE Kerala",
  },
  {
    title: "SSLC (10th)",
    year: "2018",
    score: "84%",
    place: "GHSS Meenangadi",
    board: "KBPE Kerala",
  },
];

export default function EducationPage() {
  return (
    <PageTemplate 
      title="Education" 
      helpText="Timeline of my academic journey."
    >
      <div className="relative h-[65vh] flex items-center justify-center">

        {/* Horizontal dotted line */}
        <div className="absolute top-[21%] w-[100%] border-t-2 border-dashed border-[#ef4149] opacity-50"></div>

        {/* Milestones + Cards */}
        <div className="w-full flex justify-between px-[1%] relative gap-x-4">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center relative"
            >
              {/* Milestone Dot */}
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.2 }}
                className="w-7 h-7 rounded-full bg-[#ef4149] shadow-[0_0_20px_#ef4149] mb-6"
              ></motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(239,65,73,0.4)"
                }}
                transition={{ duration: 0.3 }}
                className="border border-[#ef4149] bg-black/40 backdrop-blur-lg w-[280px] h-[250px] p-6 rounded-xl text-center"
              >
                <GraduationCap size={24} className="text-[#ef4149] mx-auto mb-2" />

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-[#ef4149] font-medium">{item.year}</p>
                <p className="mt-1">{item.score}</p>

                <p className="opacity-80 text-sm mt-4">{item.place}</p>
                <p className="opacity-50 text-xs">{item.board}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
