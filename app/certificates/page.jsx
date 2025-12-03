"use client";

import PageTemplate from "../../components/PageTemplate";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

const certificates = [
  { file: "git.jpg", title: "Git", issuer: "Great Learning" },
  { file: "project management IBM.jpg", title: "Project Management", issuer: "IBM" },
  { file: "Web Development.jpg", title: "Web Development", issuer: "IBM" },
  { file: "flutter.png", title: "Flutter Development", issuer: "IEEE" },
  { file: "Blockchain.png", title: "Blockchain", issuer: "Kerala Blockchain Academy" },
  { file: "Etherium.png", title: "Ethereum", issuer: "Kerala Blockchain Academy" },
  { file: "3d printing.jpg", title: "3D Printing", issuer: "SAE" },
  { file: "autocad.jpg", title: "AutoCAD", issuer: "Techmaghi" },
];

export default function CertificatesPage() {
  const [preview, setPreview] = useState(null);

  return (
    <PageTemplate
      title="Certificates"
      helpText="Tap / click a certificate to view it in full."
    >
      {/* GRID */}
      <motion.div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-4 sm:gap-6 
          w-full max-w-5xl 
          mx-auto 
          mt-6 sm:mt-8 
          px-1 sm:px-0
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            onClick={() => setPreview(cert)}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 18px rgba(239,65,73,0.35)",
            }}
            transition={{ duration: 0.22 }}
            className="
              bg-black/50 border border-[#ef4149] 
              rounded-xl overflow-hidden 
              backdrop-blur-md cursor-pointer 
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div className="relative h-36 sm:h-40 lg:h-40 w-full overflow-x-hidden">
              <Image
                src={`/certificates/${cert.file}`}
                alt={cert.title}
                fill
                className="object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* TITLE + ISSUER */}
            <div className="p-3 sm:p-4 text-center flex flex-col gap-2">
              <p className="text-[12px] sm:text-[13px] font-semibold leading-tight">
                {cert.title}
              </p>

              {cert.issuer && (
                <span className="text-[10px] sm:text-[11px] px-2 py-[2px] border border-[#ef4149] rounded-md opacity-75">
                  {cert.issuer}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL VIEWER */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 
              bg-black/80 backdrop-blur-lg 
              flex items-center justify-center 
              z-50 px-3
            "
            onClick={() => setPreview(null)}
          >
            {/* Inner container (stops click from closing) */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="
                relative 
                w-full max-w-4xl 
                max-h-[80vh]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/certificates/${preview.file}`}
                alt={preview.title}
                width={1600}
                height={900}
                className="rounded-lg shadow-2xl object-contain w-full max-h-[80vh]"
              />

              {/* CLOSE BUTTON (top-right of modal) */}
              <button
                onClick={() => setPreview(null)}
                className="
                  absolute -top-3 -right-3 
                  sm:top-2 sm:right-2 
                  bg-[#ef4149] p-2 sm:p-3 
                  rounded-full hover:bg-[#c82f36] 
                  transition shadow-lg
                "
              >
                <X size={18} className="sm:hidden" />
                <X size={22} className="hidden sm:block" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTemplate>
  );
}
