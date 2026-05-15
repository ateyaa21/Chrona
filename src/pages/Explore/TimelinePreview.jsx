import { motion } from "framer-motion";

const events = [
  {
    year: "476",
    title: "Fall of Rome",
    text: "The Western Roman Empire collapsed, marking the end of Antiquity.",
    image:
      "https://www.dailyartmagazine.com/wp-content/uploads/2020/05/Vincenzo_Camuccini_-_La_morte_di_Cesare-1-1024x581.jpg",
  },
  {
    year: "1492",
    title: "Columbus Voyage",
    text: "Christopher Columbus reached the Americas, reshaping global history.",
    image:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Unknown_Artist_-_The_first_trip_Christopher_Columbus_greeting_Queen_Isabella_of_Castile_to_the_po_-_%28MeisterDrucke-919749%29.jpg",
  },
  {
    year: "1517",
    title: "Reformation",
    text: "Martin Luther challenged the Catholic Church, transforming religion in Europe.",
    image:
      "https://www.freespeechhistory.com/wp-content/uploads/2018/06/Лютер_в_Вормсе-scaled.jpg",
  },
  {
    year: "1789",
    title: "French Revolution",
    text: "The monarchy collapsed, introducing modern political ideas.",
    image:
      "https://cdn.thecollector.com/wp-content/uploads/2021/09/french-revolution-david-coronation-napoleon.jpg?width=1273&quality=100&dpr=2",
  },
  {
    year: "1914",
    title: "World War I",
    text: "A global conflict that reshaped borders and politics.",
    image:
      "https://cdn.britannica.com/44/65944-050-F18FEEA4/soldier-British-trench-Western-Front-World-War.jpg",
  },
  {
    year: "1969",
    title: "Moon Landing",
    text: "Humanity reached the Moon for the first time.",
    image:
      "https://hips.hearstapps.com/vidthumb/0b749318-af2a-4f75-8c85-4bec898e17da/thumb_1280x720_00002_1689867892_80185.jpg?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=810%3A*&quality=70",
  },
];

export default function TimelinePremium() {
  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold">
            Timeline of History
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A chronological journey through major events that shaped the world.
          </p>
        </div>

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