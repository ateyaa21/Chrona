import { useParams } from "react-router-dom";
import { figures } from "../../data/figures";
import { motion } from "framer-motion";

export default function FigurePage() {
  const { slug } = useParams();
  const figure = figures.find((f) => f.slug === slug);

  if (!figure) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Not found
      </div>
    );
  }

  return (
    <motion.section
      className="bg-black text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      <div className="relative h-[75vh] w-full overflow-hidden">

        <motion.img
          src={figure.image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6 }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 h-full flex items-end pb-20 px-6">
          <div className="max-w-6xl mx-auto w-full space-y-5">

            <motion.p
              className="text-gray-400 text-xs tracking-[0.4em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {figure.era}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {figure.name}
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {figure.role}
            </motion.p>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        <motion.div
          className="max-w-3xl text-xl text-gray-300 leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>
            {figure.name} emerged as a defining force during the {figure.era},
            reshaping the balance of power and influencing the direction of history.
          </p>

          <p>
            Through vision, ambition and strategic action, their legacy extended
            beyond their time, leaving a lasting imprint on civilization.
          </p>
        </motion.div>

        <motion.div
          className="relative w-full h-[420px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src={figure.image}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">

          <motion.div
            className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl text-white font-semibold">
              Influence & Power
            </h2>

            <p>
              {figure.name} did not simply exist within history — they shaped it.
              Their actions redefined authority, leadership and influence during
              the {figure.era} era.
            </p>

            <p>
              Their ability to navigate conflict, strategy and ambition allowed
              them to transform entire systems and redefine power structures.
            </p>

            <p>
              Even today, their legacy continues to inspire, challenge and
              influence the modern world.
            </p>
          </motion.div>

          <motion.div
            className="relative border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />

            <div className="relative space-y-6">

              {[
                { label: "Era", value: figure.era },
                { label: "Role", value: figure.role },
                { label: "Influence", value: "Global" },
                { label: "Legacy", value: "Enduring" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-3"
                >
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    {item.label}
                  </p>

                  <p className="text-white font-medium text-right">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed">
            "History is shaped by those who dare to redefine it."
          </p>
        </motion.div>

        <motion.div
          className="border border-white/10 rounded-2xl p-12 text-gray-400 leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-white text-2xl font-semibold">
            Lasting Legacy
          </h2>

          <p>
            The impact of {figure.name} continues to influence modern thought,
            demonstrating how individual ambition and vision can alter the
            trajectory of entire civilizations.
          </p>

          <p>
            Their story is not just history — it is a reflection of power,
            influence and transformation that still resonates today.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}