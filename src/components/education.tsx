import classNames from "classnames";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import EducationDetails from "./education-details";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className={classNames("mb-32 mt-64", "md:my-32 sm:my-24 xs:my-20")}>
      <h2
        className={classNames(
          "mb-24 w-full text-center text-6xl font-bold",
          "sm:4xl xs:3xl md:mb-16 md:text-5xl"
        )}
      >
        Education
      </h2>
      <div
        className={classNames(
          "relative mx-auto w-3/4",
          "lg:w-[85%] md:w-[90%] sm:w-full"
        )}
      >
        <motion.div
          ref={ref}
          style={{
            scaleY: scrollYProgress,
          }}
          className={classNames(
            "absolute left-0 top-[2px] h-full w-[4px] origin-top bg-dark",
            "dark:bg-light"
          )}
        />
        <ul className="flex w-full flex-col items-start justify-between">
          <EducationDetails
            type="B.Sc. in Electronics and Communication Engineering"
            time="2021-Present"
            place="Hajee Mohammad Danesh Science and Technology University"
            info=""
          />
          <EducationDetails
            type="Higher Secondary School Certificate"
            time="2018-2020"
            place="Gazipur Cantonment College"
            info=""
          />
          <EducationDetails
            type="Secondary School Certificate"
            time="2016-2018"
            place="Rajendrapur Cantonment Public School & College"
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
