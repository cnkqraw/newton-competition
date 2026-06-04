import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { projectData } from "./data/projectData.js";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadsDir = path.join(__dirname, "public", "downloads");
const screenshotsDir = path.join(__dirname, "public", "screenshots");

app.use(cors());
app.use(express.json());

app.use("/downloads", express.static(downloadsDir));
app.use("/screenshots", express.static(screenshotsDir));

app.get("/api/project", (req, res) => {
  res.json(projectData);
});

app.get("/api/files", (req, res) => {
  const downloads = fs.existsSync(downloadsDir) ? fs.readdirSync(downloadsDir) : [];
  const screenshots = fs.existsSync(screenshotsDir) ? fs.readdirSync(screenshotsDir) : [];

  res.json({
    downloads,
    screenshots
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Newton competition project API",
    project: "/api/project",
    files: "/api/files"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
