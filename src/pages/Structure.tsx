import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

type Node = { title: string; subtitle: string };

const committees: Node[] = [
  { title: "Committees", subtitle: "11 standing" },
  { title: "Graduate Representatives", subtitle: "At-large" },
  { title: "Department Representatives", subtitle: "By department" },
];

const governance: Node[] = [
  { title: "Faculty Committees", subtitle: "Shared governance" },
  { title: "College Administration", subtitle: "Shared governance" },
];

function OrgNode({
  title,
  subtitle,
  variant = "plain",
}: Node & { variant?: "gold" | "maroon" | "plain" }) {
  const skin =
    variant === "gold"
      ? "bg-gold text-maroon-dark"
      : variant === "maroon"
        ? "bg-maroon text-primary-foreground"
        : "bg-card border border-border";

  return (
    <div className={`rounded-2xl px-6 py-5 text-center shadow-sm ${skin}`}>
      <div className="font-serif text-lg leading-tight">{title}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] opacity-80">
        {subtitle}
      </div>
    </div>
  );
}

const Connector = () => <div className="mx-auto h-10 w-px bg-border" />;

export default function Structure() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="How the GSO is organized."
        description="An interactive look at the bodies that make up graduate student governance at Brooklyn College."
      />

      <section className="py-20">
        <div className="container-page space-y-10">
          <Reveal>
            <div className="max-w-md mx-auto">
              <OrgNode
                title="General Assembly"
                subtitle="Legislative body"
                variant="gold"
              />
            </div>
          </Reveal>

          <Connector />

          <Reveal delay={0.05}>
            <div className="max-w-md mx-auto">
              <OrgNode
                title="Executive Board"
                subtitle="President · VP · Treasurer · Secretary"
                variant="maroon"
              />
            </div>
          </Reveal>

          <Connector />

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-4">
              {committees.map((node) => (
                <OrgNode key={node.title} {...node} />
              ))}
            </div>
          </Reveal>

          <Connector />

          <Reveal delay={0.15}>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {governance.map((node) => (
                <OrgNode key={node.title} {...node} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
