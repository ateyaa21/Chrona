import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
  ];

  useEffect(() => {
    let last = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 0) {
        setVisible(true);
      } else if (current > last) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      last = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="flex items-center px-6 pt-6">
  
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer md:hidden"
          >
            <span className="text-white font-semibold">
              Chrona
            </span>
          </div>
  
          <div
            className="hidden md:flex items-center gap-14 ml-auto
            bg-black/50 backdrop-blur-2xl border border-white/10
            px-6 py-3 rounded-full shadow-lg"
          >
  
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 pr-6 border-r border-white/10 cursor-pointer hover:opacity-80 transition"
            >
              <span className="text-white font-medium">
                Chrona
              </span>
            </div>
  
            {links.map((link, i) => (
              <NavLink key={i} to={link.path}>
                {({ isActive }) => (
                  <div className="relative text-base">
  
                    <span
                      className={`transition ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
  
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded-full"
                      />
                    )}
  
                  </div>
                )}
              </NavLink>
            ))}
  
          </div>
  
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
  
        </div>
      </motion.div>
  
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            />
  
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50
              w-[92%] max-w-sm rounded-2xl
              bg-black/80 backdrop-blur-2xl
              border border-white/10 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-white text-sm uppercase tracking-widest">
                  Menu
                </span>
  
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-lg"
                >
                  ✕
                </button>
              </div>
  
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-gray-300 hover:text-white transition text-lg">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
  
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-600">
                  Chrona — History Experience
                </p>
              </div>
  
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}