import { motion } from "framer-motion";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="Luxury Hotel"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 tracking-[6px] uppercase text-yellow-400"
          >
            Luxury Resort
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl text-6xl font-bold leading-tight text-white md:text-7xl"
          >
            Discover the Perfect Stay for Your Next Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-gray-200"
          >
            Experience luxury accommodations, breathtaking destinations, and
            unforgettable memories in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="rounded-full bg-yellow-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-yellow-700">
              Book Your Stay
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black">
              Explore Hotels
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs uppercase tracking-[4px] text-white">
            Scroll
          </span>

          <div className="h-12 w-6 rounded-full border border-white flex justify-center">
            <motion.div
              animate={{ y: [2, 18, 2] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
