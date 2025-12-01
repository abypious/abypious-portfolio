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
        className="fixed bottom-6 right-6 bg-[#ef4149] text-black rounded-full p-4 shadow-lg z-50"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.25 }}
      >
        {open ? <X size={22} /> : <Menu size={14} />}
      </motion.button>

      {/* Expanded Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-25 right-6 flex flex-col items-end gap-3 z-50"
          >
            {filteredPages.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block bg-black/70 border border-[#ef4149] text-white px-5 py-2 rounded-lg
                    text-sm hover:bg-[#ef4149] hover:text-black transition-all text-left w-[150px] tracking-wide`}
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
