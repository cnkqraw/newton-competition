import { motion } from "framer-motion";

export default function Navbar() {
  const links = ["story", "timeline", "game", "screenshots", "presentation", "source"];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a className="logo" href="#top" aria-label="Go to top">
        Newton Saga
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
