import classNames from "classnames";
import Skill from "./skill";
import Logo from "./logo";

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
      <div className="place-center grid aspect-square w-1/2 grid-cols-1 grid-rows-1">
        <div
          className={classNames(
            "relative mx-auto flex aspect-square w-full max-w-[600px]  items-center justify-center rounded-full rounded-full border border-dashed border-dark ",
            "dark:border-light",
            "animate-spin-skill-slow"
          )}
        >
          <div
            className={classNames(
              "inner-circle-skill aspect-square h-[75%]",
              "bg-[#EFEEEE]",
              "dark:bg-[#191919] dark:shadow-[0px_0px_70px_rgba(255,255,255,0.1)]",
              "flex items-center justify-center rounded-full"
            )}
          >
            <div
              className={classNames(
                "inner-circle-skill aspect-square h-[50%]",
                "bg-[#EFEEEE]",
                "dark:bg-[#191919] dark:shadow-[0px_0px_70px_rgba(255,255,255,0.1)]",
                "flex items-center justify-center",
                "rounded-full"
              )}
            >
              <div
                className={classNames(
                  "inner-circle-skill aspect-square h-[40%]",
                  "animate-spin-skill-reverse",
                  "bg-[#EFEEEE]",
                  "dark:bg-[#191919] dark:shadow-[0px_0px_70px_rgba(255,255,255,0.1)]",
                  "flex items-center justify-center",
                  "rounded-full"
                )}
              >
                <Logo />
              </div>
            </div>
          </div>
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
    </div>
  );
};
export default Skills;
