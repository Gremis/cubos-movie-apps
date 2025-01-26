import React from "react";
import { FiltersContainer } from "../styles/FiltersStyles";
import ResetIcon from '../assets/icons/filterclean.svg'; 

const Filters = ({ filters, onFilterChange, onResetFilters }) => {
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <FiltersContainer>
      <select
        name="sort_by"
        value={filters.sort_by || ""}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Ordenar Por
        </option>
        <option value="popularity.desc">Popularidade (Maior)</option>
        <option value="release_date.desc">Data de Lançamento</option>
        <option value="vote_average.desc">Avaliação</option>
      </select>
      <select
        name="with_genres"
        value={filters.with_genres || ""}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Gênero
        </option>
        <option value="28">Ação</option>
        <option value="12">Aventura</option>
        <option value="16">Animação</option>
        <option value="35">Comédia</option>
        <option value="80">Crime</option>
      </select>
      <button onClick={onResetFilters}>
        <img src={ResetIcon} alt="Reset Filters" />
      </button>
    </FiltersContainer>
  );
};

export default Filters;
