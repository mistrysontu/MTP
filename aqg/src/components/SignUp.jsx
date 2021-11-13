import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
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
            //   backgroundColor: "#eeebeb",
            }}
          >
            <Form>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <br />
              <Button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </Button>
              <p className="forgot-password text-right">
                Already registered{" "}
                <Link as={Link} to={"/login"}>
                  sign in?
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
