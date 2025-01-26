import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Container, MoviesContainer } from '../styles/SearchStyles'; // Ajuste o caminho conforme necessário

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
