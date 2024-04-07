import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { database } from "./pages.js";

import "./index.css";

import Homepage from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Service from "./Pages/Service.jsx";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {database.map((dataitem) => (
          <Route
            key={dataitem.id}
            path={dataitem.path}
            element={<Service pageData={dataitem} />}
          />
        ))}
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
