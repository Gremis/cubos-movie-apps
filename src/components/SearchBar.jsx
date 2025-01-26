import React, { useState } from "react";
import { SearchForm } from "../styles/SearchBarStyles";
import SearchIcon from "../assets/icons/search.svg";

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
