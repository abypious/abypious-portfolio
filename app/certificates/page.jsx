"use client";

import PageTemplate from "../../components/PageTemplate";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

// MANUAL CERTIFICATE DATA
const certificates = [
  {
    file: "git.jpg",
    title: "Git",
    issuer: "Great Learning",
  },
  {
    file: "project management IBM.jpg",
    title: "Project Management",
    issuer: "IBM",
  },
  {
    file: "Web Development.jpg",
    title: "Web Development",
    issuer: "IBM",
  },
  {
    file: "flutter.png",
    title: "Flutter Development",
    issuer: "IEEE",
  },
  {
    file: "Blockchain.png",
    title: "Blockchain",
    issuer: "Kerala Blockchain Academy",
  },
  {
    file: "Etherium.png",
    title: "Ethereum",
    issuer: "Kerala Blockchain Academy",
  },
  {
    file: "3d printing.jpg",
    title: "3D Printing",
    issuer: "SAE",
  },
  {
    file: "autocad.jpg",
    title: "AutoCAD",
    issuer: "Techmaghi",
  },
];

export default function CertificatesPage() {
  const [preview, setPreview] = useState(null); 

  return (
    <PageTemplate title="Certificates" helpText="Click a certificate to view it.">

      {/* GRID */}
      <motion.div
        className="grid grid-cols-4 gap-6 w-full min-w-[900px] h-[500px] mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            onClick={() => setPreview(cert)}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 22px rgba(239,65,73,0.45)",
            }}
            transition={{ duration: 0.25 }}
            className="bg-black/50 border border-[#ef4149] rounded-xl overflow-hidden backdrop-blur-md cursor-pointer flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative h-[160px] w-full overflow-hidden">
              <Image
                src={`/certificates/${cert.file}`}
                alt={cert.title}
                fill
                className="object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* TITLE + ISSUER */}
            <div className="p-4 text-center flex flex-col gap-2">
              <p className="text-[13px] font-semibold leading-tight">
                {cert.title}
              </p>

              {cert.issuer && (
                <span className="text-[10px] px-2 py-[2px] border border-[#ef4149] rounded-md opacity-75">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
            onClick={() => setPreview(null)}
          >
            {/* inner container to stop propagation */}
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.22 }}
              className="relative max-w-[80vw] max-h-[80vh]"
            >
              <Image
                src={`/certificates/${preview.file}`}
                alt={preview.title}
                width={1600}
                height={900}
                className="rounded-lg shadow-2xl object-contain max-h-[80vh]"
              />
            </motion.div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPreview(null)}
              className="absolute top-18 right-60 bg-[#ef4149] p-3 rounded-full hover:bg-[#c82f36] transition"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </PageTemplate>
  );
}
