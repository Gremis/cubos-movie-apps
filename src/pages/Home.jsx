import React from "react";
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

  > div {
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1rem;

    img {
      max-width: 100%;
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 1.5rem;
    }

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }

    a {
      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 4px;
      color: #000;
      padding: 1rem 0.5rem;
      text-align: center;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const Home = () => {
  const {
    data: movies,
    loading,
    fetchNextPage,
    currentPage,
    totalPages,
  } = useFetchMovies("discover/movie");

  const handlePageChange = (page) => {
    fetchNextPage(page);
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <Container>
      <h2 className="title">Todos os Filmes:</h2>
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
