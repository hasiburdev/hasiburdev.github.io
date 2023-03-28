import Heading from "./base/heading";
import Text from "./base/text";

const MyWorks = () => {
  return (
    <div className="container my-32">
      <div className="text-center">
        <Text text="Who am I" />
        <Heading text="What I Do" />
        <Text
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
          className="w-[500px] mx-auto"
        />
      </div>
    </div>
  );
};

export default MyWorks;
