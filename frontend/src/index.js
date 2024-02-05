import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProjectScreen from "../src/screens/ProjectScreen";
import App from "./App";
import Project from "./components/Project";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/project/:id" element={<Project/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


