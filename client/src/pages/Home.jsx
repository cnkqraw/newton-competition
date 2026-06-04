import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Timeline from "../components/Timeline.jsx";
import StorySection from "../components/StorySection.jsx";
import GameSection from "../components/GameSection.jsx";
import ScreenshotGallery from "../components/ScreenshotGallery.jsx";
import PresentationSection from "../components/PresentationSection.jsx";
import SourceCodeSection from "../components/SourceCodeSection.jsx";
import Footer from "../components/Footer.jsx";
import FloatingProgress from "../components/FloatingProgress.jsx";
import { fallbackProject } from "../data/fallbackProject.js";

export default function Home() {
  const [project, setProject] = useState(fallbackProject);
  const [apiStatus, setApiStatus] = useState("static");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    fetch(`${apiUrl}/api/project`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API failed");
        }

        return res.json();
      })
      .then((data) => {
        setProject(data);
        setApiStatus("api");
      })
      .catch(() => {
        setProject(fallbackProject);
        setApiStatus("static");
      });
  }, []);

  return (
    <>
      <FloatingProgress />
      <Navbar />
      <Hero project={project} apiStatus={apiStatus} />
      <StorySection chapters={project.storyChapters} />
      <Timeline timeline={project.timeline} />
      <GameSection />
      <ScreenshotGallery />
      <PresentationSection link={project.downloads.presentation} />
      <SourceCodeSection link={project.downloads.sourceCode} />
      <Footer team={project.team} />
    </>
  );
}
