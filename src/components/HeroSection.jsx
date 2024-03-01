import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="w-full h-[35rem] md:w-[90vw] lg:w-[70vw] lg:max-w-[80rem] mt-20 mb-40 relative rounded-none md:rounded-2xl overflow-hidden mx-auto">
      <img
        src="./src/assets\images\hero-section-image.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-[#f1f1f185] text-center z-2 -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 w-full h-full p-2 flex justify-center flex-col gap-5   ">
        <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize ">
          unlocking financial success and technological innovation
        </h1>
        <p className="font-sans  text-base md:text-xl font-medium">
          Your Partner in Comprehensive Finance Management and Cutting-Edge IT
          Services
        </p>
        <Button type="primary">Contact us</Button>
      </div>
    </section>
  );
}
