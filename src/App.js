import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty-App</h1>
      </header>
      <div className='Card'>
        <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'></img>
        <h2>Morty Smith</h2>
        <button>show more</button>
      </div>
      <div className='Navbar'>
        <ul>
          <li ></li>
          <li className='Home/Dashboard'><a href='#'>Dashboard</a></li>
          <li className='Ranrom Characters'><a href='#'>Ranrom</a></li>
          <li className='Favorites'><a href='#'>Favorites</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
