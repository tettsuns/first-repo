import React from 'react';

const HomePage = () => {
    return (
        <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "black"
      }}
    >
        <h1 style={{color: "white"}}>This is the <span style={{color: "red"}}>Home Page</span> :)</h1>
        </div>
    );
};

export default HomePage;