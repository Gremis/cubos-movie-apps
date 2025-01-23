import React, { useState } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;

    .query-text {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;

  select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const FiltersToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Home = () => {
  const [filtersVisible, setFiltersVisible] = useState(false); // Mostrar ou ocultar filtros
  const [filters, setFilters] = useState({}); // Filtros ativos
  const {
    data: movies,
    loading,
    fetchFilteredMovies,
    currentPage,
    totalPages,
  } = useFetchMovies("discover/movie");

  const toggleFilters = () => {
    setFiltersVisible((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    fetchFilteredMovies(filters, 1);
  };

  const handlePageChange = (page) => {
    fetchFilteredMovies(filters, page);
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <Container>
      <button onClick={toggleFilters} as={FiltersToggleButton}>
        {filtersVisible ? "Fechar Filtros" : "Abrir Filtros"}
      </button>

      {filtersVisible && (
        <FiltersContainer>
          <select name="sort_by" onChange={handleFilterChange}>
            <option value="">Ordenar Por</option>
            <option value="popularity.desc">Popularidade (Maior)</option>
            <option value="release_date.desc">Data de Lançamento</option>
            <option value="vote_average.desc">Avaliação</option>
          </select>
          <select name="with_genres" onChange={handleFilterChange}>
            <option value="">Gênero</option>
            <option value="28">Ação</option>
            <option value="12">Aventura</option>
            <option value="16">Animação</option>
            <option value="35">Comédia</option>
            <option value="80">Crime</option>
          </select>
          <button onClick={handleApplyFilters}>Aplicar Filtros</button>
        </FiltersContainer>
      )}

      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <PaginationContainer>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;
