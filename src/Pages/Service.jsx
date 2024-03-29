import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FormSection from "../components/FormSection";

import HeroImage from "../assets/images/hero-section-image-home.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Service({ pageData: { title, sections } }) {
  const imagesRef = useRef([]);
  const headerRef = useRef([]);
  const descRef = useRef([]);

  useGSAP(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    imagesRef.current.forEach((image, index) => {
      t1.from(image, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        delay: index * 0.1,
      });
    });

    headerRef.current.forEach((header, index) => {
      t2.from(header, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.out",
        delay: index * 0.1,
      });
    });

    descRef.current.forEach((desc, index) => {
      t3.from(desc, {
        opacity: 0,
        y: 25,
        duration: 0.4,
        ease: "power2.out",
        delay: index * 0.1,
      });
    });

    return () => {
      t1.kill();
      t2.kill();
      t3.kill();
    };
  });

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
              className="flex flex-col md:flex-row md:even:flex-row-reverse gap-4 md:gap-12"
            >
              <div className="flex-1">
                <h2
                  ref={(el) => (headerRef.current[index] = el)}
                  className="text-2xl md:text-4xl mb-4 font-bold font-serif text-primary-800"
                >
                  {title}
                </h2>
                <p
                  ref={(el) => (descRef.current[index] = el)}
                  className="md:text-2xl"
                >
                  {body}{" "}
                </p>
              </div>

              <div
                className="rounded-md overflow-hidden flex-1 group"
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
              >
                <img
                  src={image}
                  className="brightness-90 group-hover:scale-[1.025] h-64 md:h-[24rem] w-full transition-all object-cover"
                  alt={`image for ${image}`}
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
