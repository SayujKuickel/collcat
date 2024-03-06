import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import BusinessRestucturingAndRedesigning from "./Pages/BusinessRestucturingAndRedesigning.jsx";
import ContentAndDigitalMarketing from "./Pages/ContentAndDigitalMarketing.jsx";
import DataManagementAndIT from "./Pages/DataManagementAndIT.jsx";
import Finance from "./Pages/Finance.jsx";
import HrManagement from "./Pages/HrManagement.jsx";
import Investment from "./Pages/Investment.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service/business-restructuring",
    element: <BusinessRestucturingAndRedesigning />,
  },
  {
    path: "/service/digital-marketing",
    element: <ContentAndDigitalMarketing />,
  },
  {
    path: "/service/data-management",
    element: <DataManagementAndIT />,
  },
  {
    path: "/service/finance",
    element: <Finance />,
  },
  {
    path: "/service/hr-management",
    element: <HrManagement />,
  },
  {
    path: "/service/investment",
    element: <Investment />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
