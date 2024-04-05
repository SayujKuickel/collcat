import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FormSection from "../components/FormSection";

import HeroImage from "../assets/images/hero-section-image-home.jpg";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Service({ pageData: { title, sections } }) {
  const sectionRef = useRef([]);

  useGSAP(() => {
    const t1 = gsap.timeline();

    sectionRef.current.forEach((image, index) => {
      t1.from(image, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.out",
        delay: index * 0.2,
      });
    });

    return () => {
      t1.kill();
    };
  });

  useEffect(() => {
    // Restart animation when sections change
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, [sections]);

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
          {sections.map(({ id, title, body, image }, index) => (
            <li
              key={id}
              ref={(el) => (sectionRef.current[index] = el)}
              className="flex flex-col md:flex-row md:even:flex-row-reverse gap-4 md:gap-12"
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl mb-4 font-bold font-serif text-primary-800">
                  {title}
                </h2>
                <p className="md:text-2xl">{body} </p>
              </div>

              <div className="rounded-md overflow-hidden flex-1 group">
                <img
                  src={image}
                  className="brightness-90 group-hover:scale-[1.025] h-64 md:h-[24rem] w-full transition-all object-cover"
                  alt={`image for ${title}`}
                />
              </div>
            </li>
          ))}
        </ul>

        <FormSection>Feel Free to contact Us!</FormSection>
      </main>
      <Footer />
    </>
  );
}
