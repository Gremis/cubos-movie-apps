import React, { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import styled from "styled-components";

const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
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

const FiltersToggleButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const Home = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const {
    movies,
    loading,
    error,
    filters,
    currentPage,
    totalPages,
    handleFilterChange,
    resetFilters,
    changePage,
  } = useMovies("discover/movie");

  const toggleFilters = () => {
    if (filtersVisible) {
      resetFilters();
    }
    setFiltersVisible((prev) => !prev);
  };


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h2 className="title">Filmes Populares</h2>
      <FiltersToggleButton onClick={toggleFilters}>
        {filtersVisible ? "Esconder Filtros" : "Mostrar Filtros"}
      </FiltersToggleButton>

      {filtersVisible && (
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      )}

      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={changePage}
      />
    </Container>
  );
};

export default Home;
