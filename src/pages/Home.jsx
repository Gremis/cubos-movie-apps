import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import FilterIcon from "../assets/icons/filter.svg"; 

const Container = styled.div`
  .title {
    margin: 2rem 0 1rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  margin: 24px auto;
  width: 100%;
  max-width: 800px;
`;

const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryAlpha2};
  border: none;
  width: 64px;
  height: 48px;
  min-height: 44px;
  border-radius: 2px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  backdrop-filter: blur(4px);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlpha3};
    transform: none;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1322px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 16px;
    justify-items: center;
  }
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
