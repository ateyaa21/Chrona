import { useEffect, useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-12");
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white py-28 md:py-40">

      <div
        ref={ref}
        className="
          max-w-7xl mx-auto px-6
          grid md:grid-cols-2 gap-16 md:gap-24 items-center
          opacity-0 translate-y-12 transition-all duration-700
        "
      >

        <div className="relative">

          <div className="
            relative w-full
            aspect-[4/5]
            rounded-3xl overflow-hidden
            border border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.9)]
          ">

            <img
              src="https://panoramadelart.com/sites/default/files/filesPanorama/joconde_1.jpg"
              className="w-full h-full object-cover scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="
              absolute inset-0 opacity-0 hover:opacity-100
              bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.12),transparent_70%)]
              transition duration-500
            " />

          </div>

        </div>

        <div className="space-y-8 max-w-xl">

          <p className="text-xs text-white/40 uppercase tracking-[0.4em]">
            Historical Insight
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            A Defining Moment
          </h2>

          <div className="w-14 h-[2px] bg-white/30" />

          <p className="text-gray-300 leading-relaxed text-lg">
            This moment represents a key point in history, where ideas, power or
            innovation reshaped the direction of civilizations. It reflects the
            complexity of human ambition and the forces that drive change across time.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Beyond the event itself, it reveals deeper patterns — how societies
            evolve, how influence spreads, and how certain moments leave a lasting
            imprint on the world we know today.
          </p>

        </div>

      </div>

    </section>
  );
}