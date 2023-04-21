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
  console.log({
    router,
    href,
  });
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={classNames(
          "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 transition-[width] ease-in-out duration-300",
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
