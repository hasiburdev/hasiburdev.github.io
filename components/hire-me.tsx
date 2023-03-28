import Button from "./base/button";
import Text from "./base/text";

const HireMe = () => {
  return (
    <div className="container my-32 bg-primary rounded-lg flex justify-between items-center px-10 py-10">
      <div>
        <Text
          className="text-white "
          text="Hire me for your Awesome project"
          size="large"
          fontWeight="bold"
        />
        <Text
          text="There are many variations of passages of Lorem Ipsum"
          className="text-white"
        />
      </div>
      <div className="flex justify-center items-center">
        <Button text="Load More" variant="white" />
      </div>
    </div>
  );
};

export default HireMe;
