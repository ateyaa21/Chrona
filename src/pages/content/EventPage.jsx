import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../../data/events";
import { figures } from "../../data/figures/figures";

export default function EventPage() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const figure = figures.find((f) => f.slug === slug);
  const data = event || figure;

  if (!data) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex items-center justify-center">
        Not found
      </div>
    );
  }

  return (
    <section className="bg-[#111111] text-white min-h-screen overflow-hidden">

      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.img
          src={data.image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-end pb-20 px-6">
          <div className="max-w-5xl mx-auto space-y-5">

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {data.title}
            </h1>

            <p className="text-gray-300 max-w-2xl">
              {data.text}
            </p>

          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 space-y-24">

        {/* INTRO */}
        {data.intro && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {data.intro}
          </motion.p>
        )}

        {data.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              {data.highlight.title}
            </h2>

            <p className="text-gray-400">
              {data.highlight.text}
            </p>

            <div className="h-[320px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src={data.highlight.image}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {data.facts && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {data.facts.map((fact, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-lg p-5 bg-white/5"
              >
                <h3 className="font-semibold">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.text}</p>
              </div>
            ))}
          </motion.div>
        )}

        {data.sections && (
          <div className="space-y-20">
            {data.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold">
                  {section.title}
                </h2>

                <p className="text-gray-400">
                  {section.text}
                </p>

                <div className="h-[320px] md:h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={section.image}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {data.timeline && (
          <section className="pt-10">

            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-semibold">
                Timeline
              </h2>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Key moments that shaped this event.
              </p>
            </div>

            <div className="relative">

              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

              <div className="space-y-24">
                {data.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center gap-8
                    ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >

                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                      <p className="text-sm text-gray-500">{item.year}</p>

                      <h3 className="text-2xl md:text-3xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-gray-400">
                        {item.text}
                      </p>
                    </div>

                    <div className="w-full md:w-1/2">
                      <img
                        src={item.image}
                        className="w-full h-[220px] md:h-[280px] object-cover rounded-2xl"
                      />
                    </div>

                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>

          </section>
        )}

        {data.impact && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Impact</h2>

            {data.impact.map((item, i) => (
              <p key={i} className="text-gray-400">
                {item}
              </p>
            ))}
          </motion.div>
        )}

        {data.quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center pt-10"
          >
            <p className="text-2xl md:text-3xl italic text-gray-300">
              "{data.quote}"
            </p>
          </motion.div>
        )}

      </div>

    </section>
  );
}