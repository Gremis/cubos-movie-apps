import React, { useState, useEffect } from "react";
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
  const [initialLoading, setInitialLoading] = useState(true);

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
    resetFilters
  } = useMovies(endpoint, { query: searchQuery });

  useEffect(() => {
    if (loading) {
      setInitialLoading(true);
    } else {
      setInitialLoading(false);
    }
  }, [loading]);

  const toggleFilters = () => {
    setFiltersVisible(prev => !prev);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    handleFilterChange('query', query);
  };

  const placeholderMovies = Array.from({ length: 10 }, (_, index) => ({ id: index }));

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
        {(initialLoading || error)
          ? placeholderMovies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} loading={initialLoading} error={error} />
          ))
          : movies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </MoviesContainer>

      {!initialLoading && !error && (
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={changePage} />
      )}
    </Container>
  );
};

export default Home;
