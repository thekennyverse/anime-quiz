import React, { useState }  from 'react';
import Header from './header';
import './animePage.css'; // css to my back ground
import CharacterScroller from './characterscroller';
import AudioPlayer from  './audio.js';
import QuizForm   from   './quizform.js';
 

const AnimePage = () => {
  const [sharedQuiz, setSharedQuiz] = useState(null);
  return (
    <div>
      <Header />
      <CharacterScroller setSharedQuiz={setSharedQuiz} />
      <AudioPlayer />
      <QuizForm sharedQuiz={sharedQuiz}/>
     
    </div>
  );
};

export default AnimePage;