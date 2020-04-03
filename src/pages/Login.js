/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { authContext } from '../context/AuthContext';

const Login = ({ history }) => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuthData } = useContext(authContext);

  const handleLoginRequest = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email: email,
      password: password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(
      'http://penguin.linux.test:8000/api/users/login',
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data.token);
        console.log(typeof data.token);
        setAuthData(data.token);
        history.replace('/admin');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center">Sign In</h1>
        <Form onSubmit={(e) => handleLoginRequest(e)}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
          >
            Sign In
          </Button>

          <Link to="/register">Dont have an account? </Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
