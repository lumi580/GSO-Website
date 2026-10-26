import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** The shared masthead every interior page opens with. */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="pt-32 pb-12 md:pt-36 md:pb-14 border-b border-border">
      <div className="container-page">
        <div className="eyebrow mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-maroon-ink/60" />
          {eyebrow}
        </div>
        <h1 className="text-5xl md:text-7xl text-balance max-w-5xl">{title}</h1>
        {description && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
