import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 0; 
  border-top: 1px solid ${({ theme }) => theme.colors.primary}; 

  p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 400;
    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      line-height: 19.5px;
      font-weight: 400;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

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
