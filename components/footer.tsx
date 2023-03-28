import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="container flex flex-row justify-between items-center py-6">
        <p className="text-lg text-white">copyright @All rights reserved</p>
        <ul className="text-gray-300 flex flex-row gap-2 text-xl">
          <li className="hover:text-white">
            <FaFacebook />
          </li>
          <li className="hover:text-white">
            <FaGithub />
          </li>
          <li className="hover:text-white">
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
