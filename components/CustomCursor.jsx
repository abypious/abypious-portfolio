"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileInput, setIsMobileInput] = useState(false);

  useEffect(() => {
    const evaluateInput = () => {
      const isTouch =
        matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0;

      setIsMobileInput(isTouch);
    };

    evaluateInput();
    window.addEventListener("resize", evaluateInput);

    return () => window.removeEventListener("resize", evaluateInput);
  }, []);

  useEffect(() => {
    if (isMobileInput) return; // No cursor behavior on touch devices

    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const hoverStart = () => setIsHovering(true);
    const hoverEnd = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);

    document.addEventListener("mousedown", () => {
      cursor.classList.add("clicked");
      setTimeout(() => cursor.classList.remove("clicked"), 200);
    });

    const hoverTargets = document.querySelectorAll("button, a, .interactive");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", hoverStart);
      el.addEventListener("mouseleave", hoverEnd);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", hoverStart);
        el.removeEventListener("mouseleave", hoverEnd);
      });
    };
  }, [isMobileInput]);

  // Don't render cursor on touch devices
  if (isMobileInput) return null;

  return <div className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`} />;
}
