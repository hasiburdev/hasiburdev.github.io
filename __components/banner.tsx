import Image from "next/image";
import Text from "./base/text";
import bannerImage from "../assets/images/banner_img.png";
import Heading from "./base/heading";
import Button from "./base/button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="container ">
      <div className="flex justify-between">
        <div className="py-28">
          <Text text="Hello I'm" size="large" />
          <Heading text="Hasibur Rahman" size="large" />
          <Text text="Web Developer" size="large" />
          <div className="my-10 flex flex-row gap-4 items-center">
            <Button text="Hire Me" />
            <Button variant="secondary" text="Download CV" />
          </div>

          <ul className=" flex flex-row gap-2 text-xl">
            <li className="hover:text-blue-400">
              <FaFacebook className="w-10 h-10" />
            </li>
            <li className="hover:text-blue-400">
              <FaGithub className="w-10 h-10" />
            </li>
            <li className="hover:text-blue-400">
              <FaLinkedin className="w-10 h-10" />
            </li>
          </ul>
        </div>

        <div className="w-2/5">
          <Image src={bannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
