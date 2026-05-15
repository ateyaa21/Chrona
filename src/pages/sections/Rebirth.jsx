import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { events } from "../../data/events";
import { rebirthEvents } from "../../data/timelines/rebirth.js";

export default function Rebirth() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const timeline = rebirthEvents.map((item) => {
    const full = events.find((e) => e.slug === item.slug);
    return { ...full, date: item.date };
  });

  return (
    <motion.section
      className="bg-black text-white min-h-screen"

      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >

      <div className="relative h-[60vh] w-full overflow-hidden">

        <motion.img
          src="https://64.media.tumblr.com/eebc93a682174a081b4ea5a3fbfcb294/1cc7351d5b8d84f2-e0/s1280x1920/1c01d3531726be97d466b5c69406002c28a46019.pnj"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-12 px-6">
          <div className="max-w-5xl mx-auto w-full">

            <motion.p
              className="text-gray-400 text-sm mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Historical Period
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Renaissance
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-2 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A rebirth of art, science and human thought.
            </motion.p>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        <div>

          <motion.h2
            className="text-3xl font-semibold mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Key Moments
          </motion.h2>

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

                  <div className="w-3 h-3 rounded-full bg-white" />

                  <div className="flex gap-4 items-center">

                    <img
                      src={event.image}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        {event.date}
                      </p>

                      <h3 className="text-lg font-semibold">
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

                <motion.img
                  src={hovered.image}
                  className="w-full h-[260px] object-cover rounded-xl"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                />

                <h2 className="text-2xl font-semibold">
                  {hovered.title}
                </h2>

                <p className="text-gray-400">
                  {hovered.content}
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </motion.section>
  );
}