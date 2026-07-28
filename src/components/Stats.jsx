import { FiGlobe, FiHome, FiUsers, FiAward } from "react-icons/fi";

const stats = [
  {
    id: 1,
    icon: <FiGlobe />,
    number: "150+",
    title: "Countries",
    description: "Explore destinations worldwide",
  },
  {
    id: 2,
    icon: <FiHome />,
    number: "50K+",
    title: "Hotels",
    description: "Luxury stays available",
  },
  {
    id: 3,
    icon: <FiUsers />,
    number: "2M+",
    title: "Happy Travelers",
    description: "Guests served globally",
  },
  {
    id: 4,
    icon: <FiAward />,
    number: "15+",
    title: "Awards",
    description: "Recognized for excellence",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center text-white group">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-3xl mb-5 group-hover:scale-110 transition duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-bold">{stat.number}</h2>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-2">{stat.title}</h3>

              <p className="text-white/80 mt-2 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
