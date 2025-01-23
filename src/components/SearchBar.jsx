import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  input {
    flex: 1;
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text};
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
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
        placeholder="Buscar filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
