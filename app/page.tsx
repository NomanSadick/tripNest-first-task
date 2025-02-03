import Book from "@/components/Book";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <Book />
      <Footer />
    </div>
  );
}
