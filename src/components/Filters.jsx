import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 73px 24px 0;
  flex-wrap: wrap;
  gap: 1rem;

  select {
    width: 100%;
    max-width: 237px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondary7};
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.secondary2};
    color: ${({ theme }) => theme.colors.secondary7};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    cursor: pointer;
    background-image: url("/src/assets/icons/chevrondown.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary2};
    }

    option {
      color: ${({ theme }) => theme.colors.secondary7};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary9};
    }

    @media (max-width: 768px) {
    max-width: 300px;
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
    </FiltersContainer>
  );
};

export default Filters;
