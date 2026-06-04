import { useEffect, useState } from "react";

export default function FloatingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="progress-shell" aria-hidden="true">
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
