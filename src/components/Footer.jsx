import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
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
