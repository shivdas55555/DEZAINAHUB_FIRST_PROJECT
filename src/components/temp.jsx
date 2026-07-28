import { Menu, UserRound } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="bg-white/70 backdrop-blur-xl rounded-full shadow-lg border border-white/40">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>

              <div>
                <h1 className="font-bold text-2xl text-slate-800">StayGo</h1>
              </div>
            </div>

            {/* Navigation */}

            <ul className="hidden md:flex items-center gap-10 font-medium text-slate-600">
              <li className="hover:text-blue-600 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                Hotels
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                Destinations
              </li>

              <li className="hover:text-blue-600 transition cursor-pointer">
                About
              </li>
            </ul>

            {/* Right */}

            <div className="hidden md:flex items-center gap-4">
              <button className="font-medium text-slate-600 hover:text-blue-600">
                Sign In
              </button>

              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 duration-300">
                <UserRound size={18} />
                Register
              </button>
            </div>

            {/* Mobile */}

            <button className="md:hidden">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
