import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    // { name: "Periods", path: "/periods" },
    // { name: "Explore", path: "/explore" },
  ];

  const eras = [
    { name: "Antiquity", path: "/periods/antiquity" },
    { name: "Middle Ages", path: "/periods/middle-ages" },
    { name: "Renaissance", path: "/periods/rebirth" },
    { name: "Revolutions", path: "/periods/revolutions" },
  ];

  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">

      {/* TOP */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-5">
          <h2 className="text-white text-2xl font-semibold">
            Chrona
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
            A digital journey through the major eras of human history.
            Discover the events and figures that shaped civilizations.
          </p>

          <p className="text-xs text-gray-600 italic">
            "History is not the past — it is perspective."
          </p>
        </div>

        {/* NAV */}
        <div className="space-y-5">
          <h3 className="text-white text-sm uppercase tracking-widest">
            Navigation
          </h3>

          <div className="flex flex-col gap-3">
            {links.map((link, i) => (
              <NavLink key={i} to={link.path}>
                {({ isActive }) => (
                  <span
                    className={`text-sm transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ERAS */}
        <div className="space-y-5">
          <h3 className="text-white text-sm uppercase tracking-widest">
            Eras
          </h3>

          <div className="flex flex-col gap-3">
            {eras.map((era, i) => (
              <NavLink key={i} to={era.path}>
                <span className="text-sm text-gray-500 hover:text-white transition">
                  {era.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Chrona — All rights reserved
          </p>

        </div>

      </div>

    </footer>
  );
}