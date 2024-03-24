import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceLayout from "../components/ServiceLayout";
import FormSection from "../components/FormSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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

        <ul className="container mx-auto ">
          <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 gap-y-16 gap-x-8 md:gap-16">
            {sections.map(({ id, title, body }) => (
              <li key={id} className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">{`${title}`}</h2>
                <p className="md:text-xl">{body}</p>
              </li>
            ))}
          </div>
        </ul>

        <FormSection>Feel Free to contact Us!</FormSection>

        {/* <ServiceLayout image={image}>
          <h3 className="font-bold text-3xl md:text-4xl mb-3">{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} />

          <Link
            to="/contact"
            className="block w-fit hover:cursor-pointer mt-8 "
          >
            <Button type="primary">Get in Touch</Button>
          </Link>
        </ServiceLayout> */}
      </main>
      <Footer />
    </>
  );
}
