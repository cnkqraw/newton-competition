import { motion } from "framer-motion";
import { Maximize2, Gamepad2 } from "lucide-react";

export default function GameSection() {
  return (
    <section id="game" className="section">
      <div className="section-heading">
        <p className="eyebrow">Unity WebGL</p>
        <h2>Play the Game</h2>
        <p>
          This section is ready for the Unity WebGL export. Keep the placeholder until the build exists.
        </p>
      </div>

      <motion.div
        className="game-frame"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="game-toolbar">
          <span>Unity Player</span>
          <button type="button">
            <Maximize2 size={16} />
            Fullscreen
          </button>
        </div>

        <div className="game-placeholder">
          <Gamepad2 size={48} />
          <h3>Unity Build Placeholder</h3>
          <p>Place the WebGL export inside client/public/unity.</p>
          <p className="small-text">
            Later, swap this placeholder with Unity’s generated loader.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
