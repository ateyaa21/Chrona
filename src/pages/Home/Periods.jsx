import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { periods } from "../../data/periods/periods";
import { motion } from "framer-motion";

export default function Periods() {
  const ref = useRef(null);
  const navigate = useNavigate();

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
    <section className="bg-black text-white py-24">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6
        opacity-0 translate-y-10 transition-all duration-700"
      >

        <div className="max-w-2xl space-y-5 mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Timeline
          </p>
  
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Explore Historical Periods
          </h2>
  
          <p className="text-gray-400">
            Discover the major eras that shaped civilizations and defined history.
          </p>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
  
          {periods.map((period, i) => {
            const layout = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
            ];
  
            const style = layout[i % layout.length];
  
            return (
              <motion.div
                key={period.slug}
                onClick={() => navigate(`/sections/${period.slug}`)} // ✅ FIX ICI
  
                whileHover={{ scale: 1.02 }}
  
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer group
                  ${style}
                `}
              >
  
                <img
                  src={period.image}
                  className="absolute inset-0 w-full h-full object-cover
                  transition duration-700 group-hover:scale-110"
                />
  
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
  
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.15),transparent_70%)]
                transition duration-500" />
  
                <div className="relative z-10 h-full flex flex-col justify-end p-5">

  <h3 className="text-lg md:text-2xl font-semibold">
    {period.title}
  </h3>

  <p className="text-xs text-gray-400 mt-1">
    {period.label}
  </p>

  <div className="mt-2 w-0 h-[2px] bg-white
  group-hover:w-10 transition-all duration-300" />

</div>
  
              </motion.div>
            );
          })}
  
        </div>
  
      </div>
    </section>
  );
}