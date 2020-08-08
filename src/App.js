import React from 'react'
import './App.scss'
import headerImg from './assets/starwars.png'
import Species from './components/Species/Species'
import walker from './assets/pngegg.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="box">
          <img class="character" src={walker}></img>
        </div>
        <img className="header-img" src={headerImg}></img>
        <div className="box">
          <img class="character" src={walker}></img>
        </div>
      </header>

      <Species />
    </div>
  );
}

export default App;
