import React from 'react';
import Header from './component/header';
import './App.css'; // css back ground
import CharacterScroller from './component/characterscroller';

const App = () => {
  return (
    <div>
      <Header />
      <CharacterScroller />
      
    </div>
  );
};

export default App;