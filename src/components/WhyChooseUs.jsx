import { motion } from "framer-motion";
import { FaBed, FaConciergeBell, FaGlassCheers, FaLeaf } from "react-icons/fa";

import hero from "../assets/hero.png";

const features = [
  {
    icon: <FaBed />,
    title: "Luxury Rooms",
    desc: "Beautifully designed suites with premium comfort and stunning interiors.",
  },
  {
    icon: <FaConciergeBell />,
    title: "24/7 Concierge",
    desc: "Our dedicated team is always available to make your stay effortless.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Fine Dining",
    desc: "Taste world-class cuisine prepared by award-winning chefs.",
  },
  {
    icon: <FaLeaf />,
    title: "Peaceful Environment",
    desc: "Escape the busy city and relax in a calm, luxurious atmosphere.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={hero}
              alt=""
              className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl px-8 py-6 shadow-xl">
              <h2 className="text-4xl font-bold text-yellow-600">15+</h2>

              <p className="text-gray-600 mt-2">Years of Luxury Hospitality</p>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[6px] text-yellow-600 font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Experience Luxury
              <br />
              Beyond Expectations
            </h2>

            <p className="mt-8 text-gray-500 leading-8">
              Every detail has been carefully designed to provide an
              unforgettable stay—from elegant accommodations to exceptional
              service and breathtaking experiences.
            </p>

            <div className="mt-12 grid gap-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 rounded-3xl bg-white p-6 shadow-lg"
                >
                  <div className="h-16 w-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl text-yellow-600">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-2 text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="mt-12 rounded-full bg-black px-10 py-4 text-white transition hover:bg-yellow-600">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
