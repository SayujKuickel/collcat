import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TwoColLayout from "../components/TwoColLayout";
import HeroImage from "../assets/images/digitalmarketing.jpg";

export default function ContentAndDigitalMarketing() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            Content and Digital Marketing
          </h1>
        </HeroSection>
        <TwoColLayout image={HeroImage}>
          <p>
            The Content and Digital Marketing page explores the realm of digital
            marketing strategies and content creation techniques aimed at
            driving online visibility and engagement. It delves into the
            importance of compelling content and effective digital marketing
            campaigns in attracting and retaining customers, building brand
            awareness, and driving business growth. The page emphasizes the
            significance of leveraging digital platforms and analytics tools to
            reach target audiences and achieve marketing objectives.
          </p>
        </TwoColLayout>
      </main>
      <Footer />
    </>
  );
}
