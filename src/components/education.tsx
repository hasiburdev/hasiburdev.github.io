import { useRef } from "react";
import ExperienceDetails from "./experience-details";
import { useScroll, motion } from "framer-motion";
import EducationDetails from "./education-details";
import classNames from "classnames";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-24 w-full text-center">Education</h2>
      <div className="w-3/4 mx-auto relative">
        <motion.div
          ref={ref}
          style={{
            scaleY: scrollYProgress,
          }}
          className={classNames(
            "absolute left-9 top-[2px] w-[4px] h-full bg-dark origin-top",
            "dark:bg-light"
          )}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8 pl-24">
          <EducationDetails
            type="B.Sc. in Electronics and Communication Engineering"
            time="2021-Present"
            place="Hajee Mohammad Danesh Science and Technology University"
            info="Courses include Computer Fundamentals, Data Structures, Algorithms, Internet of Things"
          />
          <EducationDetails
            type="B.Sc. in Electronics and Communication Engineering"
            time="2021-Present"
            place="Hajee Mohammad Danesh Science and Technology University"
            info="Courses include Computer Fundamentals, Data Structures, Algorithms, Internet of Things"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
