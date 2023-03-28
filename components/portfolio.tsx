import Heading from "./base/heading";
import Text from "./base/text";

const Portfolio = () => {
  return (
    <div className="container my-32">
      <div className="text-center">
        <Text text="Portfolio" size={"large"} />
        <Heading text="Check My Wonderful Work" />
        <Text
          className="w-[550px] mx-auto"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
          size="medium"
        />
      </div>
      {/*Skills section */}
    </div>
  );
};
export default Portfolio;
