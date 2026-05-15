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
  <footer className="bg-black text-gray-400 border-t border-black/10">

    <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-14">

      <div className="space-y-6">
        <h2 className="text-white text-2xl font-semibold tracking-tight">
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

      <div className="space-y-6">
        <h3 className="text-white text-xs uppercase tracking-[0.3em] text-gray-500">
          Navigation
        </h3>

        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <NavLink key={i} to={link.path}>
              {({ isActive }) => (
                <span
                  className={`text-sm transition ${
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

      <div className="space-y-6">
        <h3 className="text-white text-xs uppercase tracking-[0.3em] text-gray-500">
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

    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Chrona
      </p>

      <p className="text-xs text-gray-700 hidden sm:block">
        Built with precision & simplicity
      </p>

    </div>

  </footer>
);
}