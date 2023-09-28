// score.js

import { useState, useEffect } from 'react';

const Score = ({questions}) => {

  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let score = 0;
    questions.forEach((question, index) => {
      if(question.correctAnswer === responses[index]) {
        score++;
      }
    });
    setScore(score);
  }, [responses]);

  const onSubmit = (newResponses) => {
    setResponses(newResponses);
  }

  return (
    <div>
      {/* Render quiz and pass onSubmit to collect responses */}
      <QuizForm onSubmit={onSubmit} />

      {/* Show score if all responses received */}
      {responses.length === questions.length && (
        <div>You scored {score} out of {questions.length}</div>  
      )}

    </div>
  );

}

export default Score;
