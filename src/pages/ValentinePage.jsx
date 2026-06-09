import { motion } from "framer-motion";
import { Heart, ImageIcon } from "lucide-react";
import FallingHearts from "../components/FallingHearts";
import TimeCounter from "../components/TimeCounter";
import SurpriseButton from "../components/SurpriseButton";
import Imagem1 from "../img/foto-1.jpeg"
import Imagem2 from "../img/foto-2.jpeg"
import Imagem3 from "../img/foto-3.jpeg"
import Imagem4 from "../img/foto-4.jpeg"
import Imagem5 from "../img/foto-5.jpeg"
import Imagem6 from "../img/foto-6.jpeg"
import Imagem7 from "../img/foto-7.jpeg"

// To replace photos: drop your image URLs into these arrays.
// Set the `main` photo for the hero placeholder, and `galleryPhotos` for the gallery.
const HERO_IMAGE = Imagem1; 

const GALLERY_PHOTOS = [
  {
    src: Imagem2,
    caption: "foto marcante",
    rotate: "-rotate-2",
  },
  {
    src: Imagem3,
    caption: "momentos especiais",
    rotate: "rotate-1",
  },
  {
    src: Imagem4,
    caption: "juntos sempre",
    rotate: "-rotate-1",
  },
  {
    src: Imagem5,
    caption: "minha pessoa favorita",
    rotate: "rotate-2",
  },
  {
    src: Imagem6,
    caption: "combinadinhos",
    rotate: "-rotate-1",
  },
  {
    src: Imagem7,
    caption: "uma dia marcante",
    rotate: "rotate-1",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const PhotoFrame = ({ src, caption, rotate = "", testid }) => (
  <motion.figure
    {...fadeUp}
    whileHover={{ y: -6, rotate: 0 }}
    className={`polaroid ${rotate} transition-transform duration-500`}
    data-testid={testid}
  >
    {src ? (
      <img
        src={src}
        alt={caption}
        className="w-full h-64 sm:h-72 object-cover"
        loading="lazy"
      />
    ) : (
      <div className="w-full h-64 sm:h-72 bg-[#FAF6F0] border border-dashed border-[#7A2021]/25 flex flex-col items-center justify-center text-[#7A2021]/70">
        <ImageIcon className="w-8 h-8 mb-2" strokeWidth={1.2} />
        <span className="text-xs uppercase tracking-[0.3em]">
          sua foto aqui
        </span>
      </div>
    )}
    <figcaption className="mt-4 text-center font-script text-2xl text-[#7A2021]">
      {caption}
    </figcaption>
  </motion.figure>
);

export default function ValentinePage() {
  return (
    <main className="relative min-h-screen paper-bg grain cursor-romantic overflow-x-hidden">
      <FallingHearts />

      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative z-[3] min-h-[90vh] px-6 sm:px-10 pt-20 pb-24 flex items-center"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full">
          {/* Text side */}
          <motion.div {...fadeUp} className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#7A2021] mb-6"
              data-testid="hero-eyebrow"
            >
              12 de Junho · Dia dos Namorados
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1 }}
              className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[#2C1E16] leading-[1.02] mb-4"
              data-testid="hero-title"
            >
              Feliz Dia dos
              <br />
              <span className="italic text-[#7A2021]">Namorados</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#7A2021] mb-8"
              data-testid="hero-name"
            >
              Victoria Leal
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.9 }}
              className="font-body text-base sm:text-lg text-[#5C4A42] max-w-md mx-auto md:mx-0 leading-relaxed italic"
            >
              Um pequeno cantinho da internet, escrito devagar, só pra dizer
              que você é a melhor parte dos meus dias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="mt-10 flex items-center gap-4 justify-center md:justify-start text-[#7A2021]"
            >
              <span className="h-px w-10 bg-[#7A2021]/40" />
              <Heart className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              <span className="text-xs uppercase tracking-[0.35em]">
                com amor, Chawan
              </span>
            </motion.div>
          </motion.div>

          {/* Hero image — replaceable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto md:ml-auto md:mr-0 max-w-md w-full"
            data-testid="hero-photo"
          >
            <div className="polaroid">
              <img
                src={HERO_IMAGE}
                alt="Espaço para nossa foto"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <figcaption className="mt-4 text-center font-script text-2xl text-[#7A2021]">
                eu &amp; você
              </figcaption>
            </div>
            <div className="absolute -top-6 -right-6 hidden sm:block">
              <Heart
                className="w-14 h-14 text-[#7A2021]/80 heart-pulse"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COUNTER */}
      <section
        data-testid="counter-section"
        className="relative z-[3] px-6 sm:px-10 py-24"
      >
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#7A2021] mb-4">
            o tempo do nosso amor
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#2C1E16]">
            Cada segundo, ao seu lado
          </h2>
          <div className="divider-flourish mt-8">
            <Heart className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <TimeCounter />
        </motion.div>
      </section>

      {/* LOVE LETTER */}
      <section
        data-testid="letter-section"
        className="relative z-[3] px-6 sm:px-10 py-24"
      >
        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto bg-white/75 backdrop-blur-md border border-[#7A2021]/10 shadow-[0_30px_60px_-30px_rgba(122,32,33,0.3)] rounded-sm p-8 sm:p-14"
        >
          <p className="font-script text-4xl sm:text-5xl text-[#7A2021] text-center mb-2">
            Minha Victoria,
          </p>
          <div className="divider-flourish mb-8">
            <Heart className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
          </div>

          <div className="font-body text-[#2C1E16] leading-loose text-base sm:text-lg space-y-5">
            <p>
              Eu queria escrever algo perfeito hoje, mas percebi que perfeito é
              só o jeito que você me olha quando acha que eu não estou
              prestando atenção. Então deixei a perfeição de lado e resolvi te
              dizer a verdade: você virou casa pra mim.
            </p>
            <p>
              Eu não sei explicar como uma única pessoa consegue ser ao mesmo
              tempo a calma que me acolhe e a aventura que me move. Mas você
              consegue. Você é a risada que me acorda, a paciência que me
              espera, o abraço que me lembra que o mundo lá fora pode esperar
              mais um pouquinho.
            </p>
            <p>
              <em>
                Obrigado por ser leve. Obrigado por ser corajosa. Obrigado por
                ser, com tanta delicadeza, completamente você.
              </em>
            </p>
            <p>
              Hoje é dia dos namorados, mas todo dia ao seu lado tem um
              cheirinho de coisa nova começando. E eu prometo continuar
              começando, com você, pra sempre.
            </p>
          </div>

          <div className="mt-10 text-right">
            <p className="font-script text-3xl text-[#7A2021]">
              Sempre seu,
            </p>
            <p className="font-script text-4xl text-[#7A2021] -mt-1">
              Chawan
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#5C4A42]">
              com todo amor que cabe no peito
            </p>
          </div>
        </motion.div>
      </section>

      {/* SURPRISE BUTTON */}
      <section
        data-testid="surprise-section"
        className="relative z-[3] px-6 sm:px-10 py-20 text-center"
      >
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#7A2021] mb-4">
            uma pequena surpresa
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#2C1E16] mb-3">
            Toca aqui, meu amor
          </h2>
          <p className="font-body italic text-[#5C4A42] mb-10">
            tem uma coisinha guardada só pra você
          </p>
          <SurpriseButton />
        </motion.div>
      </section>

      {/* GALLERY */}
      <section
        data-testid="gallery-section"
        className="relative z-[3] px-6 sm:px-10 py-24"
      >
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#7A2021] mb-4">
            nossa galeria
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#2C1E16]">
            Pequenas memórias, grandes amores
          </h2>
          <p className="mt-4 font-body italic text-[#5C4A42] max-w-xl mx-auto">
            os espaços em branco são pra colocarmos juntos as próximas
            lembranças.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {GALLERY_PHOTOS.map((p, i) => (
            <PhotoFrame
              key={i}
              src={p.src}
              caption={p.caption}
              rotate={p.rotate}
              testid={`gallery-photo-${i}`}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-[3] px-6 py-16 text-center">
        <div className="divider-flourish mb-8">
          <Heart className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
        </div>
        <p className="font-script text-3xl text-[#7A2021]">
          Chawan &amp; Victoria
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[#5C4A42]">
          feito com o coração · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
