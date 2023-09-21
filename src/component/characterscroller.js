import React from 'react';

const CharacterScroller = () => {
  
  const handleCharacterClick = (characterName) => {
    
    console.log(`Clicked on ${characterName}`);
  };

  return (
    <div className="scroller">
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Naruto')}>
        <img src="Naruto.jpeg" alt="Naruto" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Sasuke')}>
        <img src="./image/sasuke.jpeg" alt="Sasuke" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Kakashi')}>
        <img src="./image/kakashi.JPG" alt="Kakashi" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Jiraiya')}>
        <img src="./image/jiraiya.jpeg" alt="Jiraiya" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Guy')}>
        <img src="./image/guy.png" alt="Guy" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Hokage')}>
        <img src="./image/minato.jpeg" alt="Minato" />
      </div>
    </div>
  );
};

export default CharacterScroller;
