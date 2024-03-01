import { solutions } from "../constants";

export default function ITSolutions() {
  return (
    <section className="bg-gradient-to-r from-primary-400 to-primary-300 text-white px-2 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">Our IT Solutions</h1>
        <p
          className="
         font-sans text-xl"
        >
          Crafted to Perfection.
        </p>
        <ul className="flex flex-col flex-wrap md:flex-row items-center md:items-start gap-3 my-8">
          {solutions.map((item, i) => (
            <li
              key={i}
              className="w-full md:w-[21rem] md:h-[30rem] relative rounded-md bg-primary-500 p-2 md:p-4 shadow-sm shadow-gray-800/20 hover:bg-[#eff3f5] hover:text-primary-500 hover:shadow-sm transition-all group hover:scale-[1.02] overflow-hidden"
            >
              <img
                src={item.url}
                alt={`icon for ${item.url}`}
                className="w-[12rem] md:w-[65%]"
              />
              <h2 className="text-2xl md:text-3xl font-bold capitalize -leading-1 mb-1">
                {item.title}
              </h2>
              <p className="font-sans">{item.description}</p>

              <a
                href="#"
                className="absolute bottom-[75%] right-3 md:bottom-6 md:right-6 px-5 py-4 rounded-full font-extrabold rotate-[125deg] scale-[.85] bg-[#eff3f5] text-primary-500 group-hover:bg-primary-500 group-hover:text-white hover:-translate-y-1 hover:shadow-sm hover:shadow-primary-700 transition-all"
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

// <li
// key={item.id}
// className={`${
//   i % 2 == 0
//     ? "bg-primary-600 text-white"
//     : "bg-slate-100 text-black"
// } mx-0 lg:mx-4 p-3 md:p-6 w-[24rem] aspect-[3/4] rounded-md flex flex-col gap-3 relative`}
// >
// <img
//   src={item.url}
//   alt={`icon for ${item.url}`}
//   className="w-[70%]"
// />
{
  /* <h2
  className={`${
    i % 2 == 0 ? "" : "text-primary-600"
  } text-3xl font-bold capitalize`}
>
  {item.title}
</h2> */
}
// <p className="font-sans">{item.description}</p>

// <a
//   href=""
//   className={`${
//     i % 2 == 0
//       ? "bg-slate-100 text-black"
//       : "bg-primary-600 text-white"
//   } absolute bottom-8 right-8 px-5 py-4 rounded-full font-extrabold rotate-[125deg] hover:shadow-md hover:-translate-y-1 transition-all`}
// >
//   &larr;
// </a>
// </li>
