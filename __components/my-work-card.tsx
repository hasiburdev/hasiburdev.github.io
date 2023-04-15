import { MdOutlineWeb } from "react-icons/md";
import Text from "./base/text";

interface MyWorkCardProps {
  title: string;
}

const MyWorkCard: React.FC<MyWorkCardProps> = ({ title }) => {
  return (
    <div className="group ease-in duration-300 border border-cardborder rounded-lg aspect-[10/7] flex flex-col justify-center items-center hover:bg-primary">
      <span>
        <MdOutlineWeb className="h-[50px] ease-in duration-300 w-[50px] text-tertiary group-hover:text-white" />
      </span>
      <Text
        fontWeight="semibold"
        text={title}
        className="pt-6 ease-in duration-300 group-hover:text-white"
        size="large"
      />
    </div>
  );
};

export default MyWorkCard;
