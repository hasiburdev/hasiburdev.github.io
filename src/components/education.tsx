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
    <div className={classNames("my-64", "md:my-32 sm:my-24 xs:my-20")}>
      <h2
        className={classNames(
          "font-bold text-6xl mb-24 w-full text-center",
          "md:text-5xl md:mb-16 sm:4xl xs:3xl"
        )}
      >
        Education
      </h2>
      <div
        className={classNames(
          "w-3/4 mx-auto relative",
          "lg:w-[85%] md:w-[90%] sm:w-full"
        )}
      >
        <motion.div
          ref={ref}
          style={{
            scaleY: scrollYProgress,
          }}
          className={classNames(
            "absolute left-0 top-[2px] w-[4px] h-full bg-dark origin-top",
            "dark:bg-light"
          )}
        />
        <ul className="w-full flex flex-col items-start justify-between">
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
