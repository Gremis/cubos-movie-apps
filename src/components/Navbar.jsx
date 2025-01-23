import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBorder};
  padding: 1rem 0;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 160px;
  height: 36px;
  filter: ${({ theme }) => theme.colors.logo.filter};
  transition: filter 0.2s ease-in-out;
`;

const Title = styled.h2`
  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.2px;
    text-align: center;
  }
`;

const ThemeToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: none;
  width: 64px;
  height: 48px;
  min-height: 44px;
  border-radius: 2px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  backdrop-filter: blur(4px);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    transform: none;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Title>
          <Link to="/">
            <Logo src="/icon.png" alt="Movies Logo" />
            Movies
          </Link>
        </Title>
        <ThemeToggleButton onClick={toggleTheme}>
          <img src={theme === "light" ? MoonIcon : SunIcon} alt="Toggle Theme Icon" />
        </ThemeToggleButton>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;