import { useRef } from "react";
import ExperienceDetails from "./experience-details";
import { useScroll, motion } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-24 w-full text-center">
        Experience
      </h2>
      <div className="w-3/4 mx-auto relative">
        <motion.div
          ref={ref}
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-0 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8">
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
