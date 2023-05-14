import { useRef } from "react";
import LiIcon from "./li-icon";
import { motion } from "framer-motion";
import classNames from "classnames";

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
      className={classNames(
        "mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0",
        "md:w-[80%]"
      )}
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
        <h3
          className={classNames(
            "text-2xl font-bold capitalize text-dark",
            "dark:text-light",
            "sm:text-xl xs:text-lg"
          )}
        >
          {position}&nbsp; @{company}
        </h3>
        <span
          className={classNames(
            "font-medium capitalize italic text-dark/75",
            "dark:text-light/75"
          )}
        >
          {time} | {address}
        </span>
        <p className="mt-2 w-full font-medium">{work}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceDetails;
