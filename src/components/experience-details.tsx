import { useRef } from "react";
import LiIcon from "./li-icon";
import { motion } from "framer-motion";

interface ExperienceDetailsProps {
  position: string;
  company: string;
  companyUrl: string;
  time: string;
  address: string;
  work: string;
}
const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  position,
  company,
  companyUrl,
  time,
  address,
  work,
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
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyUrl} target="_blank" className="text-primary">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceDetails;
