import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const posts = [
  {
    category: "Announcement",
    date: "Sep 22, 2026",
    title: "GSO secures $50,000 in additional research funding",
    excerpt:
      "The Executive Board announced an expanded research grant program following a successful budget cycle.",
  },
  {
    category: "Success Story",
    date: "Sep 14, 2026",
    title: "PhD student Anya Ramírez wins national dissertation prize",
    excerpt:
      "Ramírez, GSO Research Committee alum, honored for scholarship in urban policy.",
  },
  {
    category: "Campus News",
    date: "Sep 03, 2026",
    title: "New graduate lounge opens in Boylan Hall",
    excerpt:
      "Two years of GSO advocacy delivers a dedicated space for graduate study and collaboration.",
  },
  {
    category: "Press",
    date: "Aug 21, 2026",
    title: "GSO statement on CUNY graduate stipend policy",
    excerpt:
      "The Executive Board responds to system-wide changes affecting doctoral funding.",
  },
];

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="What's happening at the GSO."
        description="Announcements, success stories, and press from graduate student life at Brooklyn College."
      />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <article className="group rounded-3xl border border-border bg-card p-8 h-full hover:border-maroon/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em]">
                  <span className="text-maroon font-semibold">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>

                <h2 className="mt-4 font-serif text-2xl md:text-3xl text-balance">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{post.excerpt}</p>

                <div className="mt-6 text-sm font-medium text-maroon">
                  Read more →
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
