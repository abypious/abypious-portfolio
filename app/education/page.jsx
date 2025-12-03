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
      
      {/* DESKTOP VIEW (Horizontal Timeline) */}
      <div className="top-[25%] hidden lg:flex relative w-full justify-center min-h-[55vh]">

        {/* Line */}
        <div className="absolute top-[2%] w-[100%] border-t-2 border-dashed border-[#ef4149] opacity-50"></div>

        <div className="flex justify-between px-[3%] relative gap-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Dot */}
              <motion.div
                className="w-6 h-6 rounded-full bg-[#ef4149] shadow-[0_0_15px_#ef4149] mb-6"
                whileHover={{ scale: 1.2 }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.06, boxShadow: "0 0 25px rgba(239,65,73,0.45)" }}
                transition={{ duration: 0.3 }}
                className="
                  border border-[#ef4149] bg-black/40 backdrop-blur-lg 
                  w-[270px] h-[240px] p-4 rounded-xl text-center
                "
              >
                <GraduationCap size={24} className="text-[#ef4149] mx-auto mb-3" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-[#ef4149]">{item.year}</p>
                <p className="mt-1">{item.score}</p>
                <p className="opacity-70 text-sm mt-4">{item.place}</p>
                <p className="opacity-50 text-xs">{item.board}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* MOBILE VIEW (Vertical Timeline) */}
      <div className="flex lg:hidden flex-col gap-8 w-full mt-6">

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex items-start gap-4"
          >
            {/* Dot + Line */}
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-[#ef4149] shadow-[0_0_12px_#ef4149]" />
              {i !== education.length - 1 && (
                <div className="w-[2px] h-20 bg-[#ef4149]/40 mt-1"></div>
              )}
            </div>

            {/* Card */}
            <div className="border border-[#ef4149] bg-black/40 backdrop-blur-lg p-5 rounded-xl w-[85vw]">
              <GraduationCap size={22} className="text-[#ef4149] mb-2" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-[#ef4149]">{item.year}</p>
              <p className="mt-1 text-sm">{item.score}</p>
              <p className="opacity-80 text-sm mt-2">{item.place}</p>
              <p className="opacity-50 text-xs">{item.board}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </PageTemplate>
  );
}
