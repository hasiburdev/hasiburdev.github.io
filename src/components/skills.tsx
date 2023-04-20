import { motion } from "framer-motion";
import Skill from "./skill";
const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-6xl w-full mt-64 text-center">Skills</h2>
      <div className="w-full relative h-screen flex items-center justify-center rounded-full bg-circular-light rounded-full">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Strapi" x="15vw" y="-12vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="TypeScript" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
