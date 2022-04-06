import React  from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import {useState, useEffect} from 'react';



function App() {

  return (
    <div className="App">
     <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
