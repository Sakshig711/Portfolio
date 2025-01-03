import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codesync from "../../Assets/Projects/codesync.png";
import dbmslab from "../../Assets/Projects/dbmslab.png";
import bookcorner from "../../Assets/Projects/bookcorner.png";
import cosocket from "../../Assets/Projects/cosocket.png";

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
              imgPath={cosocket}
              isBlog={false}
              title="COSOCKET"
              description="Developed a custom manufacturing website, increasing process efficiency by 30% using Next.js and Tailwind.Enhanced user engagement by 25% through personalized product and process management, leveraging MongoDB.Collaborated with 4 cross-functional teams to streamline workflows, reducing project completion time by 20%."
              ghLink="https://github.com/Cosocket-Official"
              demoLink="https://cosocket-client.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codesync}
              isBlog={false}
              title="CODESYNC"
              description="Developed a real-time collaborative code editor that improved team productivity by 40% using Socket.io. Reduced debugging time by 30% by adding live execution and debugging features, built with JavaScript. Streamlined collaboration for 50+ users by integrating version control with a unified workspace."
              ghLink="https://github.com/Sakshig711/CodeSync_PBL"
              demoLink="https://codesync-e8ff.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbmslab}
              isBlog={false}
              title="DBMS-VIRTUAL LAB"
              description="Developed a virtual lab platform, improving DBMS understanding for 200+ students using React and JavaScript. Increased curriculum alignment by 90% through hands-on exercises, enhancing student performance. Improved learning engagement by 20% by integrating interactive and real-time feedback features."
              ghLink="https://github.com/Sakshig711/Virtual-lab"
              demoLink="https://virtual-lab-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookcorner}
              isBlog={false}
              title="BOOK-CORNER"
              description="Built an online book repository that provided 1,000+ students access to curated academic resources using MongoDB. Improved student academic performance by 15% by offering comprehensive guides and assignments. Streamlined access to academic content by reducing search time by 50% through efficient categorization."
              ghLink="https://github.com/Sakshig711/PBL_Book_Corner"
              demoLink="https://bookscorner-v4a1.onrender.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
