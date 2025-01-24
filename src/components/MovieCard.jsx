import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMovieCard } from "../hooks/useMovieCard";

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.secondaryAlpha4}
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 80px;
  top: -100px;
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
    stroke: ${({ theme }) => theme.colors.secondaryAlpha4};
    stroke-width: 5;
    fill: none;
  }

  .circle {
    stroke-dasharray: 282.6;
    stroke-dashoffset: ${({ percentage }) =>
    282.6 - (percentage / 100) * 282.6};
    stroke: ${({ theme }) => theme.colors.warning};
    stroke-width: 5;
    fill: none;
    transition: stroke-dashoffset 0.3s ease-in-out;
  }

  .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.warning};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Genres = styled.div`
  margin-top: 0.5rem;
  visibility: hidden; 
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 2;
  color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;
  font-weight: 400;
  text-transform: capitalize;
  text-align: left; 
`;

const Title = styled.div`
  margin-top: 0.5rem;
  color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left; 
  z-index: 2;
`;

const CardContainer = styled.div`
  width: 235px;
  height: 355px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 80%
    );
    z-index: 1;
  }

  &:hover ${Content} {
    transform: translateY(-10px);
    opacity: 1;
    z-index: 2;
  }

  &:hover ${ProgressCircle} {
    opacity: 1;
    visibility: visible;
  }

  &:hover ${Genres} {
    opacity: 1;
    visibility: visible;
  }
`;

const MovieCard = ({ movie }) => {
  const { posterUrl, title, voteAverage, genres, loading } = useMovieCard(movie);
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
        {loading ? (
          <p>Carregando gêneros...</p>
        ) : (
          <Genres>
            {genres.join(" / ")}
          </Genres>
        )}
      </Content>
    </CardContainer>
  );
};

export default MovieCard;
