import { useRef } from "react";
import LiIcon from "./li-icon";
import { motion } from "framer-motion";

interface ExperienceDetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}
const EducationDetails: React.FC<ExperienceDetailsProps> = ({
  type,
  time,
  place,
  info,
}) => {
  const liRef = useRef(null);
  return (
    <li
      ref={liRef}
      className="my-8 first:mt-0 last:mb-0 w-60% mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={liRef} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        viewport={{
          once: true,
        }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full mt-2">{info}</p>
      </motion.div>
    </li>
  );
};

export default EducationDetails;