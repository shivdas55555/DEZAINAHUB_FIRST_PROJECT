import { FiArrowUpRight } from "react-icons/fi";

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    hotels: "320+ Hotels",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    hotels: "180+ Hotels",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    hotels: "250+ Hotels",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 4,
    name: "Maldives",
    country: "Indian Ocean",
    hotels: "120+ Resorts",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
  {
    id: 5,
    name: "Tokyo",
    country: "Japan",
    hotels: "290+ Hotels",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  },
  {
    id: 6,
    name: "Santorini",
    country: "Greece",
    hotels: "90+ Hotels",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
  },
];

const Destination = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-indigo-600 uppercase tracking-[0.3em] font-semibold">
            Top Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Beautiful Places
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Discover the world's most loved travel destinations and find your
            perfect stay with unforgettable experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="relative h-[420px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm text-white/80">{place.country}</p>

                <h3 className="text-3xl font-bold mt-1">{place.name}</h3>

                <div className="flex justify-between items-center mt-5">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                    {place.hotels}
                  </span>

                  <button className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
                    <FiArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
