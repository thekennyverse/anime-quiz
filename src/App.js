import React from 'react';
import Header from './component/header';
import './App.css'; // css to my back ground
import CharacterScroller from './component/characterscroller';
import AudioPlayer from  './component/audio.js';
import  QuizForm   from   './component/quizform.js';



const App = () => {
  return (
    <div>

      <Header />
      <CharacterScroller />
      <AudioPlayer />
      <QuizForm />
      
    </div>
  );
};

export default App;