import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../login.css";
export default function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail((email) => event.target.value);
  }
  function handleChangePassword(event) {
    setPassword((password) => event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emails = localStorage.getItem("emails");
    console.log(emails);
    let passwords = localStorage.getItem("passwords");
    //To be changed
    // if(emails.includes(email) && passwords.includes(password))
    if(emails === email && passwords === password) {
      localStorage.setItem("currEmail", email);
      localStorage.setItem("currPassword", password);
      var w = window.open("", "", "width=1000,height=100");
      w.document.write("Welcome " + email);
      w.focus();
      setTimeout(function () {
        w.close();
      }, 1000);
      navigate("/home");
    } else {
      alert("Wrong credentials");
    }
  }
  return (
    <Container>
      <Row
        className="justify-content-md-center align-items-center "
        style={{ height: "88vh", border: "1px" }}
      >
        <Col
          md="auto"
          style={{
            padding: "20px 80px",
            border: "solid",
            borderRadius: "10px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="setEmail"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChangeEmail}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="setPassword"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChangePassword}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <br />
            <Button type="submit" className="btn btn-primary btn-block">
              Submit
            </Button>
            <p className="forgot-password text-right">
              Forgot <Link as={Link} to={"/login"}>
              password?
                </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
