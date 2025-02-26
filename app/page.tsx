import Book from "@/components/Book";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import ReviewSlider from "@/components/ReviewSlider";
// import TourCard from "@/components/TourCard";

export default function Home() {
  return (
    <div className="font-signika">
      {/* <Navbar2 /> */}
      <Navbar />
      <HeroSection />
      {/* <TourCard /> */}
      <Info />
      <InfoSection />
      <ReviewSlider />
      <Book />
      <Footer />
      
    </div>
  );
}
