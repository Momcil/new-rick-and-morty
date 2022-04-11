import React  from 'react'
import Header from './components/Header'
import './App.css'
import ShowMore from './pages/ShowMore'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import AllCharactersPage from './pages/AllCharactersPage'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/favorites" element={<div>Favorites</div>} />
        <Route path="/random" element={<div>Random</div>} />
        <Route path="/" element={<AllCharactersPage />} />
        <Route path="/showmore/:id" element={<ShowMore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
