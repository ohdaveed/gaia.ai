import React from "react";
import Header from "../components/Header";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col md="auto">
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title>
              <h1>GAIA.ai</h1>
            </Card.Title>
            <Card.Text>
              Get excited about nature again. Trek. Discover. Identify.
            </Card.Text>

            <Button size="md" href="/register">
              {" "}
              Register
            </Button>
            {"   "}
            <Button size="md" href="/login">
              {" "}
              Login
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            src="https://res.cloudinary.com/darrizon/image/upload/e_vibrance:20/v1654637047/background-omg/purple-haze.jpg"
            alt="Card image"
          />

          <Card.ImgOverlay>Photo</Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
