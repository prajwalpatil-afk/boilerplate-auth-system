import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Services from "./pages/services";
import About from "./pages/about";
import RootLayout from "./pages/rootlayout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  </Routes>
</BrowserRouter>
);