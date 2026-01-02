
// src/main.jsx (or index.jsx)
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx"; // your createBrowserRouter
import { AuthProvider } from "../src/provider/AuthProvider.jsx"; // correct path

// Optional: Import StrictMode directly from react (better practice)
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </StrictMode>
);