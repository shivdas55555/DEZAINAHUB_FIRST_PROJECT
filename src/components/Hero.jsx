import { ArrowRight, Play, Star, MapPin } from "lucide-react";
const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945";

function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-sky-100 via-white to-cyan-100"></div>

      {/* Decorative Blur */}
      <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl top-10 left-10 -z-10"></div>
      <div className="absolute w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl bottom-0 right-0 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full text-blue-600 font-semibold">
              ✈️ Discover Amazing Places
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mt-8">
              Find Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Dream Stay
              </span>
              <br />
              Anywhere
            </h1>

            <p className="text-slate-500 text-lg mt-8 leading-8 max-w-xl">
              Book luxurious hotels, resorts and unique stays across the world
              with exclusive prices and unforgettable experiences.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full shadow-xl hover:scale-105 transition duration-300">
                Book Now
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center gap-3 bg-white px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Play size={18} className="text-blue-600 fill-blue-600" />
                </div>
                Watch Video
              </button>
            </div>

            {/* Rating */}

            <div className="flex items-center gap-5 mt-14">
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-4 border-white"
                  src="https://i.pravatar.cc/100?img=10"
                />

                <img
                  className="w-12 h-12 rounded-full border-4 border-white"
                  src="https://i.pravatar.cc/100?img=20"
                />

                <img
                  className="w-12 h-12 rounded-full border-4 border-white"
                  src="https://i.pravatar.cc/100?img=30"
                />
              </div>

              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-600 mt-1">
                  Trusted by <span className="font-bold">20,000+</span>{" "}
                  travelers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <img
              src={heroImage}
              alt=""
              className="rounded-[45px] shadow-2xl object-cover w-full h-[650px]"
            />

            {/* Rating Card */}

            <div className="absolute top-8 -left-8 bg-white rounded-3xl shadow-xl p-5">
              <p className="text-slate-500 text-sm">Customer Rating</p>

              <div className="flex items-center gap-3 mt-2">
                <Star className="fill-yellow-400 text-yellow-400" />

                <span className="font-bold text-2xl">4.9</span>
              </div>
            </div>

            {/* Experience Card */}

            <div className="absolute bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-6 w-64">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">Maldives Resort</h3>

                  <p className="text-sm text-slate-500">Ocean View Suite</p>
                </div>
              </div>

              <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
