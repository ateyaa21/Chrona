import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    date: "508 BC",
    title: "Birth of Democracy",
    subtitle: "Athens leads the way",
    text: "A radical shift where citizens gained power to shape decisions.",
    image: "https://hpi.uq.edu.au/files/16723/atheniandemocracy_lowres.jpg",
  },
  {
    date: "537",
    title: "Hagia Sophia",
    subtitle: "Byzantine symbol",
    text: "A masterpiece blending engineering, faith, and imperial power.",
    image: "https://www.meisterdrucke.ie/kunstwerke/1260px/Byzantine_-_The_Zoe_Mosaic_Hagia_Sophia_Istanbul_-_%28MeisterDrucke-1126241%29.jpg",
  },
  {
    date: "1095",
    title: "The Crusades",
    subtitle: "Religious conflicts",
    text: "Wars reshaping cultures, trade, and global relations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg/1280px-Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg",
  },
  {
    date: "1789",
    title: "French Revolution",
    subtitle: "Modern politics",
    text: "The birth of liberty, equality, and political identity.",
    image: "https://cdn.britannica.com/40/257540-138-6E3B649C/liberty-leading-the-people-eugene-delacroix-explained.jpg?w=800&h=450&c=crop",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      <AnimatePresence mode="wait">
        <motion.img
          key={active.image}
          src={active.image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 w-full">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-w-xl"
            >

              <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
                Chrona Archive
              </p>

              <p className="text-sm text-gray-400">
                {active.date}
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                {active.title}
              </h1>

              <p className="text-lg text-gray-300">
                {active.subtitle}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {active.text}
              </p>

            </motion.div>
          </AnimatePresence>

          <div className="hidden md:flex flex-col justify-center gap-4 items-end">

            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`text-right transition ${
                  i === index
                    ? "opacity-100"
                    : "opacity-30 hover:opacity-60"
                }`}
              >
                <p className="text-sm text-gray-400">
                  {s.date}
                </p>
                <p className="text-lg font-medium">
                  {s.title}
                </p>
              </button>
            ))}

          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>

    </section>
  );
}