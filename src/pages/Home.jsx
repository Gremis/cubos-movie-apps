import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import FilterIcon from "../assets/icons/filter.svg"; // Importação do ícone

const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 1200px;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
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

const Home = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const navigate = useNavigate();
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

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <TopBar>
        <SearchBar onSearch={handleSearch} />
        <FilterButton onClick={toggleFilters}>
          <img src={FilterIcon} alt="Filter Icon" />
        </FilterButton>
      </TopBar>

      {filtersVisible && (
        <Filters filters={filters} onFilterChange={handleFilterChange} />
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
