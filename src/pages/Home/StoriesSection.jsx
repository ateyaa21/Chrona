import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stories } from "../../data/periods/stories/stories";
import { motion, AnimatePresence } from "framer-motion";

export default function StoriesSection() {

  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);
  
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        <div className="max-w-2xl space-y-4">
          <p className="text-xs text-white/40 uppercase tracking-[0.4em]">
            Explorer
          </p>
  
          <h2 className="text-3xl md:text-5xl font-semibold">
            History Atlas
          </h2>
  
          <p className="text-gray-400">
            Navigate through civilizations and explore their defining moments.
          </p>
        </div>
  
        <div className="relative min-h-[500px]">
  
          <AnimatePresence mode="wait">
  
            {selected === null && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stories.map((story, i) => (
                  <div
                    key={i}
                    onClick={() => setSelected(i)}
                    className="relative h-[220px] rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={story.image}
                      className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
  
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition" />
  
                    <div className="absolute inset-0 flex items-end p-5">
                      <h3 className="text-lg font-semibold">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
  
            {selected !== null && stories[selected] && (
              <motion.div
                key="events"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >

                <button
                  onClick={() => setSelected(null)}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  ← Back
                </button>
  
                <div className="grid md:grid-cols-2 gap-6">
  
                  {stories[selected].items?.map((item, i) => {
  
                    if (!item.slug) return null;
  
                    return (
                      <div
                        key={i}
                        onClick={() => navigate(`/events/${item.slug}`)}
                        className="
                          relative h-48 rounded-2xl overflow-hidden
                          cursor-pointer group border border-white/10
                        "
                      >
  
                        <img
                          src={item.image}
                          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />
  
                        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition" />
  
                        <div className="relative z-10 h-full flex items-end p-5">
                          <h3 className="text-lg">
                            {item.name}
                          </h3>
                        </div>
  
                      </div>
                    );
                  })}
  
                </div>
  
              </motion.div>
            )}
  
          </AnimatePresence>
  
        </div>
  
      </div>
    </section>
  );
}