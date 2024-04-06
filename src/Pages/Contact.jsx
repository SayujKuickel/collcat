import HeroSection from "../components/HeroSection";
import FormSection from "../components/FormSection";
import HeroImage from "../assets/images/hero-section-image-home.jpg";

export default function About() {
  return (
    <>
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Contact Us
          </h1>
        </HeroSection>

        <FormSection />
      </main>
    </>
  );
}
