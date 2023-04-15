import Button from "./base/button";
import Heading from "./base/heading";
import Text from "./base/text";
import ProjectCard from "./project-card";

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
      <div>
        <ul className="flex flex-row justify-center items-center gap-10 my-10">
          <li className="text-primary cursor-pointer">All</li>
          <li className="cursor-pointer">
            <Text text="Web Design" />
          </li>
          <li className="cursor-pointer">
            <Text text="Web Application" />
          </li>
          <li className="cursor-pointer">
            <Text text="Backend Project" />
          </li>
        </ul>
        <div className="grid grid-cols-4 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="py-10 flex justify-center">
          <Button text="Load More" variant="secondary" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
