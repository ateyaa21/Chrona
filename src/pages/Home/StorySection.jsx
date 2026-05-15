import { useEffect, useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);

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
    <section className="bg-black text-white py-20 md:py-28">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6
        grid md:grid-cols-2 gap-12 md:gap-20 items-center
        opacity-0 translate-y-10 transition-all duration-700"
      >
  
        {/* IMAGE */}
        <div className="relative flex justify-center">
  
          <div className="
            relative w-[75%] sm:w-[60%] md:w-[80%]
            aspect-[3/4]
            rounded-2xl overflow-hidden
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.8)]
          ">
  
            <img
              src="https://panoramadelart.com/sites/default/files/filesPanorama/joconde_1.jpg"
              className="w-full h-full object-cover"
            />
  
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />
  
            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100
            bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.12),transparent_70%)]
            transition duration-500" />
  
          </div>
  
        </div>
  
        <div className="space-y-6 max-w-xl">

<p className="text-xs text-white/40 uppercase tracking-[0.4em]">
  Renaissance
</p>

<h2 className="text-3xl md:text-5xl font-semibold leading-tight">
  The Mona Lisa
</h2>

<div className="w-12 h-[2px] bg-white/30" />

<p className="text-gray-300 leading-relaxed">
  Painted by Leonardo da Vinci in the early 16th century, the Mona Lisa
  remains one of the most enigmatic and celebrated artworks in human history.
  Her subtle expression and lifelike presence continue to intrigue viewers
  across centuries.
</p>

<p className="text-gray-400 leading-relaxed">
  Beyond its technical mastery, the painting reflects the intellectual and
  artistic spirit of the Renaissance — a time when observation, emotion,
  and human identity became central to creation.
</p>

</div>
  
      </div>
    </section>
  );
}