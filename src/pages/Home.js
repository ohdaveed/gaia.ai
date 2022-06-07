import React from "react";
import Header from "../components/Header";
import { Card, Container, Button, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>
            <h1>GAIA.ai</h1>
          </Card.Title>
          <Card.Text>
            Get excited about nature again. Trek. Discover. Identify.
          </Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Button size="md" href="/register">
              {" "}
              Register
            </Button>
            {"   "}
            <Button size="md" href="/login">
              {" "}
              Login
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
