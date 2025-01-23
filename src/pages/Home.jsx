import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { usePagination } from "../hooks/usePagination";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
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
  grid-template-columns: repeat(5, 1fr); /* 5 itens por linha */
  gap: 1rem; /* Espaço entre os itens */
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
  const { data: movies, loading } = useFetchMovies("movie/top_rated");
  const { currentItems, totalPages, changePage, currentPage } = usePagination(
    movies,
    10
  );

  if (loading) return <p>Carregando...</p>;

  return (
    <Container>
      <h2 className="title">Melhores filmes:</h2>
      <MoviesContainer>
        {currentItems.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <PaginationContainer>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={changePage}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;