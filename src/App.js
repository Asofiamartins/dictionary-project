import React from 'react';
import './App.css';
import Footer from "./Footer";
import Dictionary from "./Dictionary"


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
         <p>
          Dictionary
        </p>
        </header>
        <main>
          <Dictionary/>
        </main>
      <Footer/>
    </div>
    </div>
  );
}


