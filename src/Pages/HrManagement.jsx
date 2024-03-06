import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/images/hero-section-image.jpg";

export default function HrManagement() {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            HR Management
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
              The HR Management page explores strategies and best practices for
              effective human resource management and workforce development. It
              delves into the role of HR in recruiting, training, and retaining
              talent, fostering employee engagement, and cultivating a positive
              workplace culture. The page emphasizes the importance of HR
              initiatives in driving organizational success and employee
              satisfaction.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
