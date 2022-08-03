import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forside from "./components/Forside";
import Chat from "./components/chat";
import Donotclick from "./components/donotclick";
import Food from "./components/food";
import Search from "./components/search";
import Settings from "./components/settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Forside />} />
          <Route path="/donotclick" element={<Donotclick />} />
          <Route path="/" element={<Chat />} />
          <Route path="/food" element={<Food />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
