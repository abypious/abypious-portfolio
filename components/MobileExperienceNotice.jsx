"use client";

import { useEffect, useState } from "react";

export default function MobileExperienceNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile =
      matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isMobile) {
      setVisible(true);

      // Auto hide after 6 seconds
      setTimeout(() => setVisible(false), 6000);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-10 left-70 -translate-x-1/2 px-5 py-3 
      bg-white/10 backdrop-blur-md border border-white/20 text-white 
      rounded-lg text-sm text-center shadow-lg animate-fadeIn z-[9999]"
      style={{ width: "clamp(200px, 70vw, 310px)" }}
    >
      ⚠️ Best viewed on a larger screen for full experience.
    </div>
  );
}
