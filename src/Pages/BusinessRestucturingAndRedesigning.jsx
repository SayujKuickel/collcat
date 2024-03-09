import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TwoColLayout from "../components/TwoColLayout";
import HeroImage from "../assets/images/businessredesign.jpg";

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
        <TwoColLayout image={HeroImage}>
          <p>
            The Business Restructuring and Redesigning page explores strategies
            and methodologies for revitalizing and optimizing business
            structures and processes. It delves into the process of reorganizing
            business operations, redesigning workflows, and implementing changes
            to improve efficiency and adaptability. The page emphasizes the
            importance of strategic planning and proactive measures in
            navigating challenges and seizing opportunities for business growth
            and transformation.
          </p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
