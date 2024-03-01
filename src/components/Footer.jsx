export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-sans mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 py-10 px-4">
        <div>
          <p className="flex md:items-center md:justify-center flex-col">
            <img
              src="./src/assets/icons/Collcat-logo.png"
              className="w-28 aspect-square brightness-90 invert "
              alt="Collcat-logo"
            />
            <span className="text-2xl font-bold font-serif uppercase">
              COLLCAT
            </span>
          </p>
          <div className="flex gap-2 items-center md:justify-center mt-4">
            <img
              src="./src/assets/icons/facebook-icon.svg"
              className="w-10"
              alt=""
            />
            <img
              src="./src/assets/icons/facebook-icon.svg"
              className="w-10"
              alt=""
            />
            <img
              src="./src/assets/icons/facebook-icon.svg"
              className="w-10"
              alt=""
            />
            <img
              src="./src/assets/icons/facebook-icon.svg"
              className="w-10"
              alt=""
            />
          </div>
        </div>

        <ul className="footer-link">
          <li>Quick Links</li>
          <li>Perferendis</li>
          <li>Asperiores</li>
          <li>Laborum</li>
        </ul>

        <ul className="footer-link">
          <li>IT Solutions</li>
          <li>Incidunt</li>
          <li>Ratione</li>
          <li>Non</li>
        </ul>

        <ul className="footer-link">
          <li>Finance Solutions</li>
          <li>Obcaecati</li>
          <li>Assumenda</li>
          <li>Nihil</li>
        </ul>
      </div>
    </footer>
  );
}
