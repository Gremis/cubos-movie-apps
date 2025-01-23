import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.img`
  filter: ${({ theme }) => theme.colors.logo.filter};
  transition: filter 0.2s ease-in-out;
`;

const Title = styled.h2`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <Title>
        <Link to="/">
          <Logo src="/icon.png" alt="Movies Logo" />
          Movies
        </Link>
      </Title>
      <ThemeToggleButton onClick={toggleTheme}>
        <img src={theme === "light" ? MoonIcon : SunIcon} alt="Toggle Theme Icon" />
      </ThemeToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
