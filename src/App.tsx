import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./features/home/Home.page";
import { HeroesPage } from "./features/heroes/Heroes.page";
import HeroPage from "./features/hero/Hero.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes/:codename" element={<HeroesPage />} />
      <Route path="/hero/:id" element={<HeroPage />} />
    </Routes>
  );
}

export default App;
