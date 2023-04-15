import Heading from "./base/heading";
import Text from "./base/text";
import SkillCard from "./skill-card";

const skillData = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "React" },
  { id: 5, title: "NextJs" },
  { id: 6, title: "NodeJs" },
  { id: 7, title: "Git" },
  { id: 8, title: "GitHub" },
];

const Skills = () => {
  const renderedSkills = skillData.map((skill) => (
    <SkillCard key={skill.id} title={skill.title} />
  ));
  return (
    <div className="bg-offwhite py-32">
      <div className="container ">
        <div className="text-center">
          <Text text="Skills" size={"large"} />
          <Heading text="Why Choose Me" />
          <Text
            className="w-[550px] mx-auto"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
            size="medium"
          />
        </div>
        {/*Skills section */}
        <Text
          text="Technologies I'm working with"
          className="text-center mt-10 mb-4"
          fontWeight="semibold"
          size="large"
        />
        <div className="flex flex-row flex-wrap w-4/5 mx-auto justify-center gap-6">
          {renderedSkills}
        </div>
      </div>
    </div>
  );
};
export default Skills;
