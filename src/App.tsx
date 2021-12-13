import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./features/home/Home.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
