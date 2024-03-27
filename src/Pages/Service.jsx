import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceLayout from "../components/ImgTextLayout";
import FormSection from "../components/FormSection";

import HeroImage from "../assets/images/hero-section-image-home.jpg";

export default function Service({
  pageData: { id, title, pageData, sections },
}) {
  // const { id, title, pageData, sections } = pageData;

  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            {title}
          </h1>
        </HeroSection>

        <ul className="container mx-auto space-y-12">
          {sections.map(({ id, title, body, image }) => (
            <ServiceLayout key={id} image={image}>
              <h2 className="text-2xl md:text-4xl mb-4 font-bold font-serif text-primary-800">
                {title}
              </h2>

              <p className="md:text-2xl">
                {body
                  ? body
                  : `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  hic error architecto repudiandae sed ea magnam quaerat aliquam
                  ad perspiciatis! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. C eaque voluptates perspiciatis ratione!`}
              </p>
            </ServiceLayout>
          ))}
        </ul>

        <FormSection>Feel Free to contact Us!</FormSection>
      </main>
      <Footer />
    </>
  );
}
