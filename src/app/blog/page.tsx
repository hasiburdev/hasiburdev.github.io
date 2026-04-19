import Link from "next/link";
import { blog } from "@/lib/source";
import { PathUtils } from "fumadocs-core/source";

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}

export default function Page() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? getName(b.path)).getTime() -
      new Date(a.data.date ?? getName(a.path)).getTime(),
  );

  return (
    <main className="max-w-350 mx-auto">
      <section className="w-full border-separator/10 border-b *:mx-auto *:max-w-(--fd-layout-width)">
        <div className="inner relative flex h-16 gap-2 border-separator/10 border-x"></div>
      </section>
      {/* <HeaderBanner /> */}
      <section className="w-full border-separator/10 border-b">
        <div className="inner relative grid grid-cols-1 gap-2 border-separator/10 border-x px-2 py-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group relative flex flex-col overflow-hidden rounded-xs border border-separator/10 bg-background pb-6 transition *:px-6 hover:border-foreground/20"
            >
              <span className="relative h-64 w-full">
                {/* <Image
                  src={post.data.image || getBlogPageImage(post).url}
                  alt={post.data.title}
                  fill
                  className={cn(
                    "mb-4 rounded-xs object-cover",
                    !post.data.image && "invert-100 dark:invert-0",
                  )}
                  unoptimized
                /> */}
              </span>
              <p className="mt-5 font-medium text-lg leading-5">
                {post.data.title}
              </p>
              <p className="mt-px text-fd-muted-foreground text-sm leading-4.5">
                {post.data.description}
              </p>

              <span className="mt-4 flex items-center justify-between">
                {/* <span className="inline-flex text-brand text-xs">
                  {(post.data.hashtags ?? []).map((tag, idx) => (
                    <span key={tag} className="inline-flex h-4 items-center">
                      <p key={tag}>{tag}</p>
                      {idx !== (post.data.hashtags?.length ?? 0) - 1 && (
                        <Separator orientation="vertical" className="mx-2" />
                      )}
                    </span>
                  ))}
                </span> */}
                <p className="mt-auto text-brand text-xs">
                  {new Date(
                    post.data.date ?? getName(post.path),
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
