import { Link } from "react-router-dom";

import CollcatLogo from "../assets/icons/Collcat-logo.png";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import xTwitterIcon from "../assets/icons/x-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-sans mt-24 py-6 px-1">
      <div className="container mx-auto">
        <section className="flex items-start justify-between gap-8 p-4 flex-wrap">
          <div className="md:mr-64 ">
            <p className="flex md:items-center md:justify-center flex-col">
              <img
                src={CollcatLogo}
                className="w-28 aspect-square brightness-0 invert"
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

          <ul className="footer-link w-[16rem]">
            <li>Quick Links</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <ul className="footer-link w-[16rem]">
            <li>Consultancy</li>
            <li>
              <Link to="/service/funding-consultancy">Funding Consultancy</Link>
            </li>
            <li>
              <Link to="/service/investment-consultancy">
                Investment Consultancy
              </Link>
            </li>
            <li>
              <Link to="/service/management-consultancy">
                Management Consultancy
              </Link>
            </li>
            <li>
              <Link to="/service/financial-consultancy">
                Financial Consultancy
              </Link>
            </li>
            <li>
              <Link to="/service/accounting-consultancy">
                Accounting Consultancy
              </Link>
            </li>
            <li>
              <Link to="/service/tax-consultancy">Tax Consultancy</Link>
            </li>
            <li>
              <Link to="/service/engineering-consulting">
                Engineering Consulting
              </Link>
            </li>
            <li>
              <Link to="/service/aviation-consulting">Aviation Consulting</Link>
            </li>
          </ul>

          <ul className="footer-link w-[16rem]">
            <li>Other</li>
            <li>
              <Link to="/service/information-technology">
                Information Technology
              </Link>
            </li>
            <li>
              <Link to="/service/marketing-and-branding">
                Marketing and Branding
              </Link>
            </li>
          </ul>
        </section>

        <hr className="my-8 border border-slate-100/20" />

        <div className="flex items-center justify-between flex-wrap gap-8 md:flex-nowrap">
          <p>All rights reserved © {new Date().getFullYear()} Collcat</p>
          <p className="flex items-center justify-between w-full md:w-auto gap-2">
            <a href="">Privacy Policy</a>
            <a href="">Terms & condition</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
