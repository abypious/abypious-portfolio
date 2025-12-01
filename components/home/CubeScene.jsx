"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/cube.css";
import { CircleHelp } from "lucide-react";

const navLinks = [
    { label: "Certificates", href: "/certificates" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
    { label: "Education", href: "/education" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
   
];

export default function CubeScene() {
  const [hovered, setHovered] = useState(null);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!hovered) {
      setTyped("");
      return;
    }

    const text = `<${hovered}/>`;

    let index = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <>
      <div className="cube-container">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="cube-block"
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <span></span>
          </Link>
        ))}
      </div>

      {/* Help Icon */}
        <div 
        className="help-icon"
        onMouseEnter={() => setHovered("Click on a cube for navigation")}
        onMouseLeave={() => setHovered(null)}
        >
        <CircleHelp size={10} strokeWidth={2} />
        </div>

    {/* Hover Label */}
      <div className={`hover-label ${hovered ? "visible" : ""}`}>
        {typed}
        {hovered && <span className="cursor" />}
      </div>

    </>
  );
}
