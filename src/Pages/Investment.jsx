import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TwoColLayout from "../components/TwoColLayout";
import HeroImage from "../assets/images/investment.jpg";

export default function Investment() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Investment
          </h1>
        </HeroSection>

        <TwoColLayout image={HeroImage}>
          <p>
            The IT Solutions page delves into the realm of technology services
            and solutions, emphasizing the strategic utilization of
            technological resources to drive business growth and innovation. It
            explores various IT services, such as software development, network
            management, cybersecurity, and cloud computing, highlighting their
            significance in today's digital landscape. The page underscores the
            importance of leveraging cutting-edge technology and expertise to
            address business challenges and achieve operational excellence.
          </p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
