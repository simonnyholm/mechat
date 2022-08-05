import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forside from "./components/Forside";
import Chat from "./components/Chat";
import Donotclick from "./components/Donotclick";
import Food from "./components/Food";
import Search from "./components/Search";
<<<<<<< HEAD
import Settings from "./components/Settings";
=======

>>>>>>> 187acf5023fff9dc21ed98b1393713350e7e60ad

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Forside />} />
          <Route path="/donotclick" element={<Donotclick />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/food" element={<Food />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
