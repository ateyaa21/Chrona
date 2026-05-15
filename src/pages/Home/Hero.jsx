import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    date: "508 BC",
    title: "Birth of Democracy",
    subtitle: "Athens leads the way",
    text: "In ancient Athens, a revolutionary political system began to take shape — one where citizens could directly participate in decision-making. This early form of democracy challenged traditional systems of power and laid the foundations for modern governance. Though limited in scope, it introduced ideas of civic responsibility, debate, and collective choice that continue to influence political systems around the world today.",
    image:
      "https://hpi.uq.edu.au/files/16723/atheniandemocracy_lowres.jpg",
  },
  {
    date: "537",
    title: "Hagia Sophia",
    subtitle: "Symbol of the Byzantine Empire",
    text: "Commissioned by Emperor Justinian I, Hagia Sophia stood as a masterpiece of engineering and ambition. Its massive dome and intricate mosaics symbolized the power and spiritual authority of the Byzantine Empire. For centuries, it remained the largest cathedral in the world, embodying a fusion of art, religion, and imperial identity that would influence architecture across cultures.",
    image:
      "https://www.meisterdrucke.ie/kunstwerke/1260px/Byzantine_-_The_Zoe_Mosaic_Hagia_Sophia_Istanbul_-_%28MeisterDrucke-1126241%29.jpg",
  },
  {
    date: "1095",
    title: "The Crusades",
    subtitle: "Religious conflicts",
    text: "Beginning in 1095, the Crusades were a series of religious wars that reshaped relations between East and West. Driven by faith, politics, and ambition, these campaigns left a lasting mark on territories, cultures, and belief systems. Beyond the battlefield, they opened new trade routes, intensified cultural exchanges, and deepened divisions that would echo through history.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg/1280px-Taking_of_Jerusalem_by_the_Crusaders%2C_15th_July_1099.jpg",
  },
  {
    date: "1789",
    title: "French Revolution",
    subtitle: "Rise of modern politics",
    text: "The French Revolution marked a turning point in history, challenging monarchy and redefining the relationship between the state and its people. Ideas of liberty, equality, and citizenship spread far beyond France, influencing revolutions and political thought worldwide. It signaled the emergence of modern political identity and the enduring struggle for rights and representation.",
    image:
      "https://cdn.britannica.com/40/257540-138-6E3B649C/liberty-leading-the-people-eugene-delacroix-explained.jpg?w=800&h=450&c=crop",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const touchStart = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center">
  
      <AnimatePresence>
        {slides.map((s, i) =>
          i === index && (
            <motion.img
              key={s.image}
              src={s.image}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 md:bg-black/70" />
  
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
          md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent
        "
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
  
        <div className="relative max-w-xl">
  
          <div className="h-[420px] flex flex-col justify-between">
  
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex flex-col h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
  
                <div className="space-y-4">
  
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    Chrona Archive
                  </p>
  
                  <p className="text-sm text-gray-400 tracking-widest">
                    {slide.date}
                  </p>
  
                  <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
                    {slide.title}
                  </h1>
  
                  <p className="text-lg text-gray-300">
                    {slide.subtitle}
                  </p>
  
                </div>
  
                <div className="mt-4 flex-1 overflow-hidden">
  
                  <p className="text-gray-400 leading-relaxed line-clamp-4">
                    {slide.text}
                  </p>
  
                </div>
  
              </motion.div>
            </AnimatePresence>
  
          </div>
  
        </div>
  
        <div className="hidden md:flex flex-col items-end gap-6">
  
          {slides.map((item, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer transition-all duration-300 text-right
                ${i === index ? "opacity-100" : "opacity-30 hover:opacity-60"}
              `}
            >
              <p className="text-sm text-gray-400">
                {item.date}
              </p>
              <p className="text-lg font-medium">
                {item.title}
              </p>
            </div>
          ))}
  
        </div>
  
      </div>
  
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6.5, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
  
    </section>
  );
}