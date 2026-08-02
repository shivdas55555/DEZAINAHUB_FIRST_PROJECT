import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "Destinations", "Hotels", "Experiences", "Contact"];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scroll
            ? "bg-white/90 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1
            className={`text-3xl font-black tracking-[5px] ${
              scroll ? "text-black" : "text-white"
            }`}
          >
            StayGo
          </h1>

          <div className="hidden lg:flex gap-10 items-center">
            {navItems.map((item) => (
              <a
                href="#"
                key={item}
                className={`relative font-medium transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all hover:after:w-full ${
                  scroll ? "text-gray-800" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}

            <button className="rounded-full bg-yellow-600 hover:bg-yellow-700 px-6 py-3 text-white font-semibold transition hover:scale-105">
              Book Now
            </button>
          </div>

          <button
            className={`lg:hidden text-4xl ${
              scroll ? "text-black" : "text-white"
            }`}
            onClick={() => setOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed right-0 top-0 h-screen w-72 bg-white z-50 shadow-xl"
            >
              <div className="flex justify-end p-5">
                <button className="text-4xl" onClick={() => setOpen(false)}>
                  <IoClose />
                </button>
              </div>

              <div className="flex flex-col px-8 gap-8 mt-10">
                {navItems.map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-xl font-medium hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                ))}

                <button className="bg-yellow-600 text-white rounded-full py-3 mt-4">
                  Book Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
