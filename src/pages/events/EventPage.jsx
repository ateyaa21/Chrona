import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../../data/events";

export default function EventPage() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Not found
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">

      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.img
          src={event.image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-end pb-24 px-6">
          <div className="max-w-6xl mx-auto space-y-6">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-semibold leading-tight"
            >
              {event.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl"
            >
              {event.text}
            </motion.p>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 space-y-40">

        {event.intro && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-xl text-gray-300 leading-relaxed"
          >
            {event.intro}
          </motion.div>
        )}

        {event.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >

            <div className="space-y-6">
              <h2 className="text-4xl font-semibold">
                {event.highlight.title}
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                {event.highlight.text}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-[320px] rounded-xl overflow-hidden"
            >
              <img
                src={event.highlight.image}
                className="w-full h-full object-cover"
              />
            </motion.div>

          </motion.div>
        )}

        {event.facts && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {event.facts.map((fact, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {fact.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {event.sections && (
          <div className="space-y-40">
            {event.sections.map((section, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >

                  <div
                    className={`max-w-xl ${
                      isLeft ? "ml-0" : "ml-auto"
                    } space-y-6`}
                  >
                    <h2 className="text-3xl font-semibold">
                      {section.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      {section.text}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`mt-12 w-[85%] md:w-[60%] h-[320px] rounded-xl overflow-hidden
                      ${isLeft ? "ml-auto" : "mr-auto"}
                    `}
                  >
                    <img
                      src={section.image}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                </motion.div>
              );
            })}
          </div>
        )}

        {event.timeline && (
          <div className="space-y-16">

            <h2 className="text-4xl font-semibold text-center">
              Timeline
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {event.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="border border-white/10 bg-white/5 p-6 rounded-xl"
                >
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>

          </div>
        )}

        {event.gallery && (
          <div className="grid md:grid-cols-3 gap-6">
            {event.gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="h-56 rounded-xl overflow-hidden"
              >
                <img src={img} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        )}

        {event.impact && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="text-3xl font-semibold">Impact</h2>

            {event.impact.map((item, i) => (
              <p key={i} className="text-gray-400 text-lg leading-relaxed">
                {item}
              </p>
            ))}
          </motion.div>
        )}

        {event.legacy && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="text-3xl font-semibold">Legacy</h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {event.legacy}
            </p>
          </motion.div>
        )}

        {event.quote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-4xl md:text-5xl italic text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "{event.quote}"
            </p>
          </motion.div>
        )}

      </div>

    </section>
  );
}