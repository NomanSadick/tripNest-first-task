import Book from "@/components/Book";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import ReviewSlider from "@/components/ReviewSlider";
import TourCard from "@/components/TourCard";

export default function Home() {
  return (
    <div className="font-signika">
      <Navbar />
      <HeroSection />
      <TourCard />
      <InfoSection />
      <ReviewSlider />
      <Book />
      <Footer />
      
    </div>
  );
}
