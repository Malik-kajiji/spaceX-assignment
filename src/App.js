import React, { useState } from 'react';
import './styles/global.scss';
import Bunner from './components/Bunner';
import SearchBox from './components/SearchBox';
import Cards from './components/Cards';
import PodUp from './components/PopUp';

function App() {
  const [chosenWord,setChosenWord]=useState('')
  return (
    <div className="App">
      <PodUp />
      <Bunner />
      <SearchBox setChosenWord={setChosenWord} />
      <Cards chosenWord={chosenWord} />
    </div>
  );
}

export default App;
