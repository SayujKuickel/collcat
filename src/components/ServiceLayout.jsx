import React from "react";

export default function TwoColLayout({ image, children }) {
  return (
    <div className="container mx-auto md:items-center flex flex-col-reverse md:flex-row-reverse gap-4">
      <div className="rounded-md overflow-hidden flex-1 group">
        <img
          src={image}
          className="brightness-90 group-hover:scale-[1.025] h-full min-h-[15rem] w-full transition-all object-cover"
          alt={`image for ${image}`}
        />
      </div>

      <div className="md:text-xl text-justify flex-1 mr-8">{children}</div>
    </div>
  );
}
