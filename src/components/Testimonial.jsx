import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Williams",
    location: "New York, USA",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "StayGo made my vacation planning effortless. The hotels were amazing and the booking process was super smooth.",
    rating: 5,
  },
  {
    name: "James Anderson",
    location: "London, UK",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "The experience was incredible. I found a beautiful resort at the best price within minutes.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    location: "Sydney, Australia",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Excellent service and premium stays. I will definitely use StayGo for my next trip.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold">Testimonials</span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            What Our Travelers Say
          </h2>

          <p className="text-slate-500 mt-5">
            Thousands of travelers trust StayGo for their unforgettable hotel
            experiences.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              border
              border-slate-100
              "
            >
              {/* Stars */}

              <div className="flex gap-1 mb-6">
                {Array.from({ length: user.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="text-slate-600 leading-7">"{user.review}"</p>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={user.image}
                  className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  "
                  alt={user.name}
                />

                <div>
                  <h3 className="font-bold text-slate-900">{user.name}</h3>

                  <p className="text-sm text-slate-500">{user.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
