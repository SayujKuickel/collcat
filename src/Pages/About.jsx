import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CardItem from "../components/CardItem";

import HeroImage from "../assets/images/hero-section-image-home.jpg";

import missionImage from "../assets/images/Mission.jpg";
import visionImage from "../assets/images/Vision.jpg";

import visionIcon from "../assets/icons/lightbulb-regular.svg";
import missionIcon from "../assets/icons/bullseye-solid.svg";

export default function About() {
  return (
    <>
      <Header />
      <HeroSection image={HeroImage}>
        <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
          About Us
        </h1>
      </HeroSection>

      <section className="container mx-auto">
        <h2 className="text-center font-serif text-2xl md:text-6xl text-primary-500 font-bold mb-4 mt-12">
          Who are we?
        </h2>

        <p className="max-w-[62ch] mx-auto text-center md:text-xl font-serif">
          COLCAT is a dynamic consulting firm offering specialized services in
          Funding, Investment, Management, IT, Legal, Finance, Accounting, Tax,
          Engineering, and Aviation Consulting. With a team of experienced
          professionals from various industries, we provide best solutions to
          address each client's unique needs, guiding them through complex
          challenges and facilitating sustainable growth. Our dedication to
          excellence, innovation, and client satisfaction guarantees measurable
          outcomes and enduring success and foster long-term relationships
        </p>

        <div className="grid my-20 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          <CardItem title="Mission" icon={missionIcon} image={missionImage}>
            At COLCAT, our mission is to empower organizations in a changing
            business landscape through tailored consultancy solutions, driving
            tangible results and long-term success. We partner with clients to
            identify opportunities, solve challenges, and foster sustainable
            growth. Leveraging expertise and insights, we deliver actionable
            strategies for value creation. Our commitment to measurable results
            is grounded in integrity, professionalism, and client-centricity.
          </CardItem>

          <CardItem title="Vision" icon={visionIcon} image={visionImage}>
            Our vision is to become the leading global consultancy firm known
            for excellence, innovation, and client satisfaction. We aim to help
            organizations break boundaries and achieve their utmost potential
            through strategic insight and transformative solutions. By our core
            values and a drive for continuous improvement, we strive to set new
            standards of excellence, inspiring others and shaping a world of
            limitless possibilities.
          </CardItem>
        </div>
      </section>
      <Footer />
    </>
  );
}
