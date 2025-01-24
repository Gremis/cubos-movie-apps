import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;

  select {
    width: 100%;
    max-width: 273px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondary7};
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.secondary2};
    color: ${({ theme }) => theme.colors.secondary7}; /* Cor do texto */
    appearance: none; /* Remove a flecha padrão */
    -webkit-appearance: none; /* Para navegadores baseados no Webkit */
    -moz-appearance: none; /* Para Firefox */
    position: relative;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary2};
    }

    /* Estilizar a flecha manualmente */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${({ theme }) =>
    encodeURIComponent(
      theme.colors.secondary7
    )}'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;

    option {
      color: ${({ theme }) => theme.colors.secondary7}; /* Cor do texto nas opções */
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
