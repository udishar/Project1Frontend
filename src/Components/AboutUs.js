import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "black" }}>
        This is <span style={{ color: "red" }}>About Us</span> Page
      </h1>
    </div>
  );
};

export default AboutUs;
