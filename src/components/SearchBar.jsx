import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/search.svg";

const SearchForm = styled.form`
  width: 100%;
  max-width: 488px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary7};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary2};

  input {
    flex: 1;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.secondary9};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
      opacity: 0.5;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
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
      width: 24px;
      height: 24px;
    }

    &:hover img {
      transform: none;
      color: none;
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

  const handleIconClick = () => {
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
      <button type="button" onClick={handleIconClick}>
        <img src={SearchIcon} alt="Search Icon" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
