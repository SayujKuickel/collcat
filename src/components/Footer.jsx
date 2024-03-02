import CollcatLogo from "../assets/icons/Collcat-logo.png";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import xTwitterIcon from "../assets/icons/x-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-sans mt-[15rem]">
      <div className="container mx-auto flex items-center justify-between gap-8 p-4 flex-wrap">
        <div className="md:mr-60 ">
          <p className="flex md:items-center md:justify-center flex-col">
            <img
              src={CollcatLogo}
              className="w-28 aspect-square brightness-90 invert "
              alt="Collcat-logo"
            />
            <span className="text-2xl font-bold font-serif uppercase">
              COLLCAT
            </span>
          </p>
          <div className="flex gap-4 items-center md:justify-center mt-2">
            <img
              src={FacebookIcon}
              className="w-10 aspect-square hover:scale-105 cursor-pointer hover:bg-primary-100/80 p-2 rounded-full"
              alt={FacebookIcon}
            />
            <img
              src={InstagramIcon}
              className="w-10 aspect-square hover:scale-105 cursor-pointer hover:bg-primary-100/80 p-2 rounded-full"
              alt={InstagramIcon}
            />
            <img
              src={xTwitterIcon}
              className="w-10 aspect-square hover:scale-105 cursor-pointer hover:bg-primary-100/80 p-2 rounded-full"
              alt={xTwitterIcon}
            />
          </div>
        </div>

        <ul className="footer-link w-[20rem] ">
          <li>Quick Links</li>
          <li>Perferendis</li>
          <li>Asperiores</li>
          <li>Laborum</li>
        </ul>

        <ul className="footer-link w-[20rem] ">
          <li>IT Solutions</li>
          <li>Incidunt</li>
          <li>Ratione</li>
          <li>Non</li>
        </ul>

        <ul className="footer-link w-[20rem] ">
          <li>Finance Solutions</li>
          <li>Obcaecati</li>
          <li>Assumenda</li>
          <li>Nihil</li>
        </ul>
      </div>
    </footer>
  );
}
