import { useState } from 'react'
import {Hero} from './components/Hero.jsx';
import './App.css'
import NavBar from './components/Nav_Bar';

function App()
{
  return(
    <div>
      <NavBar />
      <Hero></Hero>
    </div>
    
  );
}

export default App
