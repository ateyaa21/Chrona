import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { figures } from "../../data/figures";

export default function Figures() {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(8);

  const eras = ["All", "Antiquity", "Middle Ages", "Rebirth", "Revolutions"];

  const filtered =
    filter === "All"
      ? figures
      : figures.filter((f) => f.era === filter);

  const displayed = filtered.slice(0, visible);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14
        opacity-0 translate-y-10 transition-all duration-700"
      >

        {/* HEADER */}
        <div className="text-center space-y-3 sm:space-y-5">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Stories of History
          </h2>

          <p className="text-gray-400 max-w-md sm:max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Explore the lives of individuals who shaped civilizations.
          </p>
        </div>

        {/* 🔥 NEW FILTER SYSTEM */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-2 sm:px-0 min-w-max justify-start sm:justify-center">

            {eras.map((era) => {
              const isActive = filter === era;

              return (
                <button
                  key={era}
                  onClick={() => {
                    setFilter(era);
                    setVisible(8);
                  }}
                  className="relative flex flex-col items-center pb-2"
                >

                  {/* LABEL */}
                  <span
                    className={`
                      text-sm transition-all duration-200
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/40 hover:text-white"
                      }
                    `}
                  >
                    {era}
                  </span>

                  {/* UNDERLINE INDICATOR */}
                  {isActive && (
                    <motion.div
                      layoutId="filter-underline"
                      className="absolute bottom-0 h-[2px] w-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

          </div>
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-3 sm:gap-4
          "
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((figure) => (
              <motion.div
                key={figure.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                onClick={() => navigate(`/figures/${figure.slug}`)}
                className="
                  relative 
                  h-[170px] sm:h-[220px] md:h-[260px]
                  rounded-xl overflow-hidden cursor-pointer group
                "
              >

                <img
                  src={figure.image}
                  alt={figure.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 space-y-0.5 sm:space-y-1">

                  <p className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
                    {figure.era}
                  </p>

                  <h3 className="text-[11px] sm:text-sm font-semibold leading-tight">
                    {figure.name}
                  </h3>

                  <p className="hidden sm:block text-xs text-gray-400">
                    {figure.role}
                  </p>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE */}
        {visible < filtered.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisible((v) => v + 8)}
              className="
                px-4 sm:px-5 py-2 text-xs sm:text-sm
                border border-white/20 rounded-lg
                hover:bg-white hover:text-black transition
              "
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}