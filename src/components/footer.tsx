import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-separator/10 bg-background/50 backdrop-blur-sm mt-auto">
      <div className="max-w-container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm text-fd-muted-foreground">
            <p>© 2026 Hasiburdev. All rights reserved.</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/docs"
              className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://github.com/fuma-nama/fumadocs"
              rel="noopener noreferrer"
              target="_blank"
              className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
