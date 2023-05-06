import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkMobileProps {
  href: string;
  title: string;
  className?: string;
  handleClose: () => void;
}
const NavLinkMobile: React.FC<NavLinkMobileProps> = ({
  href,
  title,
  className = "",
  handleClose,
}) => {
  const router = useRouter();
  const handleClick = () => {
    handleClose();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        className,
        "relative group text-light",
        "dark:text-dark"
      )}
    >
      {title}
      <span
        className={classNames(
          "h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 transition-[width] ease-in-out duration-300",
          router.asPath === href ? "w-full" : "w-0",
          "dark:bg-dark",
          "group-hover:w-full"
        )}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default NavLinkMobile;
