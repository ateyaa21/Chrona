import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AntiquityThemes() {
  const navigate = useNavigate();

  const themes = [
    {
      title: "Civilizations",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Egypt.Giza.Sphinx.02.jpg",
      slug: "egypt",
    },
    {
      title: "Power",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Alexander_the_Great_mosaic.jpg",
      slug: "alexander",
    },
    {
      title: "Culture",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ancient_Olympic_Games.jpg",
      slug: "olympics",
    },
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        <div>
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Explore
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Antiquity Themes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {themes.map((theme, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/events/${theme.slug}`)}
              className="relative cursor-pointer h-[260px] rounded-2xl overflow-hidden group"
            >

              <img
                src={theme.image}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              <div className="relative z-10 h-full flex items-end p-6">

                <h3 className="text-2xl font-semibold">
                  {theme.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}   