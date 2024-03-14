import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceLayout from "../components/ServiceLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import HeroImage from "../assets/images/hero-section-image-home.jpg";

export default function Service({
  pageContent: { title, image, description },
}) {
  return (
    <>
      <Header />
      <main>
        <HeroSection image={HeroImage}>
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif ">
            {title}
          </h1>
        </HeroSection>
        <ServiceLayout image={image}>
          <h3 className="font-bold text-3xl md:text-4xl mb-3">{title}</h3>
          {/* inner content */}
          <div dangerouslySetInnerHTML={{ __html: description }} />

          <Link
            to="/contact"
            className="block w-fit hover:cursor-pointer mt-8 "
          >
            <Button type="primary">Get in Touch</Button>
          </Link>
        </ServiceLayout>
      </main>
      <Footer />
    </>
  );
}
