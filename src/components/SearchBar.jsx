import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

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
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
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
        <BiSearchAlt2 />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
