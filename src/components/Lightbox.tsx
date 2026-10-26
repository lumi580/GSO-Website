import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ActivityPhoto } from "@/data/activityPhotos";

/** Full-screen photo viewer; closes on backdrop click or Escape. */
export default function Lightbox({
  photo,
  onClose,
}: {
  photo: ActivityPhoto | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!photo) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.figure
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={photo.src} alt={photo.caption} className="max-h-[80vh] rounded-md object-contain" />
            <figcaption className="mt-4 text-center font-serif text-2xl text-white">
              {photo.caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
