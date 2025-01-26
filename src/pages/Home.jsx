import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { Container, TopBar, FilterButton, MoviesContainer } from "../styles/HomeStyles";
import FilterIcon from "../assets/icons/filter.svg";

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
