import Link from "next/link";
import { CircularText } from "./icons";

const HireMe = () => {
  return (
    <div className="fixed h-48 left-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow" />
        <Link
          href="mailto:hasiburdev@gamil.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark duration-300 "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
