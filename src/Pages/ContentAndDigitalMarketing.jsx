import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/hero-section-image.jpg";

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
        <div className="container mx-auto grid lg:grid-cols-2 gap-4 md:gap-12">
          <img
            src={HeroImage}
            className="rounded-md  brightness-90"
            alt={`image for ${HeroImage}`}
          />
          <div className="md:text-xl  text-justify">
            <p>
              The Content and Digital Marketing page explores the realm of
              digital marketing strategies and content creation techniques aimed
              at driving online visibility and engagement. It delves into the
              importance of compelling content and effective digital marketing
              campaigns in attracting and retaining customers, building brand
              awareness, and driving business growth. The page emphasizes the
              significance of leveraging digital platforms and analytics tools
              to reach target audiences and achieve marketing objectives.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
