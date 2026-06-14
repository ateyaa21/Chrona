import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPeriods = () => {
    const section = document.getElementById("periods");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          max-w-6xl
          mx-auto
          h-20
          px-6
          flex
          items-center
          justify-between
        "
      >
        <button
          onClick={() => navigate("/")}
          className="
            text-white
            text-lg
            font-semibold
            tracking-[0.35em]
            cursor-pointer
          "
        >
          {/* CHRONA  */} 
        </button>

        <div
          className="
            flex
            items-center
            gap-8
            text-sm
            tracking-widest
            uppercase
          "
        >
          <button
            onClick={scrollToPeriods}
            className="
              text-white/60
              hover:text-white
              transition
            "
          >
            Explore
          </button>
        </div>
      </div>
    </motion.header>
  );
}