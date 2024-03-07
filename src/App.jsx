// component import
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ITSolutions from "./components/ITSolutions";
import FormSection from "./components/FormSection";
import Button from "./components/Button";

// image import
import HeroImage from "./assets/images/hero-section-image.jpg";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {}, []);

  return (
    <main className="font-serif">
      <Header />
      <HeroSection height="full" image={HeroImage}>
        <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize ">
          unlocking financial success and technological innovation
        </h1>
        <p className="font-sans  text-base md:text-xl font-medium">
          Your Partner in Comprehensive Finance Management and Cutting-Edge IT
          Services
        </p>
        <Button type="primary" centered={true}>
          Contact us
        </Button>
      </HeroSection>

      <ITSolutions />
      <FormSection />
      <Footer />
    </main>
  );
}
