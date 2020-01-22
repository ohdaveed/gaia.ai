import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Button } from 'react-bootstrap';
<<<<<<< HEAD
=======
import Menu from './Menu.js'
>>>>>>> bf2f139a1ad88e87450cc3212bc450ad5808523e

const Landing = (props) => {
  return (
      <Container>
<<<<<<< HEAD
    <div>
      <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/darrizon/image/upload/v1579651896/background-omg/green-leaves.jpg" alt="leaves bg" fluid />
=======
          <Menu />
      <Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/darrizon/image/upload/v1579651896/background-omg/green-leaves.jpg" alt="leaves bg"/>
>>>>>>> bf2f139a1ad88e87450cc3212bc450ad5808523e
  <Card.ImgOverlay>

<Card.Body><Card.Title><h1>GAIA.ai</h1></Card.Title>
    <Card.Text>
    Explore the world. Take photos. Identify of 10,000 species of plants
    </Card.Text>
    <Button size='lg'> SIGN UP!</Button>
    </Card.Body>
  </Card.ImgOverlay>
</Card>
<<<<<<< HEAD
    </div>
=======
    
>>>>>>> bf2f139a1ad88e87450cc3212bc450ad5808523e
    </Container>
  );
};

<<<<<<< HEAD
export default Landing;
=======
export default Landing;
>>>>>>> bf2f139a1ad88e87450cc3212bc450ad5808523e
