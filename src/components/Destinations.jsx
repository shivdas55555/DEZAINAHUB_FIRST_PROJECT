import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    title: "Maldives",
    hotels: "120+ Hotels",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
  },
  {
    id: 2,
    title: "Dubai",
    hotels: "90+ Hotels",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
  },
  {
    id: 3,
    title: "Switzerland",
    hotels: "65+ Hotels",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  },
  {
    id: 4,
    title: "Bali",
    hotels: "80+ Hotels",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
  },
];

export default function Destinations() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Popular Destinations
          </p>

          <h2 className="text-5xl font-bold mt-4">Explore Beautiful Places</h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Discover handpicked destinations filled with luxury stays,
            breathtaking scenery, and unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl h-[420px] cursor-pointer"
            >
              <img
                src={place.image}
                alt={place.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold">{place.title}</h3>

                <p className="text-white/90 mt-2">{place.hotels}</p>

                <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-yellow-500 hover:text-white">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
