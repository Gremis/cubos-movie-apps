import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import styled from "styled-components";

const Container = styled.div`
  .title {
    margin: 24px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
  }

    span {
        color: ${({ theme }) => theme.colors.secondaryAlpha12};
        text-decoration: none;
        line-height: 19.5px;
        font-weight: 600;
        text-align: center;
        font-size: 16px;
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
  }
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
