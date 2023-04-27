import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

function HomePage() {
  const profileVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 1,
      },
    },
  };

  const nameVariants = {
    hidden: {
      color: "#ffffff",
    },
    visible: {
      color: "#198754",
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="App d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#1a202c", minHeight: "92vh" }}
    >
      <Container className="text-center">
        <motion.div
          variants={profileVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-4">
            <motion.img
              src="./images/solgi.png"
              alt="profile"
              className="rounded-circle App-logo"
              style={{ width: "230px", height: "230px" }}
            />
          </div>
        </motion.div>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="display-3 mb-5 text-white"
          style={{ fontWeight: "400" }}
        >
          Hi, my name is{" "}
          <motion.span variants={nameVariants}>Seulgi</motion.span>. I love
          listening to music.
        </motion.h1>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button
            variant="success"
            size="lg"
            href="https://www.spotify.com"
            style={{
              borderRadius: "20px",
              fontSize: "1.3rem",
              fontWeight: 400,
            }}
          >
            Listen with me!
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}

export default HomePage;
