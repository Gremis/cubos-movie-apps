import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;

  select,
  button {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const Filters = ({ filters, onFilterChange }) => {
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
        <option value="">Ordenar Por</option>
        <option value="popularity.desc">Popularidade (Maior)</option>
        <option value="release_date.desc">Data de Lançamento</option>
        <option value="vote_average.desc">Avaliação</option>
      </select>
      <select
        name="with_genres"
        value={filters.with_genres || ""}
        onChange={handleSelectChange}
      >
        <option value="">Gênero</option>
        <option value="28">Ação</option>
        <option value="12">Aventura</option>
        <option value="16">Animação</option>
        <option value="35">Comédia</option>
        <option value="80">Crime</option>
      </select>
    </FiltersContainer>
  );
};

export default Filters;
