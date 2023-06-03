import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface NavLinkProps {
  title: string;
  href: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={classNames(
          "absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 ease-in-out",
          router.asPath === href ? "w-full" : "w-0",
          "dark:bg-light",
          "group-hover:w-full "
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
