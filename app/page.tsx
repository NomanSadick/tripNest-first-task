import Book from "@/components/Book";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import ReviewSlider from "@/components/ReviewSlider";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ReviewSlider />
      <Book />
      <Footer />
      
    </div>
  );
}
