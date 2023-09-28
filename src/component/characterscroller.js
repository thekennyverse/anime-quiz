import React, { useState, useEffect } from 'react';

const CharacterScroller = ({setSharedQuiz}) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quizId, setQuizId] = useState(null);
  const [styles, setStyles] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const handleCharacterClick = (characterName, quizId) => {
    setSelectedCharacter(characterName);
    setQuizId(quizId)
  };

  
  
  const fetchData = async () => {
    const jsonFileURL = './quizdata.json'; 
    const response = await fetch(jsonFileURL);
    const data = await response.json();

    const selectedQuiz = data.quizzes.find(
      (quiz) => quiz.quiz_id === quizId
    );
    setQuizData(selectedQuiz)
    setSharedQuiz(selectedQuiz)
  }

  const saveStyles = (url) => {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }

  useEffect(() => {
    const url = '/images/Quizbackground.png'
    saveStyles(url);
    if (selectedCharacter) {
      
      fetchData();
    
    }
  }, [selectedCharacter]);
  

  return (
    <div className="scroller">
      <div className="scroller-item" onClick={() => handleCharacterClick('Naruto', 1)}>
        <img src="/images/narutoQ.png" alt="Naruto" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Scott Piligram', 2)}>
        <img src="/images/scott.png" alt="Scott Piligram" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Death Note', 3)}>
        <img src="/images/deathnote.jpeg" alt="Death Note" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('One Punch Man', 4)}>
        <img src="/images/onepunchman.png" alt="One Punch Man" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Power Rangers', 5)}>
        <img src="/images/paowerranger1.png" alt="Power Rangers" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Jujutsu Kaisen', 6)}>
        <img src="/images/Gojo.png" alt="Jujutsu Kaisen" />
      </div>
    </div>
  );
};

export default CharacterScroller;

