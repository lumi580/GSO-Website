import { ArrowUpRight, FileText, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

type Doc = { title: string; body: string; href?: string };

// College-wide documents are the copies the Undergraduate Student Government
// publishes at bcstudentgov.org/governing-docs.
const groups: { heading: string; intro: string; docs: Doc[] }[] = [
  {
    heading: "GSO Constitution",
    intro:
      "The charter of the Graduate Student Organization itself.",
    docs: [
      {
        title: "Constitution of the Brooklyn College GSO",
        body: "Revised June 2026 · Membership, elections, the Executive Board and Council, graduate clubs, budget and finance, referenda, and amendments.",
        href: "https://www.brooklyn.edu/wp-content/uploads/2026/07/BC-GSO-Constitution.pdf",
      },
    ],
  },
  {
    heading: "College & University Bylaws",
    intro:
      "The bodies where GSO representatives hold seats — and the rules they operate under.",
    docs: [
      {
        title: "Policy Council Bylaws",
        body: "Brooklyn College's central policy body, where GSO holds voting seats.",
        href: drive("1_7MNkXCUshgLSRNwIDUZg64vK4ZJh7q9"),
      },
      {
        title: "Brooklyn College Association (BCA) Bylaws",
        body: "The body that allocates student activity fees, including the GSO budget.",
        href: drive("11zn3OdGoS-fVtN0n4t01bg3Im9EXtbEA"),
      },
      {
        title: "CUNY Board of Trustees Bylaws",
        body: "The governing rules of the City University of New York.",
        href: drive("1fEDHVDRIF-XtzmP3Y9EoZeb7gAjISYTt"),
      },
    ],
  },
  {
    heading: "BC Governance Plan",
    intro: "How shared governance works across Brooklyn College.",
    docs: [
      {
        title: "Brooklyn College Governance Plan",
        body: "The framework for Faculty Council, Policy Council, and student representation.",
        href: drive("10mLUb4Jf66I3YYmbcWn4j3NwdPW-TeJH"),
      },
    ],
  },
];

export default function GoverningDocuments() {
  return (
    <>
      <PageHero
        eyebrow="Governing Documents"
        title={
          <>
            The rules we live by — <em className="text-maroon-ink">in public.</em>
          </>
        }
        description="The GSO's own charter, plus the college and university bylaws that shape graduate student governance at Brooklyn College."
      />

      <section className="py-14 md:py-16">
        <div className="container-page grid gap-14">
          {groups.map((group) => (
            <div key={group.heading} className="grid lg:grid-cols-12 gap-8 lg:gap-14">
              <Reveal className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl text-balance">{group.heading}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {group.intro}
                </p>
              </Reveal>

              <div className="lg:col-span-8 border-t border-border">
                {group.docs.map((doc, i) => (
                  <Reveal key={doc.title} delay={i * 0.05}>
                    {doc.href ? (
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-5 border-b border-border py-6 transition-colors hover:bg-light/70 md:px-4"
                      >
                        <FileText className="mt-1 h-5 w-5 shrink-0 text-maroon-ink" />
                        <div className="flex-1">
                          <div className="font-serif text-xl md:text-2xl tracking-[-0.02em]">
                            {doc.title}
                          </div>
                          <p className="mt-1 text-[15px] text-muted-foreground">
                            {doc.body}
                          </p>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-maroon-ink">
                          Open
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-5 border-b border-border py-6 md:px-4">
                        <FileText className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="font-serif text-xl md:text-2xl tracking-[-0.02em]">
                            {doc.title}
                          </div>
                          <p className="mt-1 text-[15px] text-muted-foreground">
                            {doc.body}
                          </p>
                        </div>
                        <a
                          href={`mailto:GSOPresident@brooklyn.cuny.edu?subject=${encodeURIComponent(
                            `Request: ${doc.title}`
                          )}`}
                          className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-maroon-ink hover:underline underline-offset-4"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Request a copy
                        </a>
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
