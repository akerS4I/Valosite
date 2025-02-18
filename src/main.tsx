import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Predictions from "./pages/Predictions.tsx";
import News from "./pages/News.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);
