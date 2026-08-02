import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Stats from "./components/Stats";
import HotelGrid from "./components/HotelGrid";
import CTA from "./components/CTA";
import SearchBar from "./components/SearchBar";
import Testimonial from "./components/Testimonial";
import LuxuryAmenities from "./components/LuxuryAmenities";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="bg-[#F6F1E8] min-h-screen text-[#0F172A]">
      <Navbar />
      <Hero />
      <SearchBar />
      <Stats />
      <LuxuryAmenities />
      <Destinations />
      <WhyChooseUs />
      <HotelGrid />
      <Testimonial />
      <CTA />
    </div>
  );
}
