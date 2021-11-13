import React, { useState } from "react";
// import "../style.css";
import { Button, Container, Row, Col } from "react-bootstrap";
// Function to question inside our app
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [ticked, setSelect] = useState(false);
  // console.log(answer);
  return (
    <Container>
      <Row >
        <Col
          md="auto"
          style={{
            alignContent: "center",
            padding: "20px 50px",
          }}
        >
          <div className="questionBox">
            <div className="question">{"Q: " + question}</div>
            {answer.map((text, index) => (
              <Button className="btn btn-secondary m-1"
                key={index}
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
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionBox;
