import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/finance.jpg";
import TwoColLayout from "../components/TwoColLayout";

export default function Finance() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Finance
          </h1>
        </HeroSection>
        <TwoColLayout image={HeroImage}>
          <p>
            The Finance page delves into various aspects of financial
            management, investment strategies, and wealth building techniques.
            It explores the principles of financial planning, budgeting, and
            investment allocation, aiming to empower individuals and businesses
            to achieve their financial goals. The page emphasizes the importance
            of informed decision-making and
          </p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
