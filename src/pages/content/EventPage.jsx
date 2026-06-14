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
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#111111] text-white">
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-5xl
                md:text-7xl
                leading-[0.9]
                max-w-4xl
              "
            >
              {data.title}
            </motion.h1>

            <p className="mt-6 text-white/70 max-w-2xl">
              {data.text}
            </p>
          </div>
        </div>
      </section>

      {data.facts && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-4">
            {data.facts.map((fact, i) => (
              <div
                key={i}
                className="
                  p-6
                  rounded-2xl
                  bg-white/[0.03]
                  border
                  border-white/5
                "
              >
                <p className="text-[#C8A96B] text-sm">
                  {fact.title}
                </p>

                <h3 className="mt-2 text-xl">
                  {fact.text}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.intro && (
        <section className="max-w-5xl mx-auto px-6 py-10">
          <p
            className="
              text-lg
              leading-relaxed
              text-white/75
            "
          >
            {data.intro}
          </p>
        </section>
      )}

      {data.timeline && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl mb-16">
            Timeline
          </h2>

          <div className="space-y-12">
            {data.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="
                  grid
                  md:grid-cols-2
                  gap-8
                  items-center
                "
              >
                <div>
                  <p className="text-[#C8A96B]">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/60">
                    {item.text}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-[260px]
                      object-cover
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {data.quote && (
        <section className="max-w-5xl mx-auto px-6 py-24">
          <blockquote
            className="
              text-center
              text-3xl
              md:text-5xl
              text-white/80
              italic
            "
          >
            "{data.quote}"
          </blockquote>
        </section>
      )}
    </main>
  );
}