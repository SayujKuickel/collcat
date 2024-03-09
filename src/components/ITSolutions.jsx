import { solutions } from "../constants";
import { Link } from "react-router-dom";
import Button from "./Button";

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
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {solutions.map((item, i) => (
            <li
              key={i}
              className="p-4 gap-4 rounded-md bg-primary-500 shadow-sm shadow-gray-800/20 hover:bg-[#eff3f5] hover:text-primary-500 hover:shadow-sm transition-all group hover:scale-[1.02] overflow-hidden flex flex-col justify-between"
            >
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold capitalize ">
                  {item.title}
                </h2>
                <p className="font-sans">{item.description}</p>
              </div>

              <Link to={item.path}>
                <Button className="flex items-center justify-center gap-2 bg-[#eff3f5] text-primary-500 group-hover:bg-primary-500 group-hover:text-white hover:-translate-y-1 hover:shadow-sm hover:shadow-primary-700 transition-all">
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
