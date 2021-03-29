import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Footer";
import Dictionary from "./Dictionary"


export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Dictionary/>
         <Footer/>
         
    </div>
    </div>
  );
}
