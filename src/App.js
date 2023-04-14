import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";

function App() {

  return (
    <div className="lg:mx-10">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
