import { motion } from "framer-motion";

export default function Timeline({ timeline }) {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="section-heading">
        <p className="eyebrow">Milestones</p>
        <h2>Interactive Timeline</h2>
        <p>
          Replace these placeholders with real milestones when the final competition topic is known.
        </p>
      </div>

      <div className="timeline-line">
        {timeline.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.year}-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
