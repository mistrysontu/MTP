import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from './Login';
import Logout from './Logout'
import SignUp from './SignUp';
import Home from './Home';
import Info from './Info';
import Exam from "./Exam";
import NoMatchPage from './NoMatchPage';
export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to={"/home"}>
              AQG
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/info"}>
                  Project Info
                </Nav.Link>
                <Nav.Link href="https://github.com/mistrysontu/MTP.git">
                  Source Code
                </Nav.Link>

                <NavDropdown title="Account" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    as={Link}
                    to={"/login"}
                    style={{ cursor: "not-allowed" }}
                  >
                    Log in
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/signup"}>
                    Sign Up
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/logout"}>
                    Log out
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/admin"} disabled>
                    Admin Login
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#" disabled>
                  Log in
                </Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes >
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/logout" element={<Logout/>} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/exam" element={<Exam/>} />
            <Route path = "*" element={<NoMatchPage/>} />
          </Routes >
        </div>
      </Router>
    );
  }
}
