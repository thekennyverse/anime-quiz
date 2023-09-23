import React, { useState, useEffect } from 'react';

const CharacterScroller = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  useEffect(() => {
    // Fetch quiz data when a character is selected
    if (selectedCharacter) {
      // Construct the URL to the quizdata.json file in the public folder
      const jsonFileURL = process.env.PUBLIC_URL + '/anime-quiz/public/quizdata.json';

      fetch(jsonFileURL)
        .then((response) => response.json())
        .then((data) => {
          setQuizData(data); // Set the fetched quiz data in state
        })
        .catch((error) => {
          console.error('Error fetching quiz data:', error);
        });
    }
  }, [selectedCharacter]);

  const renderQuiz = () => {
    // Check if quizData is available and a character is selected
    if (quizData && selectedCharacter) {
      // Find the selected quiz data from the fetched quizData
      const selectedQuiz = quizData.quizzes.find(
        (quiz) => quiz.quiz_name === selectedCharacter
      );

      if (selectedQuiz) {
        return (
          <div className="quiz">
            <h2>{selectedQuiz.quiz_name} Quiz</h2>
            {selectedQuiz.questions.map((question) => (
              <div key={question.question_id}>
                <p>{question.question}</p>
                <ul>
                  {question.answers.map((answer) => (
                    <li key={answer.answer_id}>{answer.answer_text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      }
    }

    // Render a default message if no character is selected or if the data is not available
    return <p></p>;
  };

  return (
    <div className="scroller">
      <div className="scroller-item" onClick={() => handleCharacterClick('Naruto')}>
        <img src="/images/Naruto.jpeg" alt="Naruto" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Scott Piligram')}>
        <img src="/images/scott.png" alt="Scott Piligram" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Death Note')}>
        <img src="/images/deathnote.jpeg" alt="Death Note" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('One Punch Man')}>
        <img src="/images/onepunchman.png" alt="One Punch Man" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Power Rangers')}>
        <img src="/images/paowerranger1.png" alt="Power Rangers" />
      </div>
      <div className="scroller-item" onClick={() => handleCharacterClick('Jujutsu Kaisen')}>
        <img src="/images/Gojo.png" alt="Jujutsu Kaisen" />
      </div>
      {renderQuiz()} {/* Move renderQuiz inside the return statement */}
    </div>
  );
};

export default CharacterScroller;
