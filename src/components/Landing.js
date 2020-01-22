import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Button } from 'react-bootstrap';
import Menu from './Menu.js'

const Landing = (props) => {
  return (
      <Container>
          <Menu />
      <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/darrizon/image/upload/v1579651896/background-omg/green-leaves.jpg" alt="leaves bg"/>
  <Card.ImgOverlay>

<Card.Body><Card.Title><h1>GAIA.ai</h1></Card.Title>
    <Card.Text>
    Explore the world. Take photos. Identify of 10,000 species of plants
    </Card.Text>
    <Button size='lg'> SIGN UP!</Button>
    </Card.Body>
  </Card.ImgOverlay>
</Card>
    
    </Container>
  );
};

export default Landing;