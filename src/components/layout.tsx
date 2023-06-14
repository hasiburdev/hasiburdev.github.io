import classNames from "classnames";
import { Children, ReactElement, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "z-0 inline-block h-full w-full bg-light p-12",
        "dark:bg-dark",
        "xl:p-24 lg:p-16 md:p-12 sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
