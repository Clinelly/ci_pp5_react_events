import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link><i className="fa-solid fa-house-chimney"></i>Home</Nav.Link>
            <Nav.Link><i className="fa-solid fa-right-to-bracket"></i>Sign In</Nav.Link>
            <Nav.Link><i className="fa-solid fa-user-plus"></i>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
