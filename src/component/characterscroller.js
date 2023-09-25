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

  // useEffect(async () => {
  //   // Fetch quiz data when a character is selected
  //   if (selectedCharacter) {
  //     // Construct the URL to the quizdata.json file in the public folder
  //     // const jsonFileURL = '/quizdata.json'; 
  //     // const data = await fetch(jsonFileURL);
  //     // console.log(JSON.stringify(data, null, 4));
  //     // fetch(jsonFileURL)
  //     //   .then((response) => response.json())
  //     //   .then((data) => {
  //     //     setQuizData(data); // Set the fetched quiz data in state
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error('Error fetching quiz data:', error);
  //     //   });
  //   }
  // }, [selectedCharacter]);
  
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
    const url = '/images/team-minato-and-kakashi-wsac3k91uzt7fp3t.webp'
    saveStyles(url);
    // Fetch quiz data when a character is selected
    if (selectedCharacter) {
      // Construct the URL to the quizdata.json file in the public folder
      fetchData();
      // fetch(jsonFileURL)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setQuizData(data); // Set the fetched quiz data in state
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching quiz data:', error);
      //   });
    }
  }, [selectedCharacter]);
  // const renderQuiz = () => {
  //   // Check if quizData is available
  //   console.log(quizData)
  //   if (quizData) {
  //     // Find the selected quiz data from the fetched quizData
  //     const selectedQuiz = quizData

  //     if (selectedQuiz) {
  //       return (
  //         <div className="quiz">
  //           <h2>{selectedQuiz.quiz_name} Quiz</h2>
  //           {selectedQuiz.questions.map((question) => (
  //             <div key={question.question_id}>
  //               <p>{question.question}</p>
  //               <ul>
  //                 {question.answers.map((answer) => (
  //                   <li key={answer.answer_id}>{answer.answer_text}</li>
  //                 ))}
  //               </ul>
  //             </div>
  //           ))}
  //         </div>
  //       );
  //     }
  //   }

  //   // Render a default message if no character is selected or if the data is not available
  //   return <p></p>;
  // };


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

