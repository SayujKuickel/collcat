export default function CardItem({ title, children, icon, image = null }) {
  return (
    <section className="bg-gray-100 shadow-md group hover:shadow-lg transition-all">
      <div className="relative">
        <img
          src={image}
          alt={`image for ${title}`}
          className="w-full h-96 object-cover blur-sm group-hover:blur-none transition-all"
        />

        <div className="w-full h-full absolute-center bg-primary-500 opacity-[.5] group-hover:opacity-[.2] transition-all"></div>

        <p className="absolute-center z-3 text-4xl text-white font-serif font-bold">
          {title}
        </p>

        <img
          src={icon}
          alt={`icon for ${title}`}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-40 p-6  bg-primary-400  rounded-full object-contain border-4 border-gray-200"
        />
      </div>

      <div className="mt-16 p-4">
        <p className="text-center mx-8 md:text-xl">{children}</p>
      </div>
    </section>
  );
}
