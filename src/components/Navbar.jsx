import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  h2 a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  .theme-toggle {
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

const SearchContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const Logo = styled.img`
  filter: ${({ theme }) => theme.colors.logo.filter};
  transition: filter 0.2s ease-in-out;
`;

const Navbar = ({ toggleTheme, theme }) => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <NavbarContainer>
      <Header>
      <h2>
          <Link to="/">
            <Logo src="/icon.png" alt="Movies Logo" /> 
            Movies 
          </Link>
        </h2>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? "Tema Escuro" : "Tema Claro"}
        </button>
      </Header>
      <SearchContainer>
        <SearchBar onSearch={handleSearch} />
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;