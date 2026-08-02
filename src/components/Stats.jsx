import { motion } from "framer-motion";
import { FaHotel, FaUsers, FaGlobeAsia, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaHotel />,
    number: "500+",
    title: "Luxury Hotels",
  },
  {
    icon: <FaUsers />,
    number: "25K+",
    title: "Happy Guests",
  },
  {
    icon: <FaGlobeAsia />,
    number: "120+",
    title: "Destinations",
  },
  {
    icon: <FaAward />,
    number: "15+",
    title: "Awards Won",
  },
];

export default function Stats() {
  return (
    <section className="py-28 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Trusted Around The World
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            We provide exceptional hospitality experiences with luxurious
            accommodations and world-class service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white p-10 text-center shadow-xl hover:shadow-2xl transition"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl text-yellow-600">
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-500">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
