import React from "react";
import styles from "../styles/HomePage.module.css"
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className={styles.Footer}>
      <div>
        <div>
          <p>Developed by: Stuart Wall</p>
        </div>
        <div>
          <a href="https://github.com/Clinelly">
            <i className="fa-brands fa-square-github" />
          </a>
          <a href="https://www.linkedin.com/in/swall289/">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
