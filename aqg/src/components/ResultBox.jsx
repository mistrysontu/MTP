import React from "react";
// import "../style.css";
import "react-bootstrap";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Result = ({ score, playAgain }) => (
  <Container>
    <Row className="justify-content-md-center align-items-center ">
      <Col
        md="auto"
        style={{
          alignContent: "center",
          padding: "20px 50px",
        }}
      >
        <div className="score-board">
          <div className="score text-center">
            {" "}
            Your score is {score} / 5 correct answer ! ! !{" "}
          </div>
          <button className="playBtn" onClick={playAgain}>
            {" "}
            Play Again{" "}
          </button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Result;
