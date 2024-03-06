import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/hero-section-image.jpg";
import FormSection from "../components/FormSection";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Contact Us
          </h1>
        </HeroSection>

        <FormSection />
      </main>
      <Footer />
    </>
  );
}
