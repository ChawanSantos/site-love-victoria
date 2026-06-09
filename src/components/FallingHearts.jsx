import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HEARTS_COUNT = 22;

// Floating, slow-falling hearts overlay (soft, romantic, low-opacity)
const FallingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: HEARTS_COUNT }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.18 + Math.random() * 0.22,
        hue: Math.random() > 0.5 ? "#7A2021" : "#E8C3C4",
      })),
    []
  );

  return (
    <div
      aria-hidden
      data-testid="falling-hearts"
      className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
    >
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: "-10vh", x: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, h.drift, -h.drift, 0],
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            color: h.hue,
          }}
        >
          <Heart
            style={{ width: h.size, height: h.size }}
            fill="currentColor"
            strokeWidth={0}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingHearts;
