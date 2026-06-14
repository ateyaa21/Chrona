import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    date: "537",
    title: "Hagia Sophia",
    subtitle: "Byzantine symbol",
    image:
      "https://smarthistory.org/wp-content/uploads/2021/01/Deesis-scaled.jpg",
  },
  {
    date: "508 BC",
    title: "Birth of Democracy",
    subtitle: "Athens leads the way",
    image:
      "https://hpi.uq.edu.au/files/16723/atheniandemocracy_lowres.jpg",
  },
  
  {
    date: "1095",
    title: "The Crusades",
    subtitle: "Religious conflicts",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg/1280px-Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg",
  },
  {
    date: "1789",
    title: "French Revolution",
    subtitle: "Modern politics",
    image:
      "https://cdn.britannica.com/40/257540-138-6E3B649C/liberty-leading-the-people-eugene-delacroix-explained.jpg?w=800&h=450&c=crop",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const active = slides[index];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={active.image}
          src={active.image}
          alt={active.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-sm tracking-[0.4em] text-white/50 uppercase">
                {active.date}
              </p>

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-semibold
                  leading-[0.9]
                "
              >
                {active.title}
              </h1>

              <p
                className="
                  mt-6
                  text-lg
                  md:text-2xl
                  text-white/70
                "
              >
                {active.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div
            className="
              mt-16
              flex
              flex-wrap
              gap-6
              md:gap-10
            "
          >
            {slides.map((slide, i) => (
              <button
                key={slide.date}
                onClick={() => setIndex(i)}
                className="text-left"
              >
                <p
                  className={
                    i === index
                      ? "text-white text-lg"
                      : "text-white/35 text-lg hover:text-white/70 transition"
                  }
                >
                  {slide.date}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
            ease: "linear",
          }}
          className="h-full bg-white"
        />
      </div>
    </section>
  );
}