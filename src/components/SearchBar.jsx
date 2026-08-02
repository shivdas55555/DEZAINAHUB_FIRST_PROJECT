import { FaCalendarAlt, FaSearch, FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-30 -mt-20 px-5"
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/30 p-6">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Destination */}

          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <MdLocationOn className="text-3xl text-yellow-600" />

            <div>
              <p className="text-sm text-gray-500">Destination</p>

              <input
                type="text"
                placeholder="Where to?"
                className="mt-1 w-full bg-transparent font-semibold outline-none"
              />
            </div>
          </div>

          {/* Check In */}

          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <FaCalendarAlt className="text-2xl text-yellow-600" />

            <div>
              <p className="text-sm text-gray-500">Check In</p>

              <input
                type="date"
                className="mt-1 bg-transparent font-semibold outline-none"
              />
            </div>
          </div>

          {/* Check Out */}

          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <FaCalendarAlt className="text-2xl text-yellow-600" />

            <div>
              <p className="text-sm text-gray-500">Check Out</p>

              <input
                type="date"
                className="mt-1 bg-transparent font-semibold outline-none"
              />
            </div>
          </div>

          {/* Guests */}

          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <FaUserFriends className="text-2xl text-yellow-600" />

            <div>
              <p className="text-sm text-gray-500">Guests</p>

              <select className="mt-1 bg-transparent font-semibold outline-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
          </div>

          {/* Button */}

          <button className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-600 text-white font-semibold transition duration-300 hover:scale-105 hover:bg-yellow-700">
            <FaSearch />
            Search Hotels
          </button>
        </div>
      </div>
    </motion.div>
  );
}
