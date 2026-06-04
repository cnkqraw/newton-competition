import { motion } from "framer-motion";
import { Image } from "lucide-react";

const screenshots = [
  {
    title: "Planning Board",
    note: "Add early planning, flowcharts, and design sketches."
  },
  {
    title: "Unity Prototype",
    note: "Add Amar’s early game scenes and gameplay tests."
  },
  {
    title: "Website Design",
    note: "Add your React page progress and UI improvements."
  },
  {
    title: "Final Gameplay",
    note: "Add polished final screenshots for judges."
  }
];

export default function ScreenshotGallery() {
  return (
    <section id="screenshots" className="section">
      <div className="section-heading">
        <p className="eyebrow">Visual Evidence</p>
        <h2>Screenshots</h2>
        <p>
          Use this area to prove development progress, planning, testing, and final quality.
        </p>
      </div>

      <div className="gallery-grid">
        {screenshots.map((shot, index) => (
          <motion.article
            className="screenshot-card"
            key={shot.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="screenshot-placeholder">
              <Image size={32} />
              <strong>{shot.title}</strong>
            </div>
            <div className="screenshot-caption">
              <p>{shot.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
