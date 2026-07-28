import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Stats from "./components/Stats";
import HotelGrid from "./components/HotelGrid";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="bg-[#F6F1E8] min-h-screen text-[#0F172A]">
      <Navbar />
      <Hero />
      <Destinations />
      <Stats />
      <HotelGrid />
      <CTA />
    </div>
  );
}
