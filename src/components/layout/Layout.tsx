import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import MobileJoin from "@/components/MobileJoin";
import ScrollProgress from "@/components/ScrollProgress";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A hash means we're aiming at a section (e.g. /#contact); let the anchor
    // win instead of snapping to the top.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    // reducedMotion="user" turns every framer animation off for visitors who
    // ask their OS for less motion.
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh flex flex-col">
        <ScrollProgress />
        <Header />
        {/* Keyed on the route so each page fades in on navigation. */}
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
        <Footer />
        <MobileJoin />
      </div>
    </MotionConfig>
  );
}
