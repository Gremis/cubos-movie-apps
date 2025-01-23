import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { fetchFromAPI } from "../services/api";

// Styled Components
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

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

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const query = searchParams.get("q");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      const data = await fetchFromAPI(`search/movie?query=${query}`);
      setMovies(data?.results || []);
    };

    fetchMovies();
  }, [query]);

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <MoviesContainer>
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default Search;
