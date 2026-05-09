import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const NEWSLETTER_URL = "https://www.linkedin.com/newsletters/african-creative-stack-7425135250516865025/";
const NEWSLETTER_FOLLOW_URL = "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7425135250516865025";
const MUSINGS_URL = "https://jessicacolaco.wordpress.com/";

export default function Blog() {
  const displayed = posts.slice(0, 4);

  return (
    <section id="blog" className="py-32 px-6 relative">
      <div className="absolute right-20 top-20 w-70 h-70 rounded-full bg-[#C9A84C]/4 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Writing Channels */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">

          {/* African Creative Stack */}
          <a
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#1A1A1A] hover:border-[#C9A84C]/30 transition-all duration-500 bg-[#080808] overflow-hidden block no-underline"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[9px] px-3 py-1 border border-[#C9A84C]/25 text-[#C9A84C] tracking-widest uppercase">Newsletter</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#555] group-hover:text-[#C9A84C] transition-colors">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl leading-snug mb-3 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors duration-300">
                African Creative Stack
              </h3>
              <p className="text-sm text-[#A09880] leading-relaxed mb-6">
                Dispatches on the intersection of creativity, technology, and talent across Africa. Published on LinkedIn.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={NEWSLETTER_FOLLOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] text-white text-xs tracking-wide rounded-sm hover:bg-[#0958A8] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Subscribe on LinkedIn
                </a>
              </div>
            </div>
            <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-[#C9A84C] to-transparent transition-all duration-500" />
          </a>

          {/* Musings */}
          <a
            href={MUSINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#1A1A1A] hover:border-[#C9A84C]/30 transition-all duration-500 bg-[#080808] overflow-hidden block no-underline"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[9px] px-3 py-1 border border-[#C9A84C]/25 text-[#C9A84C] tracking-widest uppercase">Blog</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#555] group-hover:text-[#C9A84C] transition-colors">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl leading-snug mb-3 text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors duration-300">
                Musings
              </h3>
              <p className="text-sm text-[#A09880] leading-relaxed mb-6">
                Longer-form reflections on leadership, storytelling, life, and what it means to build something that matters.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#555] group-hover:text-[#C9A84C] transition-colors">
                <span>Read on WordPress</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </div>
            <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-[#C9A84C] to-transparent transition-all duration-500" />
          </a>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="border border-[#1A1A1A] p-16 text-center">
            <p className="text-[#555] text-sm tracking-widest uppercase">Writing coming soon</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#C9A84C]/40" />
              <span className="text-[#555] text-xs tracking-[0.25em] uppercase">Latest Posts</span>
            </div>
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
          </>
        )}
      </div>
    </section>
  );
}