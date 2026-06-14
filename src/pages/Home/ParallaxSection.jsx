import { useEffect, useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = ref.current;
          if (!el) return;

          const rect = el.getBoundingClientRect();

          const offset = rect.top * 0.25;

          el.style.backgroundPosition = `center ${offset}px`;

          const opacity = Math.min(
            0.75,
            Math.max(0.55, 0.6 + rect.top * -0.0005)
          );

          el.style.setProperty("--overlay-opacity", opacity);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative h-[160vh] md:h-[180vh]
        flex items-center justify-center
        overflow-hidden
        bg-black
      "
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/f/f3/Comnenus_mosaics_Hagia_Sophia.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 0px",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "var(--overlay-opacity, 0.6)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

    </section>
  );
}