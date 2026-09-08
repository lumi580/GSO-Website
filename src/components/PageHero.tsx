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
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/60 to-background border-b border-border">
      <div className="container-page">
        <div className="text-xs uppercase tracking-[0.2em] text-maroon font-semibold mb-4">
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
