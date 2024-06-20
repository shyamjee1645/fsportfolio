import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section>
      <Container>
        <Row className="my-5">
          <Col className="text-center">
            <h1 className="display-4">Shyam Jee</h1>
            <p className="lead text-muted">Aspiring Software Engineer</p>
            <p>
              Hi, I'm Shyam Jee, a recent graduate with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2 className="text-center">Skills</h2>
            <Row>
              <Col md={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Frontend Development</Card.Title>
                    <Card.Text>
                      HTML, CSS, JavaScript, React.js,Bootstrap(+React Bootstrap)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Backend Development</Card.Title>
                    <Card.Text>
                      Node.js, Express.js
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Databases</Card.Title>
                    <Card.Text>
                      MySQL, MongoDB, Oracle
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Other Skills</Card.Title>
                    <Card.Text>
                      Git, Linux, Data Structure and Algorithms
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2 className="text-center">Projects</h2>
            <Row>
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Body>
                  <div className="mb-3">
                      <img src="../../icons8-home-16.png" />
                    </div>
                    <Card.Title>BuyYourHome</Card.Title>
                    <Card.Text>
                      An E-commerce Platform which aims to let you buy your dream Home. Technologies used: React.js with material ui designs for modern frontend, express.js for handling backend routes, json for protected routes ,bcrypt for hashing passwords, mongodb for no-sql database for maximum flexibility. 
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/shyamjee1645/ecommerce">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Body>
                  <div className="mb-3">
                      <img src="../../icons8-post-16.png" />
                    </div>
                    <Card.Title>PostYourThoughts</Card.Title>
                    <Card.Text>
                      A Simple Blog Website which mainly showcases use of react for designing pages. Technologies used: React and react-bootstrap for Designing frontend and a simple express.js routing for routing and storing images in mongodb environment. 
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/shyamjee1645/social-media">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Body>
                  <div className="mb-3">
                      <img src="../../icons8-book-16.png" />
                    </div>
                    <Card.Title>Bookstore</Card.Title>
                    <Card.Text>
                      A brief description of Project Three. Technologies used: JavaScript, Express.js, MySQL.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/shyamjee1645/bookstore">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-5">
          <Col className="text-center">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, please don't hesitate to reach out.</p>
            <Button variant="primary" href="/contactme">Contact Me</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
