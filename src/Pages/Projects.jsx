import HeroSection from "../components/HeroSection";

import HeroImage from "../assets/images/hero-section-image-home.jpg";
import ItFeatures from "../components/ItFeatures";

export default function About() {
  return (
    <>
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Projects
          </h1>
        </HeroSection>

        <ItFeatures />
      </main>
    </>
  );
}
