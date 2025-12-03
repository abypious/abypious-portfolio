"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const pages = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const filteredPages = pages.filter((p) => p.href !== pathname);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="
          fixed 
          bottom-4 right-4 
          sm:bottom-6 sm:right-6 
          bg-[#ef4149] text-black 
          rounded-full 
          p-3 sm:p-4 
          shadow-lg z-50
        "
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        {open ? <X size={18} /> : <Menu size={16} />}
      </motion.button>

      {/* Expanded Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="
              fixed 
              bottom-16 right-4 
              sm:bottom-20 sm:right-6 
              flex flex-col items-end gap-2 sm:gap-3 
              z-50
            "
          >
            {filteredPages.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block 
                    bg-black/80 border border-[#ef4149] 
                    text-white 
                    px-4 py-1.5 sm:px-5 sm:py-2 
                    rounded-lg text-xs sm:text-sm 
                    hover:bg-[#ef4149] hover:text-black 
                    transition-all text-left 
                    w-[140px] sm:w-[170px] 
                    tracking-wide
                  `}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
