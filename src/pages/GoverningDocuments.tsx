import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const documents = [
  { title: "Constitution", version: "v3.2 · 2025" },
  { title: "Bylaws", version: "v3.2 · 2025" },
  { title: "Policies", version: "v3.2 · 2025" },
  { title: "Election Code", version: "v3.2 · 2025" },
  { title: "Meeting Procedures", version: "v3.2 · 2025" },
  { title: "Budget Policies", version: "v3.2 · 2025" },
  { title: "Ethics Policy", version: "v3.2 · 2025" },
  { title: "Financial Policies", version: "v3.2 · 2025" },
  { title: "Operating Procedures", version: "v3.2 · 2025" },
];

export default function GoverningDocuments() {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return documents;
    return documents.filter((doc) => doc.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Governing Documents"
        title="The rules we live by — in public."
        description="Every policy, bylaw, and procedure that governs the GSO is available here."
      />

      <section className="py-16">
        <div className="container-page">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search documents…"
              className="w-full rounded-full border border-input bg-background pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 0.04}>
              <div className="group rounded-2xl border border-border bg-card p-6 hover:border-maroon/50 transition-all hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <FileText className="h-6 w-6 text-maroon" />
                  <span className="text-xs text-muted-foreground">
                    {doc.version}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl">{doc.title}</h3>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <button className="inline-flex items-center gap-1.5 text-maroon font-medium hover:underline">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Version history
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
