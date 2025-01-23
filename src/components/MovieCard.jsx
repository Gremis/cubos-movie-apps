import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMovieCard } from "../hooks/useMovieCard";

const CardContainer = styled.div`
  width: 235px;
  height: 355px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover
  }

  &:hover ${() => ProgressCircle} {
    opacity: 1;
    visibility: visible;
  }

  &:hover ${() => Title} {
    transform: translateY(-10px);
  }

  &:hover ${() => Genres} {
    opacity: 1;
    visibility: visible;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  transition: transform 0.3s ease-in-out;
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .background {
    stroke: #ddd;
    stroke-width: 8;
    fill: none;
  }

  .circle {
    stroke-dasharray: 282.6;
    stroke-dashoffset: ${({ percentage }) =>
      282.6 - (percentage / 100) * 282.6};
    stroke: ${({ theme }) => theme.colors.success};
    stroke-width: 8;
    fill: none;
    transition: stroke-dashoffset 0.3s ease-in-out;
  }

  .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Title = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  text-align: center;
  transition: transform 0.3s ease-in-out;
`;

const Genres = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  span {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;

const MovieCard = ({ movie }) => {
  const { posterUrl, title, voteAverage, genres } = useMovieCard(movie);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <CardContainer onClick={handleClick} percentage={voteAverage * 10}>
      <img src={posterUrl} alt={title} />
      <Content>
        <ProgressCircle percentage={voteAverage * 10}>
          <svg>
            <circle cx="40" cy="40" r="35" className="background" />
            <circle cx="40" cy="40" r="35" className="circle" />
          </svg>
          <div className="percentage">{Math.round(voteAverage * 10)}%</div>
        </ProgressCircle>
        <Title>{title}</Title>
        <Genres>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </Genres>
      </Content>
    </CardContainer>
  );
};

export default MovieCard;
