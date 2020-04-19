import React from 'react';
import './App.css';
import Home from '../src/components/Home'
import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
