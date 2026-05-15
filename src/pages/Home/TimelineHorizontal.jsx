import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    year: "476",
    text: "Fall of the Western Roman Empire.",
    image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630/g_auto/f_auto/q_auto:eco/v1/gettyimages-802428712",
  },
  {
    year: "1492",
    text: "Columbus reaches the Americas.",
    image: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/6k8ZPDJrGGZLrhgmLOwqtw.jpeg",
  },
  {
    year: "1517",
    text: "Start of the Protestant Reformation.",
    image: "https://firstamendment.mtsu.edu/wp-content/uploads/sites/2/2023/06/Luther95theses_0.jpg",
  },
  {
    year: "1789",
    text: "French Revolution begins.",
    image: "https://cdn.britannica.com/40/257540-138-6E3B649C/liberty-leading-the-people-eugene-delacroix-explained.jpg?w=800&h=450&c=crop",
  },
  {
    year: "1914",
    text: "World War I begins.",
    image: "https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2018/11/800px-US_64th_regiment_celebrate_the_Armistice.jpg",
  },
  {
    year: "1969",
    text: "Moon landing.",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/464487main-as11-40-5886-full.jpg",
  },
];

export default function TimelineHorizontal() {
  const [index, setIndex] = useState(0);
  const active = events[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-28">
  
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        <div className="max-w-xl space-y-4">
          <p className="text-xs text-white/40 uppercase tracking-[0.4em]">
            Timeline
          </p>
  
          <h2 className="text-3xl md:text-5xl font-semibold">
            Key Moments
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10">
  
          <AnimatePresence mode="wait">
            <motion.div
              key={active.year}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[380px] md:h-[460px]"
            >

              <motion.img
                src={active.image}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
  
              <div className="absolute inset-0
                bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]"
              />

              <div className="relative z-10 h-full flex flex-col justify-end p-10 space-y-4">
  
                <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">
                  {active.year}
                </p>
  
                <h3 className="text-2xl md:text-4xl font-semibold leading-snug max-w-2xl">
                  {active.text}
                </h3>
  
              </div>
  
            </motion.div>
          </AnimatePresence>
  
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
  
          {events.map((event, i) => {
            const isActive = i === index;
  
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="relative px-2 py-1"
              >
  
                <span
                  className={`text-sm transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {event.year}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="timeline-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                  />
                )}
  
              </button>
            );
          })}
  
        </div>
  
      </div>
  
    </section>
  );
}