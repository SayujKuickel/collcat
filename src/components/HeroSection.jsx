import React from "react";
import Button from "./Button";

import HeroImage from "../assets/images/hero-section-image.jpg";

export default function HeroSection() {
  return (
    <section className="mt-8 mb-16">
      <div className="container h-[40rem] mx-auto relative rounded-none md:rounded-2xl overflow-hidden">
        <img src={HeroImage} className="w-full h-full object-cover" />
        <div className="absolute  backdrop-blur-sm bg-[#ececec66] backdrop-brightness-90  text-center z-2 -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 w-full h-full p-2 flex justify-center flex-col gap-5">
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize ">
            unlocking financial success and technological innovation
          </h1>
          <p className="font-sans  text-base md:text-xl font-medium">
            Your Partner in Comprehensive Finance Management and Cutting-Edge IT
            Services
          </p>
          <Button type="primary" centered={true}>
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
