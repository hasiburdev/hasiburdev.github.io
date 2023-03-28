import Heading from "./base/heading";
import Text from "./base/text";

const Skills = () => {
  return (
    <div className="bg-offwhite">
      <div className="container">
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
      </div>
    </div>
  );
};
export default Skills;
