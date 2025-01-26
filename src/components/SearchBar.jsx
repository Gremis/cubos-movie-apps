import React, { useState, useEffect } from "react";
import { SearchForm } from "../styles/SearchBarStyles";
import SearchIcon from "../assets/icons/search.svg";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        onSearch(query);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Pesquise por filmes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={() => onSearch(query)}>
        <img src={SearchIcon} alt="Search Icon" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
