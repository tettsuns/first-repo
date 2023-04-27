import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Registration() {
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
    width: "30%",
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
            <h1 className="mb-4 text-center">Registration</h1>
            <Form.Group controlId="formBasicEmail" className="mb-3">
            <Row>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter first name" />
                </Col>
                <Col>
                <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter first name" />
                </Col>
            </Row>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Row className="d-flex justify-content-center">  
                <Button variant="success" style={buttonStyle}>Register</Button>
            </Row>
          </Form>
        </motion.div>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;
