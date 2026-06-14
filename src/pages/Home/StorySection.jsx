import { useEffect, useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);

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

  return (
    <section className="bg-[#111111] text-white py-20 md:py-24">
      <div
        ref={ref}
        className="
          max-w-6xl
          mx-auto
          px-5
          grid
          md:grid-cols-[380px_1fr]
          gap-10
          md:gap-16
          items-center
          opacity-0
          translate-y-8
          transition-all
          duration-700
        "
      >
        <div className="relative">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              aspect-[4/5]
            "
          >
            <img
              src="https://panoramadelart.com/sites/default/files/filesPanorama/joconde_1.jpg"
              alt="Historical artwork"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="max-w-xl">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#C8A96B]
            "
          >
            Historical Insight
          </p>

          <h2
            className="
              mt-4
              text-3xl
              md:text-5xl
              leading-none
            "
          >
            A Defining Moment
          </h2>

          <div
            className="
              mt-5
              w-10
              h-[1px]
              bg-[#C8A96B]
            "
          />

          <p
            className="
              mt-6
              text-sm
              md:text-base
              leading-relaxed
              text-white/65
            "
          >
            This moment represents a turning point where
            ideas, power and innovation transformed the
            direction of entire civilizations.
          </p>

          <p
            className="
              mt-4
              text-sm
              md:text-base
              leading-relaxed
              text-white/45
            "
          >
            Beyond the event itself, it reveals how
            societies evolve, how influence spreads and
            how history leaves a lasting mark across
            generations.
          </p>
        </div>
      </div>
    </section>
  );
}