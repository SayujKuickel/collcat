import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/hero-section-image.jpg";

export default function BusinessRestucturingAndRedesigning() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Business Restructuring and Redesigning
          </h1>
        </HeroSection>
        <div className="container mx-auto grid lg:grid-cols-2 gap-4 md:gap-12">
          <img
            src={HeroImage}
            className="rounded-md  brightness-90"
            alt={`image for ${HeroImage}`}
          />
          <div className="md:text-xl  text-justify">
            <p>
              The Business Restructuring and Redesigning page explores
              strategies and methodologies for revitalizing and optimizing
              business structures and processes. It delves into the process of
              reorganizing business operations, redesigning workflows, and
              implementing changes to improve efficiency and adaptability. The
              page emphasizes the importance of strategic planning and proactive
              measures in navigating challenges and seizing opportunities for
              business growth and transformation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
