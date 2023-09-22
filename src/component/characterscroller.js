import React from 'react';

const CharacterScroller = () => {
  
  const handleCharacterClick = (characterName) => {
    
    console.log(`Clicked on ${characterName}`);
  };

  return (
    <div className="scroller">
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Naruto')}>
        <img src="/images/Naruto.jpeg" alt="Naruto" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Sasuke')}>
        <img src="/images/sasuke.jpeg" alt="Sasuke" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Kakashi')}>
        <img src="/images/kakashi.JPG" alt="Kakashi" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Jiraiya')}>
        <img src="/images/jiraiya.jpeg" alt="Jiraiya" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Guy')}>
        <img src="/images/guy.png" alt="Guy" />
      </div>
      {}
      <div className="scroller-item" onClick={() => handleCharacterClick('Hokage')}>
        <img src="/images/minato.jpeg" alt="Minato" />
      </div>
    </div>
  );
};

export default CharacterScroller;
