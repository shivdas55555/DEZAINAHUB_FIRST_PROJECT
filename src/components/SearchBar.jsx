import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Location */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-100 transition">
          <FiMapPin className="text-2xl text-indigo-600" />
          <div className="flex flex-col w-full">
            <span className="text-xs font-semibold text-gray-500">
              Location
            </span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="outline-none bg-transparent text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Check In */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-100 transition">
          <FiCalendar className="text-2xl text-indigo-600" />
          <div className="flex flex-col w-full">
            <span className="text-xs font-semibold text-gray-500">
              Check In
            </span>
            <input
              type="date"
              className="outline-none bg-transparent text-gray-800"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-100 transition">
          <FiCalendar className="text-2xl text-indigo-600" />
          <div className="flex flex-col w-full">
            <span className="text-xs font-semibold text-gray-500">
              Check Out
            </span>
            <input
              type="date"
              className="outline-none bg-transparent text-gray-800"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-gray-100 transition">
          <div className="flex items-center gap-3 w-full">
            <FiUsers className="text-2xl text-indigo-600" />
            <div className="flex flex-col w-full">
              <span className="text-xs font-semibold text-gray-500">
                Guests
              </span>
              <input
                type="number"
                min="1"
                placeholder="2 Guests"
                className="outline-none bg-transparent text-gray-800"
              />
            </div>
          </div>

          <button className="ml-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white p-4 rounded-2xl transition duration-300 shadow-lg hover:scale-105">
            <FiSearch size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
