import { motion } from "framer-motion";
import { FaStar, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import hotels from "../data/hotels";

export default function HotelGrid() {
  return (
    <section className="bg-[#f8f6f2] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Featured Hotels
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Luxury Stays
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Hand-picked luxury resorts and premium hotels for unforgettable
            experiences around the world.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-[28px] bg-white shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />

                <button className="absolute right-5 top-5 h-11 w-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
                  <FaHeart className="text-gray-700 hover:text-red-500 transition" />
                </button>

                <div className="absolute left-5 top-5 rounded-full bg-yellow-600 px-4 py-2 text-sm text-white">
                  Premium
                </div>
              </div>

              <div className="p-7">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">{hotel.name}</h3>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />

                    <span>{hotel.rating}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-gray-500">
                  <FaMapMarkerAlt />

                  {hotel.location}
                </div>

                <div className="mt-7 flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-yellow-600">
                      ${hotel.price}
                    </span>

                    <span className="text-gray-500">/ night</span>
                  </div>

                  <button className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
