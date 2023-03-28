import Image from "next/image";
import Button from "./base/button";
import Heading from "./base/heading";
import Text from "./base/text";
import aboutMeImage from "../assets/images/about_me.png";

const aboutMeDescription = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`;

const aboutMeDescription2 = `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum`;

const AboutMe = () => {
  return (
    <div className="container my-32">
      <div className="text-center">
        <Text text="Who am I" size={"large"} />
        <Heading text="About Me" />
        <Text
          className="w-[550px] mx-auto"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
          size="medium"
        />
      </div>
      <div className="flex flex-row gap-[100px] mt-11">
        <div className="basis-1/4 ">
          <Image src={aboutMeImage} width="400" height="400" alt="About Me" />
        </div>
        <div className="basis-3/4">
          <Heading text="About Me" className="mb-6" />
          <Text text={aboutMeDescription} className="mb-6" />
          <Text text={aboutMeDescription2} />
          <Button text="Download CV" variant="secondary" className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
