import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import etd from "../../Assets/Projects/etd.jpg";
import potholes from "../../Assets/Projects/potholes.png";
import vo from "../../Assets/Projects/vo.png";
import fm from "../../Assets/Projects/fm.png";
import emotion from "../../Assets/Projects/emotion.png";
import text_to_image from "../../Assets/Projects/text_to_image.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etd}
              isBlog={false}
              title="Segment, Summarize & Classify: ETDs"
              description="Designed and developed an end-to-end system to segment 5000 ETDs into chapters. Summarized and classified the segmented chapters using language models. Integrated the system with React front-end and PostgreSQL database. Set up CI/CD pipelines and containerized the application by creating Docker images."
              ghLink="https://github.com/dharneeshkar004"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text_to_image}
              isBlog={false}
              title="Text-to-Image Generation"
              description="Generated high quality realistic images from the given text description using GAN-based deep learning models namely: DF-GAN, ManiGAN, and lightweight ManiGAN. Evaluated based on Inception Score (IS) and Frechet Inception Distance (FID). The lightweight ManiGAN has the best score (10.263) and also uses least number of parameters (-40%)."
              ghLink="https://github.com/dharneeshkar004"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fm}
              isBlog={false}
              title="Face mask detection system"
              description="Automated a real-time face mask detection system using OpenCV and CNN based deep learning algorithms such as VGG, ResNet, Inception and DenseNet. Achieved best Average Precision(AP) of 91% from the Densenet-201 model, followed by 90.45% from the Inceptionv3 model.                                                                          "
              ghLink="https://github.com/dharneeshkar004"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potholes}
              isBlog={false}
              title="Detection of Potholes & Pedestrians"
              description="Created a new 1500 image dataset for potholes in Indian roads from scratch. Implemented end-to-end Deep Learning methods such as YOLO, Faster-RCNN and SSD to detect potholes and pedestrians."
              ghLink="https://github.com/dharneeshkar004"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vo}
              isBlog={false}
              title="Feature-based Monocular Visual Odometry"
              description="Performed Monocular Visual Odometry on KITTI dataset using 5 image features namely, SIFT, BRISK, SURF, ORB and FAST. Compared and evaluated model performances using the RPE and ATE error metrics. Attained best performance on SIFT-SIFT combination with a lowest average RPE of 0.06."
              ghLink="https://github.com/dharneeshkar004"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow. 
              Used OpenCV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/dharneeshkar004n"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
