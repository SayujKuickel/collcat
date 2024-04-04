import { Link } from "react-router-dom";
import Button from "./Button";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ITSolutions({ pageData }) {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    boxesRef.current.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary-400 to-primary-300 text-white px-2 py-8 my-[8rem]">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl md:text-6xl font-bold">Our IT Solutions</h1>
        <p className="font-sans md:text-xl">Crafted to Perfection.</p>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
          {pageData.map((page, index) => (
            <li
              key={page.id}
              ref={(el) => (boxesRef.current[index] = el)}
              className="p-4 gap-8 rounded-md bg-primary-500 shadow-sm shadow-gray-800/20 hover:bg-[#eff3f5] hover:text-primary-500 hover:shadow-sm transition-all group hover:scale-[1.02] overflow-hidden flex flex-col justify-between"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <h2 className="text-2xl md:text-4xl font-bold capitalize mb-3">
                {page.title}
              </h2>
              <p className="font-sans md:text-md line-clamp-3">
                {page.description}
              </p>

              <Link to={page.path}>
                <Button className="flex items-center justify-center gap-2 bg-[#eff3f5] text-primary-500 group-hover:bg-primary-500 group-hover:text-white hover:shadow-sm hover:shadow-primary-700 transition-all">
                  Learn more
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
