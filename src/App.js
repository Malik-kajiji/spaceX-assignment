import React, { useState } from 'react';
import './styles/global.scss';
import Bunner from './components/Bunner';
import SearchBox from './components/SearchBox';
import Cards from './components/Cards';

function App() {
  const [chosenWord,setChosenWord]=useState('')
  return (
    <div className="App">
      <Bunner />
      <SearchBox setChosenWord={setChosenWord} />
      <Cards chosenWord={chosenWord} />
    </div>
  );
}

export default App;
