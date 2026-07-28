import { FiHeart, FiMapPin, FiStar, FiArrowRight } from "react-icons/fi";

const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 249,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Ocean Paradise",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 329,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 199,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Royal Stay",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    price: 279,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Sunset Resort",
    location: "Bali",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 189,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Skyline Suites",
    location: "New York",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 359,
    rating: 5.0,
  },
];

const HotelGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-indigo-600 font-semibold uppercase tracking-widest">
              Featured Hotels
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Discover Your Next Stay
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
            View All
            <FiArrowRight />
          </button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <button className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition">
                  <FiHeart />
                </button>

                <div className="absolute bottom-5 left-5 bg-white px-3 py-1 rounded-full flex items-center gap-1 font-semibold shadow">
                  <FiStar className="text-yellow-500 fill-yellow-500" />
                  {hotel.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{hotel.name}</h3>

                <p className="flex items-center gap-2 text-gray-500 mt-2">
                  <FiMapPin />
                  {hotel.location}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <span className="text-3xl font-bold text-indigo-600">
                      ${hotel.price}
                    </span>

                    <span className="text-gray-500"> / night</span>
                  </div>

                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
                    Book Now
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

export default HotelGrid;
