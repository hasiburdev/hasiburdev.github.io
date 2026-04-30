import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Link from "next/link";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,

      children: (
        <div className="flex px-4 items-center gap-4">
          <Link
            href="/docs"
            className="text-sm uppercase
            hover:text-fd-foreground transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/blog"
            className="text-sm uppercase
            hover:text-fd-foreground transition-colors"
          >
            Blog
          </Link>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
