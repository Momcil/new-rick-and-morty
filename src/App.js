import React  from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import {useState, useEffect} from 'react';



function App() {
  const [characters, setCharacters] = useState([])

const url= 'https://rickandmortyapi.com/api/character'

function doFetch(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => setCharacters(data.results))
}
console.log(characters)
useEffect(() => {
  doFetch();
}, []);

  return (
    <div className="App">
     <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
