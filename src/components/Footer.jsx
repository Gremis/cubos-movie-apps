import React from "react";
import { FooterContainer } from "../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        2023 © Todos os direitos reservados a{" "}
        <a href="https://www.cubos.io" target="_blank" rel="noopener noreferrer">
          Cubos Movies
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
