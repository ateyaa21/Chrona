import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
  ];

  const eras = [
    { name: "Antiquity", path: "/periods/antiquity" },
    { name: "Middle Ages", path: "/periods/middle-ages" },
    { name: "Renaissance", path: "/periods/rebirth" },
    { name: "Revolutions", path: "/periods/revolutions" },
  ];

  return (
    <footer className="bg-[#111111] text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2
              className="
                text-2xl
                tracking-[0.25em]
                text-white
              "
            >
              {/* CHRONA  */} 
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-white/50
                max-w-xs
              "
            >
              A digital journey through the defining
              periods, events and civilizations that
              shaped human history.
            </p>
          </div>

          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#C8A96B]
                mb-5
              "
            >
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink key={link.path} to={link.path}>
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "text-white text-sm"
                          : "text-white/45 text-sm hover:text-white transition"
                      }
                    >
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#C8A96B]
                mb-5
              "
            >
              Periods
            </p>

            <div className="flex flex-col gap-3">
              {eras.map((era) => (
                <NavLink key={era.path} to={era.path}>
                  <span
                    className="
                      text-sm
                      text-white/45
                      hover:text-white
                      transition
                    "
                  >
                    {era.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-white/5" />

        <div
          className="
            mt-6
            flex
            flex-col
            sm:flex-row
            gap-2
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Chrona
          </p>

          <p className="text-xs text-white/20">
            Exploring history through design
          </p>
        </div>
      </div>
    </footer>
  );
}