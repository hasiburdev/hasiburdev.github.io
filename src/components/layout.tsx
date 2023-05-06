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
        "h-full w-full inline-block z-0 bg-light p-32",
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
