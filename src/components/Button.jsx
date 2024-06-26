export default function Button({
  className,
  type,
  children,
  onClick,
  centered = false,
}) {
  return (
    <div
      onClick={onClick}
      href=""
      className={`block w-fit  border-2 border-primary-500 text-black px-6 py-2 rounded-full
       transition-all shadow-none hover:shadow-md font-sans ${
         centered ? "mx-auto w-fit" : ""
       } ${
        type == "primary"
          ? "bg-primary-400 text-white hover:bg-primary-500"
          : "hover:bg-primary-400 hover:text-white"
      } ${className}`}
    >
      {children}
    </div>
  );
}
