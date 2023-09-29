import React, { useState } from 'react';
import './animePage.css'; // css to my back ground

/**
 * The QuizForm component is a form that allows users to input their responses to 10 quiz questions.
 */

const QuizForm = ({sharedQuiz}) => {
    const [responses, setResponses] = useState({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
    });
  
    const [showResult, setShowResult] = useState(false);
    const [userScore, setUserScore] = useState(null);
  
    const handleRadioChange = (question, value) => {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [question]: value,
      }));
    };

    const getScore = () => {
      const quiz = sharedQuiz != null ? sharedQuiz.questions : [];
      const userAnswers = Object.values(responses);
      const answerKey = quiz.map((question) => getAnswer(question));
      return calculateScore(userAnswers, answerKey, answerKey.length)
    }

    const calculateScore = (user, key, size) => {
      let result = 0;
      for (let i = 0; i < size; i++){
        if (user[i] === key[i]){
          result++;
        }
      }
      const score = (result / size) * 100;
      return score;
    }

    const getAnswer = (question) => {
      return question.answers
        .filter((answer) => {
          return answer.is_correct === true
        })
        .map((answer) => answerOptions(answer.answer_id))[0];
    }
  
    const handleSubmit = (e) => {
      setUserScore(getScore());
      e.preventDefault();
      setShowResult(true); // Set to true when the form is submitted
    };

  const formatQuiz = () => {
    const quiz = sharedQuiz != null ? sharedQuiz.questions : [];
    return quiz.map((q, qid) => {
      return (
      <div className="question" key={qid}>
        <p>{q.question}</p>  
        {q.answers.map((a, aid) => {
          return (
          <div key={aid} className="answers">
            <label>
              <input
                type="radio"
                name={q.question}
                value={answerOptions(a.answer_id)}
                onChange={() => handleRadioChange(`q${q.question_id}`, answerOptions(a.answer_id))}
                checked={responses[`q${q.question_id}`] === answerOptions(a.answer_id)}
                required />
              {`${answerOptions(a.answer_id)}) ${a.answer_text}`}
            </label>
          </div>
        )})}
      </div>
    )})
  }

  function answerOptions(number){
    const strNumber = String(number);
    switch(strNumber){
      case "1": 
        return "a";
      case "2":
        return "b";
      case "3": 
        return "c";
      case "4":
        return "d";
      case "5":
        return "e";
      default:
        throw new Error("Unknown number provided for answer options");
    }
  }

  return (
    <div className="quiz-container quiz-text">
      <h1> Anime Quiz</h1>
      <form id="quiz-form" onSubmit={handleSubmit}>
        {formatQuiz()}

        <button type="submit">Submit</button>
      </form>
      <div className="result" id="result"></div>

      {userScore !== null ? <h1>{`Score: ${userScore}`}</h1> : null}
    </div>
  );
};

export default QuizForm;

