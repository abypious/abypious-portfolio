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
      
      <div className="w-full flex flex-col items-center gap-10 mt-10">

  <div 
    className="
      flex gap-4 overflow-x-auto 
      border-b border-[#ef414946] pb-3 
      sm:px-20 px-6 pt-2
      w-full max-w-[950px]
    "
  >
    {categories.map((cat) => (
      <motion.button
        key={cat}
        onClick={() => setSelected(cat)}
        whileHover={{ scale: 1.05 }}
        className={`uppercase tracking-wide text-xs sm:text-sm whitespace-nowrap px-4 py-2 rounded-lg transition-all ${
          selected === cat
            ? "bg-[#ef4149] text-black shadow-[0_0_12px_#ef4149] font-bold"
            : "border border-[#ef41494f] hover:border-[#ef4149]"
        }`}
      >
        {cat}
      </motion.button>
    ))}
  </div>

  {/* ---- VIEW SWITCH UNDER SELECTORS ---- */}
  <div className="flex gap-4">
    <SwitchButton icon={<LayoutGrid size={20} />} active={view === "grid"} onClick={() => setView("grid")} />
    <SwitchButton icon={<SlidersHorizontal size={20} />} active={view === "bar"} onClick={() => setView("bar")} />
  </div>

  {/* ---- SKILL DISPLAY BLOCK ---- */}
  <motion.div
    key={selected + view}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="w-full max-w-[950px] px-4"
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

/* BUTTON FOR VIEW SWITCH */
function SwitchButton({ icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-3 sm:p-4 rounded-xl border transition-all ${
        active
          ? "border-[#ef4149] bg-[#ef41493d]"
          : "border-[#ef41494f] hover:border-[#ef4149]"
      }`}
    >
      {icon}
    </button>
  );
}

/* GRID VIEW */
function SkillGrid({ list }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-8 place-items-center mt-4">
      {list.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.1 }}
          className="w-[95px] sm:w-[120px] h-[95px] sm:h-[120px] flex flex-col items-center justify-center gap-2 sm:gap-3 border border-[#ef41494f] rounded-xl bg-black/30 hover:border-[#ef4149] transition-all cursor-pointer"
        >
          <img src={item.icon} alt={item.name} className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
          <span className="text-[10px] sm:text-sm text-center leading-tight">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* PROGRESS BAR VIEW */
function SkillProgress({ list }) {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {list.map((item, i) => (
        <div key={item.name} className="w-full">
          <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1">
            <span>{item.name}</span>
            <span>{item.level}%</span>
          </div>

          <div className="h-4 w-full border border-[#ef41494f] rounded-xl bg-[#111] overflow-hidden">
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
