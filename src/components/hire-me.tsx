import Link from "next/link";
import { CircularText } from "./icons";

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex h-48 items-center justify-center overflow-hidden ">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <CircularText className="animate-spin-slow fill-dark" />
        <Link
          href="mailto:hasiburdev@gamil.com"
          target="_blank"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-dark bg-dark font-semibold text-light shadow-md duration-300 hover:bg-light hover:text-dark "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
