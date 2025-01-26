import React, { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { Container, TopBar, FilterButton, MoviesContainer } from "../styles/HomeStyles";
import FilterIcon from "../assets/icons/filter.svg";

const Home = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const endpoint = searchQuery ? "search/movie" : "discover/movie";
  const {
    movies,
    loading,
    error,
    filters,
    currentPage,
    totalPages,
    changePage,
    handleFilterChange,
    resetFilters  // Garanta que você está destruindo resetFilters do hook
  } = useMovies(endpoint, { query: searchQuery });

  const toggleFilters = () => {
    setFiltersVisible(prev => !prev);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    handleFilterChange('query', query);
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
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={resetFilters}
        />
      )}

      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={changePage} />
    </Container>
  );
};

export default Home;
