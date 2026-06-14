import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { periods } from "../../data/periods/periods";
import { motion } from "framer-motion";

export default function Periods() {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-8");
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const layouts = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
  ];

  return (
    <section className="bg-[#111111] text-white py-20 md:py-28">
      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-5
          opacity-0
          translate-y-8
          transition-all
          duration-700
        "
      >
        <div className="max-w-2xl mb-14 md:mb-16">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#C8A96B]
            "
          >
            Historical Archive
          </p>

          <h2
            className="
              mt-4
              text-3xl
              md:text-4xl
              leading-none
            "
          >
            Explore Historical Periods
          </h2>

          <p
            className="
              mt-4
              text-sm
              md:text-base
              text-white/55
              max-w-xl
            "
          >
            Journey through the defining eras that shaped
            civilizations, empires and cultures.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            auto-rows-[140px]
            md:auto-rows-[160px]
          "
        >
          {periods.map((period, i) => {
            const layout = layouts[i % layouts.length];

            return (
              <motion.article
                key={period.slug}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() =>
                  navigate(`/sections/${period.slug}`)
                }
                className={`
                  relative
                  overflow-hidden
                  rounded-2xl
                  cursor-pointer
                  group
                  border
                  border-white/5
                  ${layout}
                `}
              >
                <img
                  src={period.image}
                  alt={period.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/25
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.15),transparent_70%)]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    h-full
                    p-4
                    flex
                    flex-col
                    justify-end
                  "
                >
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#C8A96B]
                    "
                  >
                    {period.label}
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      md:text-lg
                      leading-tight
                    "
                  >
                    {period.title}
                  </h3>

                  <div
                    className="
                      mt-3
                      h-[1px]
                      w-0
                      bg-[#C8A96B]
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}