import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Homepage from "./Homepage.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

import Service from "./Pages/Service.jsx";

import { pages } from "./pages.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {pages.map((page) => (
          <Route
            key={page.id}
            path={page.path}
            element={
              <Service
                title={page.title}
                image={page.image}
                description={page.description}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
