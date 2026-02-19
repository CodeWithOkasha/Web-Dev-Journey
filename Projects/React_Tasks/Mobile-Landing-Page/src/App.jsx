import { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import "./App.css";
import Feature from "./components/feature/Feature.jsx";
import Benefit from './components/benefitSection/Benefits.jsx'
import {HowItWorks} from './components/howitworks/HowItWorks.jsx'
import { AppPreview } from "./components/appPreview/AppPreview.jsx";
import Download from './components/download/Download.jsx'
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="global_div">
      <NavBar />
      <Hero />
      <Feature />
      <Benefit />
      <HowItWorks />
      <AppPreview />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
