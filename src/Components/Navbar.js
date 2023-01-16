import React, { useRef, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaHouseUser,
  FaInfoCircle,
} from "react-icons/fa";
import { RiLoginCircleFill, RiRegisteredFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const ShowNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [file, setFile] = useState(null);
  const [showInput, setShowInput] = useState(false);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
    setShowInput(false);
  };

  return (
    <>
      <header>
        <Link to="/" style={{ color: "white", fontSize: "20px" }}>
          <FaUtensils />
        </Link>

        <nav ref={navRef}>
          <Link to="/">
            <FaHouseUser /> Home
          </Link>
          <Link to="/AboutUs">
            <FaInfoCircle /> About Us
          </Link>
          <Link to="/Login">
            <RiLoginCircleFill /> Login
          </Link>
          <Link to="/Register">
            <RiRegisteredFill /> Register
          </Link>
          {file ? (
            <img
              style={{ borderRadius: "10px", cursor: "pointer" }}
              src={URL.createObjectURL(file)}
              height="40"
              width="40"
              alt="Profile"
              onClick={() => setShowInput(!showInput)}
            />
          ) : (
            <img
              style={{ borderRadius: "10px", cursor: "pointer" }}
              src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
              height="40"
              width="40"
              alt="Profile"
              onClick={() => setShowInput(!showInput)}
            />
          )}
          {showInput && (
            <input
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "4px 0px 0px 7px",
                padding: "0px",
                height: "40px",
                width: "400px",
              }}
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleFileSelect}
            />
          )}

          <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={ShowNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
