export default function ServiceLayout({ image, children }) {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse gap-4 md:gap-12">
      <div className="flex-1">{children}</div>

      <div className="rounded-md overflow-hidden flex-1 group">
        <img
          src={image}
          className="brightness-90 group-hover:scale-[1.025] h-64 md:h-[24rem] w-full transition-all object-cover "
          alt={`image for ${image}`}
        />
      </div>
    </div>
  );
}
