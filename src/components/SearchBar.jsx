import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/search.svg"; // Importar o ícone SVG

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  padding: 0.5rem;

  input {
    flex: 1;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    &:focus {
      outline: none;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
      filter: ${({ theme }) => theme.colors.logo.filter}; /* Opcional: Ajuste de cor do ícone */
      transition: filter 0.2s ease-in-out;
    }

    &:hover img {
      filter: ${({ theme }) => theme.colors.primaryHover}; /* Cor no hover */
    }
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    setQuery("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquise por filmes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <img src={SearchIcon} alt="Search Icon" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
