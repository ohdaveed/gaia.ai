import React from "react";
import Header from "../components/Header";
import { Card, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://res.cloudinary.com/darrizon/image/upload/v1578199325/background-omg/purple-haze.jpg"
        alt="leaves bg"
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>
            <h1>GAIA.ai</h1>
          </Card.Title>
          <Card.Text>
            Get excited about nature again. Trek. Discover. Identify.
          </Card.Text>
          <div>
            <Button size="md" href="/register">
              {" "}
              Register
            </Button>
            {"   "}
            <Button size="md" href="/login">
              {" "}
              Login
            </Button>
          </div>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Home;
