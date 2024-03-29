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

import { database } from "./pages.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route
            key={page.id}
            path={page.path}
            element={<Service pageContent={page} />}
          /> */}
        {database.map((dataitem) => (
          <Route
            key={dataitem.id}
            path={dataitem.path}
            element={<Service pageData={dataitem} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
