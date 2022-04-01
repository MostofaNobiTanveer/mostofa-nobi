import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Footer, Topbar } from "./components";
import { FrontPage } from "./pages";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
