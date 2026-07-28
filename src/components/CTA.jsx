import { FiArrowRight, FiMapPin } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-indigo-600 to-purple-600">
        {/* Background Shapes */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-white/10 rounded-full"></div>

        <div className="relative z-10 text-center text-white px-8 py-20">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md mb-6">
            <FiMapPin size={30} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Explore Your
            <br />
            Dream Destination?
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-white/80">
            Book amazing hotels, discover new places, and create unforgettable
            memories with StayGo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition duration-300 shadow-xl">
              Start Booking
              <FiArrowRight />
            </button>

            <button className="border border-white/40 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
              Explore Hotels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
