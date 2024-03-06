import { solutions } from "../constants";
import { Link } from "react-router-dom";

export default function ITSolutions() {
  return (
    <section className="bg-gradient-to-r from-primary-400 to-primary-300 text-white px-2 py-8 my-[8rem]">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl md:text-6xl font-bold">Our IT Solutions</h1>
        <p
          className="
         font-sans text-xl"
        >
          Crafted to Perfection.
        </p>
        <ul className="flex flex-col flex-wrap md:flex-row items-center md:items-start gap-4 lg:gap-6 my-8">
          {solutions.map((item, i) => (
            <li
              key={i}
              className="w-full md:w-[24rem] px-8 py-4 md:px-6 md:py-3 md:h-[30rem] pb-6 md:pb-2 relative rounded-md bg-primary-500 p-2 md:p-4 shadow-sm shadow-gray-800/20 hover:bg-[#eff3f5] hover:text-primary-500 hover:shadow-sm transition-all group hover:scale-[1.02] overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={`icon for ${item.title}`}
                className="w-[12rem] md:w-[55%] pb-4 invert group-hover:invert-0 transition-all"
              />
              <h2 className="text-2xl md:text-3xl font-bold capitalize -leading-1 my-4">
                {item.title}
              </h2>
              <p className="font-sans">{item.description}</p>
              <Link
                to={item.path}
                className="absolute bottom-[75%] right-3 md:bottom-6 md:right-5 px-5 py-4 flex items-center justify-center gap-2 rounded-full font-semibold scale-[.85] bg-[#eff3f5] text-primary-500 group-hover:bg-primary-500 group-hover:text-white hover:-translate-y-1 hover:shadow-sm hover:shadow-primary-700 transition-all font-sans"
              >
                <span className="hidden md:block">Learn more</span>
                <span className="block w-fit rotate-[125deg] translate-y-1">
                  &larr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
