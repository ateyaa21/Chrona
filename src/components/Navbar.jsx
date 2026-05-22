import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [{ name: "Home", path: "/" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div
            onClick={() => navigate("/")}
            className="text-white font-semibold text-lg cursor-pointer tracking-wide"
          >
            Chrona
          </div>

          <nav className="hidden md:flex items-center gap-10">

            {links.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {({ isActive }) => (
                  <div className="relative group">

                    <span
                      className={`transition ${
                        isActive
                          ? "text-white"
                          : "text-white/50 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>

                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 -bottom-1 h-[2px] bg-white"
                      style={{
                        width: isActive ? "100%" : "0%",
                      }}
                    />

                  </div>
                )}
              </NavLink>
            ))}

          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                fixed inset-0 z-50 flex flex-col items-center justify-center
                bg-black
              "
            >

              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl"
              >
                ✕
              </button>

              <div className="flex flex-col gap-10 text-center">

                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-3xl text-white/70 hover:text-white transition">
                      {link.name}
                    </span>
                  </NavLink>
                ))}

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}