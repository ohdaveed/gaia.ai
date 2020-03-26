import React from "react";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
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
              Explore the world. Take photos. Identify of 10,000 species of
              plants
            </Card.Text>
            <Button size="md" href="/register">
              {" "}
              SIGN UP
              
            </Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Home;
