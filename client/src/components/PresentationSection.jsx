import { motion } from "framer-motion";
import { Eye, FileDown } from "lucide-react";

export default function PresentationSection({ link }) {
  return (
    <section id="presentation" className="section split-section">
      <motion.div
        className="split-text"
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Slides</p>
        <h2>Presentation Hub</h2>
        <p>
          Judges get slide previews, a clean explanation path, and a download button for the final PDF.
        </p>

        <div className="button-row">
          <a className="primary-btn" href={link} download>
            <FileDown size={18} />
            Download Presentation
          </a>

          <a className="secondary-btn" href={link} target="_blank" rel="noreferrer">
            <Eye size={18} />
            View PDF
          </a>
        </div>
      </motion.div>

      <motion.div
        className="slide-preview-stack"
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="slide-card slide-one">Slide 01</div>
        <div className="slide-card slide-two">Slide 02</div>
        <div className="slide-card slide-three">Slide 03</div>
      </motion.div>
    </section>
  );
}
