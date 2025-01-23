import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../services/env";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 1rem;

    h2 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }

    p {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
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

const MovieCard = ({ movie, showLink = true }) => (
  <CardContainer>
    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
    <div className="info">
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average || "N/A"}
      </p>
      <div className="genres">
        {movie.genres?.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  </CardContainer>
);

export default MovieCard;
