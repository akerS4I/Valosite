import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.scss";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Rankings from "./pages/Rankings.tsx";
import News from "./pages/News.tsx";
import TeamPage from "./pages/TeamPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams/:teamName" element={<TeamPage />} />
      <Route path="/contact" element={<Contact />} />{" "}
      <Route path="/rankings/:region" element={<Rankings />} />
      <Route path="/rankings" element={<Navigate to="/rankings/eu" />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);
