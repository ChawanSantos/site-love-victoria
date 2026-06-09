import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
};

const SurpriseButton = () => {
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setRunning(true);
    // Soft stop after a few seconds (confetti continues falling already on screen)
    window.setTimeout(() => setRunning(false), 6500);
  };

  return (
    <>
      {/* Confetti renders on top of everything */}
      {running && (
        <div className="fixed inset-0 pointer-events-none z-[80]">
          <Confetti
            width={width}
            height={height}
            numberOfPieces={260}
            recycle={false}
            gravity={0.18}
            colors={[
              "#7A2021",
              "#E8C3C4",
              "#F4E3E3",
              "#FDFBF7",
              "#C98A8B",
              "#5A1517",
            ]}
          />
        </div>
      )}

      <motion.button
        data-testid="surprise-button"
        onClick={handleOpen}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="btn-burgundy inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm sm:text-base uppercase tracking-[0.28em]"
      >
        <Heart className="w-4 h-4" fill="currentColor" strokeWidth={0} />
        <span className="font-body">Abrir Surpresa</span>
        <Heart className="w-4 h-4" fill="currentColor" strokeWidth={0} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="surprise-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center px-4"
          >
            <div
              className="absolute inset-0 bg-[#2C1E16]/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.85, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] border border-[#7A2021]/20 rounded-sm shadow-2xl p-8 sm:p-12 text-center"
            >
              <button
                aria-label="Fechar"
                data-testid="surprise-close"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#5C4A42] hover:text-[#7A2021] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-6">
                <Heart
                  className="w-12 h-12 text-[#7A2021] heart-pulse"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>

              <p className="font-script text-4xl sm:text-5xl text-[#7A2021] mb-6 leading-tight">
                Para sempre, Victoria
              </p>

              <p className="font-body text-[#2C1E16] leading-relaxed text-base sm:text-lg italic">
                "Em cada batida do meu coração, há uma promessa silenciosa:
                continuar te escolhendo, todos os dias, em todas as versões
                possíveis dessa vida."
              </p>

              <div className="divider-flourish my-8">
                <Heart className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </div>

              <p className="font-serif-display text-lg text-[#5C4A42]">
                Feliz Dia dos Namorados, meu amor.
              </p>
              <p className="font-script text-3xl text-[#7A2021] mt-3">
                — Chawan
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SurpriseButton;
