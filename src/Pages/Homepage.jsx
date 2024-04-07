import HeroSection from "../components/HeroSection";
import ITSolutions from "../components/ITSolutions";
import FormSection from "../components/FormSection";
import Button from "../components/Button";

import { database } from "../pages";

import { Link } from "react-router-dom";

// image import
import HeroImage from "../assets/images/hero-section-image-home.jpg";

export default function App() {
  return (
    <main className="font-serif">
      <HeroSection height="full" image={HeroImage}>
        <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize ">
          unlocking financial success and technological innovation
        </h1>
        <p className="font-sans text-base md:text-xl font-medium">
          Your Partner in Comprehensive Finance Management and Cutting-Edge IT
          Services
        </p>

        <Link to="/contact" className="w-fit mx-auto">
          <Button type="primary" centered={true}>
            Contact us
          </Button>
        </Link>
      </HeroSection>

      <ITSolutions pageData={database} />

      <FormSection />
    </main>
  );
}
