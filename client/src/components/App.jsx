import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./Hero";
import Logo from "./Logo";
import CatList from "./CatList";
import CatPage from "./CatPage";
import Footer from "./Footer";

function App() {


  return (
    <div className="App">
      <Router>
      <Logo />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cat-list" element={<CatList/>} />
          <Route path="/cat-page" element={<CatPage/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
