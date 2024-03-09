import React from "react";

export default function TwoColLayout({ image, children }) {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse gap-4">
      <div className="rounded-md overflow-hidden flex-1 group">
        <img
          src={image}
          className="brightness-90 group-hover:scale-[1.025] transition-all aspect-video object-cover"
          alt={`image for ${image}`}
        />
      </div>

      <div className="md:text-xl text-justify flex-1 ">{children}</div>
    </div>
  );
}
