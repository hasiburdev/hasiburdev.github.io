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
        className,
        "h-full w-full inline-block z-0 bg-light p-32"
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
