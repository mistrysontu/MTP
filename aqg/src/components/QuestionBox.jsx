import React, { useState } from "react";
// import "../style.css";

// Function to question inside our app
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [ticked, setSelect] = useState(false);
  console.log(answer);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={(event) => {
            event.preventDefault();
            setAnswer(answer);
            selected(text);
            setSelect(true);
          }}
          disabled={ticked}
        >
          {" "}
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
