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
    <div className={classNames("my-5", "md:my-32 sm:my-24 xs:my-20")}>
      <h2
        className={classNames(
          "mb-24 w-full text-center text-6xl font-bold",
          "sm:4xl xs:3xl md:mb-16 md:text-5xl"
        )}
      >
        Experience
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
        <ul className="flex w-full flex-col items-start justify-between ">
          <ExperienceDetails
            position="Frontend Developer"
            company="Fixer IT BD"
            companyUrl=""
            time="April,2020-December,2022"
            address="Dhaka, Bangladesh"
            work="My role is to develop the product for their company and maintain it. The products I built for this company are Employee Management System, Call Management System, and Student Management System. I am working on a SASS product called the Appointment Booking System."
          />
          <ExperienceDetails
            position="Full Stack Developer"
            company="Fiverr"
            companyUrl=""
            time="April,2020-Present"
            address="Dhaka, Bangladesh"
            work="I have worked with many clients as front-end and back-end developers, providing them with the best way for their websites or applications."
          />
          <ExperienceDetails
            position="Frontend Developer"
            company="Team Work"
            companyUrl=""
            time="April,2022-Present"
            address="Dhaka, Bangladesh"
            work="I have worked on some teamwork projects. My role was to create the best user experience with redux or more complicated tasks. Also, I worked with react next js and React another framework Hydrozen with Shopify + Mongo DB"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
