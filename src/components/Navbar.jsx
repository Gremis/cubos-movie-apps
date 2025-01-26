import React from "react";
import { NavbarContainer, NavbarContent, Logo, Title, ThemeToggleButton } from "../styles/NavbarStyles";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Title>
          <a href="/">
            <Logo src="/icon.png" alt="Movies Logo" />
            Movies
          </a>
        </Title>
        <ThemeToggleButton onClick={toggleTheme}>
          <img src={theme === "light" ? MoonIcon : SunIcon} alt="Toggle Theme Icon" />
        </ThemeToggleButton>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
