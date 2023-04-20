import { motion } from "framer-motion";
interface SkillProps {
  name: string;
  x: string;
  y: string;
}
const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x,
        y,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow dark cursor-pointer"
    >
      {name}
    </motion.div>
  );
};

export default Skill;
