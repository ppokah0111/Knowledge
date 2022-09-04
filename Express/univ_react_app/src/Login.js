import { Form, Button, Col, Row } from "react-bootstrap";
import React, { useState, createRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from '@rehooks/local-storage';

export default function Login() {
  const userRef = createRef();
  const passwordRef = createRef();

  let navigate = useNavigate();

  const [user, setUser, deleteUser] = useLocalStorage('user');
  const [response, setResponse] = useState({});

  const handle_loginAuth = (e) => {
    e.preventDefault();

    //see server.js - expecting the response from the server of the query posited in uniUser.js
    fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify({
        user: userRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.user == "invalid") {
          console.log(json);
          setResponse(json);
        } else if (json.role == "student") {
          setUser(json)
          navigate("studentLink");
        } else if (json.role == "admin") {
          setUser(json)
          navigate("adminLink");
        } else if (json.role == "teacher") {
          setUser(json)
          navigate("teacherLink");
        }
      });
  };

  return (
    <div>
      <div>
        <h1>University Login Page</h1>
      </div>{" "}
      <br />
      <Form onSubmit={handle_loginAuth}>
        <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
          <Form.Label column sm="2">
            Your Username &nbsp;{" "}
          </Form.Label>
          <Col sm="10">
            <Form.Control
              ref={userRef}
              type="text"
              placeholder="Enter Username"
            />
          </Col>
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm="2">
            Your Password &nbsp;{" "}
          </Form.Label>
          <Col sm="10">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
            />
          </Col>
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <br />
        <br />
        <Button variant="primary" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
      <h1>{JSON.stringify(response)}</h1>
    </div>
  );
}
