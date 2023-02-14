import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ListGroup from 'react-bootstrap/ListGroup';
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { SiPython } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h3 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h3>
        <div   >
          <Row>
            <Col>
            <ListGroup className="project-card-view"  >
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}}>Python</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}}>JavaScript</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}}>SQL</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}}>Java</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}}>C/C++</ListGroup.Item>
    </ListGroup>
            </Col>
            <Col>
            <ListGroup className="project-card-view">
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>PyTorch</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}} >TensorFlow</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Pandas</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Scikit-learn</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>NLTK</ListGroup.Item>
    </ListGroup>
    </Col>
    <Col>
    <ListGroup className="project-card-view">
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>React</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Angular</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Flask</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}} >Node.js</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>HTML/CSS</ListGroup.Item>
    </ListGroup></Col>
    <Col>
    <ListGroup className="project-card-view">
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}} >AWS</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Docker</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', backgroundColor:'transparent'}} >Git</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Tableau</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', backgroundColor:'transparent'}}>Figma</ListGroup.Item>
    </ListGroup>
    </Col>
          </Row>
           
        {/* <Row>
              <Col md={2}>Programming</Col>
              <Col md={8}>Python, C, C++, JavaScript, SQL</Col>
            </Row>
            <Row>
              <Col md={2}>Tools</Col>
              <Col md={10}>TensorFlow, PyTorch, Scikit-learn, Pandas, Tableau, OpenCV, NumPy, Jupyter, Docker, Git, AWS</Col>
            </Row>
            <Row>
              <Col md={2}>Web Technologies</Col>
              <Col md={8}>Node.js, Flask, Angular, React, HTML, CSS, Redis, Web3, JQuery, Rest API</Col>
            </Row> */}
        </div>
           
        

       
      </Container>
    </Container>
  );
}

export default About;
