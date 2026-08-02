import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaSpa,
  FaUtensils,
  FaWifi,
  FaDumbbell,
  FaShuttleVan,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaSwimmingPool />,
    title: "Infinity Pool",
    desc: "Relax in our rooftop infinity pool with breathtaking panoramic views.",
  },
  {
    icon: <FaSpa />,
    title: "Luxury Spa",
    desc: "Rejuvenate your body and mind with world-class wellness treatments.",
  },
  {
    icon: <FaUtensils />,
    title: "Fine Dining",
    desc: "Experience gourmet cuisine prepared by internationally acclaimed chefs.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    desc: "Stay connected with complimentary ultra-fast internet access.",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Center",
    desc: "Modern gym equipped with premium fitness machines and trainers.",
  },
  {
    icon: <FaShuttleVan />,
    title: "Airport Transfer",
    desc: "Enjoy seamless luxury transportation from airport to hotel.",
  },
];

export default function LuxuryAmenities() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-yellow-600 font-semibold">
            Luxury Amenities
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Everything You Need For
            <br />A Perfect Stay
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-8">
            We combine exceptional hospitality with luxurious facilities to
            create unforgettable experiences for every guest.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 transition-all duration-300 hover:border-yellow-500 hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl text-yellow-600 transition-all duration-300 group-hover:bg-yellow-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">{item.desc}</p>

              <button className="mt-8 font-semibold text-yellow-600 transition-all duration-300 hover:translate-x-2">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
