import Heading from "./base/heading";
import Text from "./base/text";
import MyWorkCard from "./my-work-card";

const myWorkData = [
  { id: 1, title: "Web Design" },
  { id: 2, title: "Web Development" },
  { id: 3, title: "Performance Optimization" },
  { id: 4, title: "UI Design" },
];

const MyWorks = () => {
  const renderedCards = myWorkData.map((work) => (
    <MyWorkCard key={work.id} title={work.title} />
  ));
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
      <div className="grid grid-cols-4 gap-x-6 mt-20">{renderedCards}</div>
    </div>
  );
};

export default MyWorks;
