import { motion } from "framer-motion";
import { Code2, Download, FolderTree } from "lucide-react";

export default function SourceCodeSection({ link }) {
  return (
    <section id="source" className="section source-section">
      <motion.div
        className="source-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="source-icon">
          <Code2 size={34} />
        </div>

        <h2>Download Source Code</h2>
        <p>
          Judges get access to the uncompiled project files, showing the real structure behind the game,
          website, and supporting material.
        </p>

        <div className="source-tree">
          <FolderTree size={18} />
          <span>Unity project, React website, documentation, assets</span>
        </div>

        <a className="primary-btn" href={link} download>
          <Download size={18} />
          Download ZIP
        </a>
      </motion.div>
    </section>
  );
}
