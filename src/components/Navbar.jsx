import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
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
`;

const SearchContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <NavbarContainer>
      <Header>
        <h2>
          <Link to="/">
            <BiCameraMovie /> MoviesLib
          </Link>
        </h2>
      </Header>

      <SearchContainer>
        <SearchBar onSearch={handleSearch} />
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
