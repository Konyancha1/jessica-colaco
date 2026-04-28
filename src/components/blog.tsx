import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  const displayed = posts.slice(0, 4);

  return (
    <section id="blog" className="py-32 px-6 relative">
      <div className="absolute right-20 top-20 w-70 h-70 rounded-full bg-[#C9A84C]/4 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase">My Writing</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              The<br /><span className="text-[#C9A84C]">Story Log</span>
            </h2>
          </div>
          {posts.length > 4 && (
            <button className="self-start text-xs tracking-[0.2em] uppercase text-[#555] hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
              <span>All Articles</span>
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="border border-[#1A1A1A] p-16 text-center">
            <p className="text-[#555] text-sm tracking-widest uppercase">Writing coming soon</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {displayed.map((post, i) => {
              const className = "group border border-[#1A1A1A] p-8 hover:border-[#C9A84C]/30 transition-all duration-500 cursor-pointer hover:-translate-y-1 bg-[#080808] block no-underline";

              const inner = (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] px-3 py-1 border border-[#C9A84C]/25 text-[#C9A84C] tracking-widest uppercase">{post.category}</span>
                    <span className="text-xs text-[#444]">{post.readTime} read</span>
                  </div>
                  <h3 className="font-display text-xl leading-snug mb-4 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors duration-300">{post.title}</h3>
                  <p className="text-sm text-[#A09880] leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#444]">{post.date}</span>
                    <span className="text-xs text-[#555] group-hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
                      {post.href ? "Read on Medium" : "Read more"} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                  <div className="mt-5 h-px w-0 group-hover:w-full bg-linear-to-r from-[#C9A84C] to-transparent transition-all duration-500" />
                </>
              );

              if (post.href) {
                return (
                  <a key={i} href={post.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                );
              }

              return (
                <Link key={i} to={`/blog/${post.slug}`} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}