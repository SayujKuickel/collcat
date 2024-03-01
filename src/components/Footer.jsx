// import CollcatLogo from "../assets/icons/Collcat-logo.png";
// import FacebookIcon from "../assets/icons/facebook-icon.svg";

// export default function Footer() {
//   return (
//     <footer className="bg-primary-500 text-white font-sans mt-32">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 py-10 px-4">
//         <div>
//           <p className="flex md:items-center md:justify-center flex-col">
//             <img
//               src={CollcatLogo}
//               className="w-28 aspect-square brightness-90 invert "
//               alt="Collcat-logo"
//             />
//             <span className="text-2xl font-bold font-serif uppercase">
//               COLLCAT
//             </span>
//           </p>
//           <div className="flex gap-2 items-center md:justify-center mt-4">
//             <img src={FacebookIcon} className="w-8 aspect-square" alt="" />
//             <img src={FacebookIcon} className="w-8 aspect-square" alt="" />
//             <img src={FacebookIcon} className="w-8 aspect-square" alt="" />
//             <img src={FacebookIcon} className="w-8 aspect-square" alt="" />
//           </div>
//         </div>

//         <ul className="footer-link">
//           <li>Quick Links</li>
//           <li>Perferendis</li>
//           <li>Asperiores</li>
//           <li>Laborum</li>
//         </ul>

//         <ul className="footer-link">
//           <li>IT Solutions</li>
//           <li>Incidunt</li>
//           <li>Ratione</li>
//           <li>Non</li>
//         </ul>

//         <ul className="footer-link">
//           <li>Finance Solutions</li>
//           <li>Obcaecati</li>
//           <li>Assumenda</li>
//           <li>Nihil</li>
//         </ul>
//       </div>
//     </footer>
//   );
// }

import CollcatLogo from "../assets/icons/Collcat-logo.png";
import FacebookIcon from "../assets/icons/facebook-icon.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-sans">
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
          <div className="flex gap-4 items-center md:justify-center mt-4">
            <img src={FacebookIcon} className="w-6 aspect-square" alt="" />
            <img src={FacebookIcon} className="w-6 aspect-square" alt="" />
            <img src={FacebookIcon} className="w-6 aspect-square" alt="" />
            <img src={FacebookIcon} className="w-6 aspect-square" alt="" />
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
