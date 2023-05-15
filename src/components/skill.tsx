import classNames from "classnames";
import {
  CssIcon,
  Html5Icon,
  LinuxIcon,
  DatabaseIcon,
  JsIcon,
  NodeJsIcon,
  ReactIcon,
  SassIcon,
  TsIcon,
} from "./icons/skills";

const skillIcons = {
  css: <CssIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  html: <Html5Icon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  js: <JsIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  linux: <LinuxIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  database: (
    <DatabaseIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />
  ),
  nodejs: <NodeJsIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  react: <ReactIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  sass: <SassIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
  ts: <TsIcon className={classNames("h-auto w-2/3", "xs:w-[90%]")} />,
};

interface SkillProps {
  mt: number;
  ml: number;
  icon: keyof typeof skillIcons;
}
const Skill: React.FC<SkillProps> = ({ mt, ml, icon }) => {
  return (
    <>
      <div
        className={classNames(
          "absolute left-1/2 top-1/2  h-16 w-16 -translate-x-1/2 -translate-y-1/2",
          "xs:h-8 xs:w-8",
          "md:h-10 md:w-10"
        )}
        style={{
          marginTop: `${mt}%`,
          marginLeft: `${ml}%`,
        }}
      >
        <div
          className={classNames(
            "flex h-16  w-16 items-center justify-center rounded-full border border-solid border-dark bg-light p-2 text-xs font-semibold text-dark",
            "xs:h-8 xs:w-8 xs:p-1",
            "sm:h-10 sm:w-10 sm:p-1",
            "animate-spin-skill-reverse"
          )}
        >
          {skillIcons[icon]}
        </div>
      </div>
    </>
  );
};

export default Skill;
