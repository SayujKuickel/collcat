import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection({ children, image, height }) {
  const HeroSection = useRef();

  useGSAP(() => {
    gsap.to(HeroSection.current, { duration: 1, opacity: 1, y: "-=20" });
  });

  return (
    <section className="mt-8 mb-16 || opacity-0" ref={HeroSection}>
      <div
        className={`container mx-auto  relative rounded-none md:rounded-2xl overflow-hidden 
        ${height === "full" ? "h-[40rem]" : "h-[20rem]"}`}
      >
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute backdrop-blur-sm bg-[#ececec66] backdrop-brightness-90 text-center z-2 -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 w-full h-full p-2 flex justify-center flex-col gap-5">
          {children}
        </div>
      </div>
    </section>
  );
}
