import React, { useState } from 'react';

const QuizForm = () => {
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
  
    const handleRadioChange = (question, value) => {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [question]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowResult(true); // Set to true when the form is submitted
    };

  return (
    <div className="quiz-container">
      <h1>Naruto Quiz</h1>
      <form id="quiz-form" onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="question">
          <p>1. Who is Naruto's best friend?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={() => handleRadioChange('q1', 'a')}
              checked={responses.q1 === 'a'}
              required
            />{' '}
            a) Sasuke
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={() => handleRadioChange('q1', 'b')}
              checked={responses.q1 === 'b'}
            />{' '}
            b) Shikamaru
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={() => handleRadioChange('q1', 'c')}
              checked={responses.q1 === 'c'}
            />{' '}
            c) Sakura
          </label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <p>2. Who is Naruto's teacher?</p>
          <label>
            <input
              type="radio"
              name="q2"
              value="a"
              onChange={() => handleRadioChange('q2', 'a')}
              checked={responses.q2 === 'a'}
              required
            />{' '}
            a) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="b"
              onChange={() => handleRadioChange('q2', 'b')}
              checked={responses.q2 === 'b'}
            />{' '}
            b) Jiraiya
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="c"
              onChange={() => handleRadioChange('q2', 'c')}
              checked={responses.q2 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 3 */}
        <div className="question">
          <p>3. Who is known as the Copy Ninja?</p>
          <label>
            <input
              type="radio"
              name="q3"
              value="a"
              onChange={() => handleRadioChange('q3', 'a')}
              checked={responses.q3 === 'a'}
              required
            />{' '}
            a) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="b"
              onChange={() => handleRadioChange('q3', 'b')}
              checked={responses.q3 === 'b'}
            />{' '}
            b) Minato
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="c"
              onChange={() => handleRadioChange('q3', 'c')}
              checked={responses.q3 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 4 */}
        <div className="question">
          <p>4. Who is Sasuke's brother?</p>
          <label>
            <input
              type="radio"
              name="q4"
              value="a"
              onChange={() => handleRadioChange('q4', 'a')}
              checked={responses.q4 === 'a'}
              required
            />{' '}
            a) Itachi
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="b"
              onChange={() => handleRadioChange('q4', 'b')}
              checked={responses.q4 === 'b'}
            />{' '}
            b) Shikamaru
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="c"
              onChange={() => handleRadioChange('q4', 'c')}
              checked={responses.q4 === 'c'}
            />{' '}
            c) Sakura
          </label>
        </div>

        {/* Question 5 */}
        <div className="question">
          <p>5. Who is Naruto's father?</p>
          <label>
            <input
              type="radio"
              name="q5"
              value="a"
              onChange={() => handleRadioChange('q5', 'a')}
              checked={responses.q5 === 'a'}
              required
            />{' '}
            a) Minato
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="b"
              onChange={() => handleRadioChange('q5', 'b')}
              checked={responses.q5 === 'b'}
            />{' '}
            b) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="c"
              onChange={() => handleRadioChange('q5', 'c')}
              checked={responses.q5 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 6 */}
        <div className="question">
          <p>6. Who is known as the Toad Sage?</p>
          <label>
            <input
              type="radio"
              name="q6"
              value="a"
              onChange={() => handleRadioChange('q6', 'a')}
              checked={responses.q6 === 'a'}
              required
            />{' '}
            a) Jiraiya
          </label>
          <label>
            <input
              type="radio"
              name="q6"
              value="b"
              onChange={() => handleRadioChange('q6', 'b')}
              checked={responses.q6 === 'b'}
            />{' '}
            b) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q6"
              value="c"
              onChange={() => handleRadioChange('q6', 'c')}
              checked={responses.q6 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 7 */}
        <div className="question">
          <p>7. Who is known for his "Eight Gates" technique?</p>
          <label>
            <input
              type="radio"
              name="q7"
              value="a"
              onChange={() => handleRadioChange('q7', 'a')}
              checked={responses.q7 === 'a'}
              required
            />{' '}
            a) Guy
          </label>
          <label>
            <input
              type="radio"
              name="q7"
              value="b"
              onChange={() => handleRadioChange('q7', 'b')}
              checked={responses.q7 === 'b'}
            />{' '}
            b) Sasuke
          </label>
          <label>
            <input
              type="radio"
              name="q7"
              value="c"
              onChange={() => handleRadioChange('q7', 'c')}
              checked={responses.q7 === 'c'}
            />{' '}
            c) Minato
          </label>
        </div>

        {/* Question 8 */}
        <div className="question">
          <p>8. Who is the Fourth Hokage?</p>
          <label>
            <input
              type="radio"
              name="q8"
              value="a"
              onChange={() => handleRadioChange('q8', 'a')}
              checked={responses.q8 === 'a'}
              required
            />{' '}
            a) Minato
          </label>
          <label>
            <input
              type="radio"
              name="q8"
              value="b"
              onChange={() => handleRadioChange('q8', 'b')}
              checked={responses.q8 === 'b'}
            />{' '}
            b) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q8"
              value="c"
              onChange={() => handleRadioChange('q8', 'c')}
              checked={responses.q8 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 9 */}
        <div className="question">
          <p>9. Who is Naruto's rival?</p>
          <label>
            <input
              type="radio"
              name="q9"
              value="a"
              onChange={() => handleRadioChange('q9', 'a')}
              checked={responses.q9 === 'a'}
              required
            />{' '}
            a) Sasuke
          </label>
          <label>
            <input
              type="radio"
              name="q9"
              value="b"
              onChange={() => handleRadioChange('q9', 'b')}
              checked={responses.q9 === 'b'}
            />{' '}
            b) Kakashi
          </label>
          <label>
            <input
              type="radio"
              name="q9"
              value="c"
              onChange={() => handleRadioChange('q9', 'c')}
              checked={responses.q9 === 'c'}
            />{' '}
            c) Guy
          </label>
        </div>

        {/* Question 10 */}
        <div className="question">
          <p>10. Who is the author of Naruto?</p>
          <label>
            <input
              type="radio"
              name="q10"
              value="a"
              onChange={() => handleRadioChange('q10', 'a')}
              checked={responses.q10 === 'a'}
              required
            />{' '}
            a) Masashi Kishimoto
          </label>
          <label>
            <input
              type="radio"
              name="q10"
              value="b"
              onChange={() => handleRadioChange('q10', 'b')}
              checked={responses.q10 === 'b'}
            />{' '}
            b) Tite Kubo
          </label>
          <label>
            <input
              type="radio"
              name="q10"
              value="c"
              onChange={() => handleRadioChange('q10', 'c')}
              checked={responses.q10 === 'c'}
            />{' '}
            c) Eiichiro Oda
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="result" id="result"></div>
    </div>
  );
};

export default QuizForm;



