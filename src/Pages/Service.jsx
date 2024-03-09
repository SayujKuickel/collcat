import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TwoColLayout from "../components/TwoColLayout";

import HeroImage from "../assets/images/hero-section-image-home.jpg";

export default function Service({ title, image, description }) {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            {title}
          </h1>
        </HeroSection>

        <TwoColLayout image={image}>
          <p>{description}</p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
