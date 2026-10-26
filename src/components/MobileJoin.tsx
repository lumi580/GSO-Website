import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { INTEREST_FORM_URL } from "@/lib/links";

/** Floating "Join GSO" pill on phones, shown once the reader scrolls past the hero. */
export default function MobileJoin() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={INTEREST_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "md:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgb(136_35_70/0.6)] transition-[opacity,transform] duration-300",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      )}
    >
      Join GSO
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
