import { solutions } from "../constants";

export default function ITSolutions() {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-300 text-white px-2 py-8">
      <div className="container mx-auto ">
        <h1 className="ml-1 md:ml-36 text-4xl md:text-6xl font-bold">
          Our IT Solutions
        </h1>
        <p className="ml-1 md:ml-36 font-sans text-xl">
          Crafted to Perfection.
        </p>

        <ul className="flex flex-wrap justify-center gap-2 my-6">
          {solutions.map((item, i) => (
            <li
              key={item.id}
              className={`${
                i % 2 == 0
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-black"
              } mx-0 lg:mx-4 p-3 md:p-6 w-[24rem] aspect-[3/4] rounded-md flex flex-col gap-3 relative`}
            >
              <img
                src={item.url}
                alt={`icon for ${item.url}`}
                className="w-[70%]"
              />
              <h2
                className={`${
                  i % 2 == 0 ? "" : "text-primary-600"
                } text-3xl font-bold capitalize`}
              >
                {item.title}
              </h2>
              <p className="font-sans">{item.description}</p>

              <a
                href=""
                className={`${
                  i % 2 == 0
                    ? "bg-slate-100 text-black"
                    : "bg-primary-600 text-white"
                } absolute bottom-8 right-8 px-5 py-4 rounded-full font-extrabold rotate-[125deg] hover:shadow-md hover:-translate-y-1 transition-all`}
              >
                &larr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
