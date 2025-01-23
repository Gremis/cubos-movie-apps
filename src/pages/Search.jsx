import React from "react";
import { useMovies } from "../hooks/useMovies";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
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

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    changePage,
  } = useMovies("search/movie", { query });

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h2 className="title">
        Resultados para: <span>{query}</span>
      </h2>
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

export default Search;
