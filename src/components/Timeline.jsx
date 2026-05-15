import { motion } from "framer-motion";

export default function Timeline({ events }) {
  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="relative">

          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-24">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8
                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >

                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                  <p className="text-sm text-gray-500">{event.year}</p>

                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="text-gray-400">
                    {event.text}
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    src={event.image}
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

      </div>

    </section>
  );
}