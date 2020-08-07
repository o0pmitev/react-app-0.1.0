import React from 'react'
import './App.scss'
import headerImg from './assets/starwars.png'
import Species from './components/Species/Species'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="header-img" src={headerImg}></img>
      </header>
      <Species />
    </div>
  );
}

export default App;
