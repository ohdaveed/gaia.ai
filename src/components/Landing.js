import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Container,
  Button,
} from "react-bootstrap";

const Landing = (props) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://res.cloudinary.com/darrizon/image/upload/e_vibrance:20,q_auto:best/v1654637047/background-omg/purple-haze.jpg"
        alt="leaves bg"
        fluid
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>
            <h1>GAIA.ai</h1>
          </Card.Title>
          <Card.Text>Trek. Snap. Identify of 10,000 species.</Card.Text>
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
      </Card.ImgOverlay>
    </Card>
  );
};

export default Landing;
