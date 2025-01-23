import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMovieCard } from "../hooks/useMovieCard";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .info {
    padding: 1rem;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.backgroundSecondary} 0%,
      ${({ theme }) => theme.colors.background} 100%
    );
    border-radius: 0 0 15px 15px;

    h2 {
      font-size: 1.4rem;
      margin: 0.5rem 0;
      text-align: center;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin: 0.5rem 0;

      span {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        padding: 0.3rem 0.6rem;
        border-radius: 5px;
        font-size: 0.8rem;
      }
    }

    a {
      display: block;
      text-align: center;
      margin-top: 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      padding: 0.5rem;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }
`;

const MovieCard = ({ movie, showLink = true }) => {
  const { posterUrl, title, voteAverage, genres } = useMovieCard(movie);

  return (
    <CardContainer>
      <img src={posterUrl} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <p>{voteAverage}</p>
        <div className="genres">
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </CardContainer>
  );
};

export default MovieCard;
