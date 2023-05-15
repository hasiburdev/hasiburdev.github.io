import classNames from "classnames";
import Skill from "./skill";

const Skills = () => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-32",
        "xs:mb-24 xs:gap-4"
      )}
    >
      <h2
        className={classNames(
          "mt-64 w-full text-center text-6xl font-bold",
          "md:my-24 md:text-5xl"
        )}
      >
        Skills
      </h2>
      <div
        className={classNames(
          "relative flex aspect-square w-1/2 max-w-[500px] items-center justify-center rounded-full rounded-full border border-dashed border-dark ",
          "dark:border-light",
          "animate-spin-skill-slow"
        )}
      >
        <Skill icon={"html"} ml={-50} mt={0} />
        <Skill ml={50} mt={0} icon="css" />
        <Skill ml={0} mt={50} icon="js" />
        <Skill ml={-35} mt={-37} icon="linux" />
        <Skill ml={35} mt={-37} icon="react" />
        <Skill ml={35} mt={37} icon="nodejs" />
        <Skill ml={-35} mt={37} icon="sass" />
        <Skill ml={0} mt={-50} icon="ts" />
      </div>
    </div>
  );
};
export default Skills;
