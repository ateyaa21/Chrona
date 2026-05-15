import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { events } from "../../data/events";
import { revolutionsEvents } from "../../data/timelines/revolutions.js";

export default function Revolutions() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const timeline = revolutionsEvents.map((item) => {
    const full = events.find((e) => e.slug === item.slug);
    return { ...full, date: item.date };
  });

  return (
    <motion.section
      className="bg-black text-white min-h-screen"
      
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >

      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/05/La-Liberte-guidant-le-peuple-–-Eugene-Delacroix-1830-e1652197478920.jpg?fit=1200%2C681&ssl=1"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-12 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-gray-400 text-sm mb-2">Historical Period</p>

            <h1 className="text-4xl md:text-6xl font-semibold">
              Revolutions
            </h1>

            <p className="text-gray-300 mt-2 max-w-xl">
              Moments that reshaped the world through conflict, innovation and power shifts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        <div>

          <h2 className="text-3xl font-semibold mb-12">
            Key Moments
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10" />

            <div className="space-y-14">
              {timeline.map((event) => (
                <motion.div
                  key={event.slug}
                  onClick={() => navigate(`/content/${event.slug}`)}
                  onMouseEnter={() => setHovered(event)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-6 cursor-pointer group"
                >

                  <div className="w-3 h-3 rounded-full bg-white group-hover:scale-125 transition" />

                  <div className="flex gap-4 items-center">

                    <img
                      src={event.image}
                      className="w-20 h-20 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        {event.date}
                      </p>

                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-white transition">
                        {event.title}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {event.text}
                      </p>
                    </div>

                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </div>

        <div className="hidden md:block">

          <AnimatePresence mode="wait">
            {hovered && (
              <motion.div
                key={hovered.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
                className="sticky top-32 space-y-6"
              >

                <img
                  src={hovered.image}
                  className="w-full h-[260px] object-cover rounded-xl"
                />

                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    {hovered.date}
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {hovered.title}
                  </h2>

                  <p className="text-gray-400">
                    {hovered.content}
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </motion.section>
  );
}