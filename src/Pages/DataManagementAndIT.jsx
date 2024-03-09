import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/datamanegementandit.jpg";
import TwoColLayout from "../components/TwoColLayout";

export default function DataManagementAndIT() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Data Management and IT
          </h1>
        </HeroSection>

        <TwoColLayout image={HeroImage}>
          {/* image */}

          <p>
            The Data Management and IT page explores the critical role of data
            management and information technology (IT) infrastructure in driving
            business success and innovation. It delves into strategies for
            managing and leveraging data effectively, optimizing IT systems and
            infrastructure, and harnessing technology to support business
            objectives. The page emphasizes the importance of data security,
            privacy, and compliance in today's digital landscape.
          </p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
