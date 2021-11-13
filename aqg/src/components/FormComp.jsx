import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
// import Info from './Info';


function FormComp (){
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/exam");
  }

  const [selectedFile, setFile] = useState();
  // On file select (from the pop up)
  function onFileChange(event) {
    // Update the state
    setFile(selectedFile => event.target.files[0])
    console.log("Hi", selectedFile)
  };
  
  // On file upload (click the upload button)
  function onFileUpload (event){

    let reader = new FileReader();
    reader.readAsDataURL(selectedFile)

    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "pic",
      selectedFile,
      "demp.pdf"
    );

    // Details of the uploaded file
    console.log("file", selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:5000/api/other_img", formData);
  };

  
    return (
      <Container>
        <Row className="justify-content-md-center align-items-center " style={{height: "88vh"}}>
          <Col md="auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Please Upload the UML file</Form.Label>
                <Form.Control type="file" onChange={onFileChange} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={onFileUpload}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  
}
export default FormComp;