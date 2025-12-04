import { useRef } from "react";
import { useRouter } from "next/navigation";
import "../../styles/cube.css";

const navLinks = [
  { label: "Certificates", href: "/certificates" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

export default function CubeScene({ setHovered }) {
  const router = useRouter();
  const pressTimer = useRef(null);
  const isLongPress = useRef(false);
  const awaitingSecondTap = useRef(false);

  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const handleTouchStart = (label) => {
    isLongPress.current = false;

    pressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      awaitingSecondTap.current = true;
      setHovered(label);

      if (navigator?.vibrate) navigator.vibrate(40);
    }, 350);
  };

  const handleTouchEnd = (href) => {
    clearTimeout(pressTimer.current);

    if (isLongPress.current) return;

    if (awaitingSecondTap.current) {
      awaitingSecondTap.current = false;
      setHovered(null);
      router.push(href);
      return;
    }

    router.push(href);
  };

  return (
    <div className="cube-container">
      {navLinks.map((item, i) => (
        <div
          key={i}
          className="cube-block"
          onMouseEnter={!isMobile ? () => setHovered(item.label) : undefined}
          onMouseLeave={!isMobile ? () => setHovered(null) : undefined}

          onClick={!isMobile ? () => router.push(item.href) : undefined}

          onTouchStart={isMobile ? () => handleTouchStart(item.label) : undefined}
          onTouchEnd={isMobile ? () => handleTouchEnd(item.href) : undefined}
        >
          <span></span>
        </div>
      ))}
    </div>
  );
}
