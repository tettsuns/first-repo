import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function LoginPage() {
  const containerStyle = {
    backgroundColor: "#1a202c",
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  };

  const buttonStyle = {
    backgroundColor: "#1a202c",
    borderColor: "#1a202c",
    fontWeight: 400,
    borderRadius: "20px",
    width: "50%",
    marginTop: "20px",
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <div style={containerStyle}>
      <Container>
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <Form style={formStyle}>
            <h1 className="mb-4 text-center">Login</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Row>
              <Col>
                <Button variant="link" className="text-decoration-none">
                  Forgot password?
                </Button>
              </Col>
              <Col>
                <Button style={buttonStyle}>Login</Button>
              </Col>
            </Row>
          </Form>
        </motion.div>
      </Container>
    </div>
  );
}

export default LoginPage;
