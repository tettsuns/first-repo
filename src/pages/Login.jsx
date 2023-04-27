import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Login() {
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
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="6">
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <Form style={formStyle}>
            <h1 className="mb-4 text-center">Login</h1>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Row>
              <Col style={{padding: "0 0 0 0"}}>
                <Button variant="link" className="text-decoration-none">
                  Forgot password?
                </Button>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">  
                <Button variant="success" style={buttonStyle}>Login</Button>
            </Row>
          </Form>
        </motion.div>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
