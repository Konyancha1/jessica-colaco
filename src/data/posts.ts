export type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  href?: string;
  content?: string;
};

export const posts: Post[] = [
  {
    category: "AI × Story",
    title: "Why Every Founder Needs a Signature Story (And How AI Can Help You Find It)",
    excerpt: "Your pitch deck won't save you. Your credentials won't either. What moves people — what makes them lean in, invest, follow, and believe — is a story told with clarity and conviction.",
    date: "Apr 27, 2026",
    readTime: "6 min",
    slug: "why-founders-need-a-signature-story",
    content: `
      <p>Your pitch deck won't save you. Your credentials won't either. What moves people — what makes them lean in, invest, follow, and believe — is a story told with clarity and conviction.</p>

      <p>I've worked with hundreds of founders across Africa and beyond, and the pattern is always the same: brilliant people with genuinely world-changing ideas, struggling to communicate why anyone should care. Not because the idea is weak. Because the story hasn't been found yet.</p>

      <h2>What is a Signature Story?</h2>

      <p>A signature story is not your elevator pitch. It's not your LinkedIn summary. It's the one story — specific, personal, and true — that explains why you do what you do in a way that no one else can replicate, because no one else lived it.</p>

      <p>It's the moment something shifted. The problem you couldn't ignore. The gap you couldn't unsee. When told well, it does three things simultaneously:</p>

      <ul>
        <li>It makes you memorable in a sea of noise</li>
        <li>It builds trust faster than any credential</li>
        <li>It attracts the right people — investors, clients, collaborators — who share your why</li>
      </ul>

      <h2>Where Most Founders Go Wrong</h2>

      <p>Most founders lead with what they built, not why they built it. They open with the product, the market size, the traction. All important — but none of it is a story. Data informs. Story transforms.</p>

      <p>The other mistake? Thinking the story has to be dramatic. It doesn't. Some of the most powerful signature stories I've heard start quietly — a conversation overheard, a problem noticed on a Tuesday afternoon, a failure that refused to be forgotten.</p>

      <h2>How AI Changes the Game</h2>

      <p>Here's where it gets interesting. One of the biggest barriers to finding your signature story is that we're too close to our own lives to see the narrative clearly. We discount what feels ordinary to us — not realising that our ordinary is someone else's revelation.</p>

      <p>AI tools, used well, act as a mirror. When you feed your experiences, your turning points, your values into a well-prompted model, it reflects back patterns you couldn't see yourself. It asks the questions a great coach would ask — <em>why did that matter? What changed after that? What would you have told yourself then?</em></p>

      <p>This is what we do in the StoryVelocity Masterclass. We use AI not to write your story for you — but to help you excavate it. The story was always there. The tools just help you see it faster.</p>

      <h2>Where to Start Today</h2>

      <p>If you're not in the masterclass yet, here's a simple exercise. Open a blank document and answer this one question without editing yourself:</p>

      <blockquote>What is the problem you are solving, and when did you first feel it in your body — not just understand it in your head?</blockquote>

      <p>Write for ten minutes. Don't stop. Don't polish. Just excavate.</p>

      <p>What comes out is almost always the seed of your signature story. From there, it's about structure, language, and delivery — which is exactly what we build together.</p>

      <p>Your story is your strategy. It's time to find it.</p>
    `,
  },
];