import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.href || !post.content) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#555] text-xs tracking-[0.3em] uppercase mb-4">Post not found</p>
          <Link to="/" className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase hover:underline">
            ← Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link
            to="/#blog"
            className="text-[#555] text-xs tracking-[0.2em] uppercase hover:text-[#C9A84C] transition-colors flex items-center gap-2 mb-10"
          >
            <span>←</span> Back
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] px-3 py-1 border border-[#C9A84C]/25 text-[#C9A84C] tracking-widest uppercase">{post.category}</span>
            <span className="text-xs text-[#444]">{post.readTime} read</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-[#F0EDE6] mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
              <span className="text-[8px] text-[#C9A84C] font-bold">JC</span>
            </div>
            <span className="text-xs text-[#555]">Jessica Colaco</span>
            <span className="text-[#2a2a2a]">·</span>
            <span className="text-xs text-[#555]">{post.date}</span>
          </div>
          <div className="mt-8 h-px w-full bg-linear-to-r from-[#C9A84C]/40 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-[#F0EDE6] prose-headings:font-normal
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#A09880] prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#F0EDE6] prose-strong:font-semibold
            prose-ul:text-[#A09880] prose-li:marker:text-[#C9A84C]
            prose-blockquote:border-l-[#C9A84C] prose-blockquote:text-[#A09880] prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Continue reading */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]">
          <p className="text-xs text-[#555] tracking-widest uppercase mb-6">Continue Reading</p>
          <div className="flex flex-col gap-3">
            {posts
              .filter((p) => p.slug !== post.slug && !p.href && p.content)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group border border-[#1A1A1A] p-5 hover:border-[#C9A84C]/30 transition-all duration-300 bg-[#080808] no-underline"
                >
                  <p className="text-[9px] text-[#C9A84C] tracking-widest uppercase mb-2">{p.category}</p>
                  <p className="text-sm text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors">{p.title}</p>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </main>
  );
}