import { useRef } from "react";
import ExperienceDetails from "./experience-details";
import { useScroll, motion } from "framer-motion";
import classNames from "classnames";

const Experience = () => {
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
        Experience
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
        <ul className="w-full flex flex-col items-start justify-between ">
          <ExperienceDetails
            position="Software Engineer"
            company="Google"
            companyUrl="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />

          <ExperienceDetails
            position="Software Engineer"
            company="Google"
            companyUrl="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />

          <ExperienceDetails
            position="Software Engineer"
            company="Google"
            companyUrl="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />

          <ExperienceDetails
            position="Software Engineer"
            company="Google"
            companyUrl="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
