import React from "react";
import stableLogo from "../images/stable-logo.svg";
import Container from "../styles/Header.js";

function Header() {
  return (
    <Container className="Header">
      <img src={stableLogo} alt="stable logo" />
    </Container>
  );
}

export default Header;
