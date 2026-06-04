import { motion } from "framer-motion";

export default function StorySection({ chapters }) {
  return (
    <section id="story" className="section">
      <div className="section-heading">
        <p className="eyebrow">Narrative</p>
        <h2>Story Experience</h2>
        <p>
          The project turns information into a visual journey, so judges understand the idea quickly.
        </p>
      </div>

      <div className="story-grid">
        {chapters.map((chapter, index) => (
          <motion.article
            className="story-card"
            key={chapter.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{chapter.title}</h3>
            <p>{chapter.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
