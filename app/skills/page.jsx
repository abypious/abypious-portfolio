"use client";

import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
import { LayoutGrid, SlidersHorizontal } from "lucide-react";

export default function SkillsPage() {
  const categories = Object.keys(skills);
  const [selected, setSelected] = useState(categories[0]);
  const [view, setView] = useState("grid");

  return (
    <PageTemplate title="Skills" helpText="Switch view or select a category to explore skills.">

      <div className="flex justify-center items-center w-full h-[70vh] gap-10">

        {/* LEFT SIDE - CATEGORY SELECTOR */}
        <div className="flex flex-col gap-5 border-r border-[#ef41493d] pr-6 h-[65%]">

          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelected(cat)}
              whileHover={{ scale: 1.05 }}
              className={`uppercase tracking-wide text-sm px-4 py-2 rounded-lg transition-all ${
                selected === cat
                  ? "bg-[#ef4149] shadow-[0_0_12px_#ef4149] font-bold"
                  : "border border-[#ef41494f] hover:border-[#ef4149]"
              }`}
            >
              {cat}
            </motion.button>
          ))}

          {/* VIEW SWITCH */}
          <div className="flex gap-5 mt-auto">
            <SwitchButton icon={<LayoutGrid size={20}/>} active={view === "grid"} onClick={() => setView("grid")} />
            <SwitchButton icon={<SlidersHorizontal size={20}/>} active={view === "bar"} onClick={() => setView("bar")} />
          </div>
        </div>

        {/* RIGHT SIDE - SKILL DISPLAY */}
        <motion.div
          key={selected + view}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center w-[55%]"
        >
          {view === "grid" ? (
            <SkillGrid list={skills[selected]} />
          ) : (
            <SkillProgress list={skills[selected]} />
          )}
        </motion.div>

      </div>
    </PageTemplate>
  );
}

/* ----------------------------------- COMPONENTS ----------------------------------- */

function SwitchButton({ icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl border transition-all ${
        active
          ? "border-[#ef4149] bg-[#ef41493d]"
          : "border-[#ef41494f] hover:border-[#ef4149]"
      }`}
    >
      {icon}
    </button>
  );
}

function SkillGrid({ list }) {
  return (
    <div className="grid grid-cols-3 gap-10 place-items-center ">
      {list.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.12 }}
          className="flex flex-col items-center justify-center gap-3 
          w-[120px] h-[120px] border border-[#ef41494f] rounded-xl bg-black/30 
          hover:border-[#ef4149] transition-all cursor-pointer"
        >
          <img src={item.icon} alt={item.name} className="w-15 h-15 object-contain" />
          <span className="text-xs sm:text-sm text-center leading-tight">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SkillProgress({ list }) {
  return (
    <div className="flex flex-col gap-8">
      {list.map((item, i) => (
        <div key={item.name}>
          <div className="flex justify-between text-sm font-semibold mb-1">
            <span>{item.name}</span>
            <span>{item.level}%</span>
          </div>

          <div className="h-4 w-[280px] md:w-[350px] lg:w-[440px] border border-[#ef41494f] rounded-xl overflow-hidden bg-[#111]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.level}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="h-full bg-[#ef4149] rounded-xl shadow-[0_0_10px_#ef4149]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
