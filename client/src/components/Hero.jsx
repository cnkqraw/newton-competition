import { motion } from "framer-motion";
import { Code2, Download, Play, Sparkles } from "lucide-react";

export default function Hero({ project, apiStatus }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">
          <Sparkles size={15} />
          Interactive Competition Project
        </p>

        <h1>{project.title}</h1>
        <p className="hero-subtitle">{project.subtitle}</p>
        <p className="hero-description">{project.description}</p>

        <div className="hero-buttons">
          <a href="#game" className="primary-btn">
            <Play size={18} />
            Launch Game
          </a>

          <a href="#source" className="secondary-btn">
            <Download size={18} />
            Download Source
          </a>
        </div>

        <div className="hero-stats">
          {project.stats?.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>

        <p className="api-pill">
          Data mode: {apiStatus === "api" ? "Express API" : "Static fallback"}
        </p>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="mock-window-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="mock-game-screen">
          <div className="pulse-ring"></div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="screen-content">
            <Code2 size={42} />
            <h3>Unity WebGL Ready</h3>
            <p>Amar’s exported WebGL build loads here when added.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
