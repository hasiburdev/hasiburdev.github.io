import Text from "./base/text";
import { FaHtml5 } from "react-icons/fa";

interface SkillCardProps {
  title: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ title }) => {
  return (
    <div className="border border-cardborder py-4 px-10 rounded-lg flex flex-row justify-center items-center gap-4">
      <span>
        <FaHtml5 className="w-10 h-10 " />
      </span>
      <Text size="large" text={title} />
    </div>
  );
};

export default SkillCard;
