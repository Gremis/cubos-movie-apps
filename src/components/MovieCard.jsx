import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMovieCard } from "../hooks/useMovieCard";

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
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 80px;
  top: -150px;
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

  .blur-center {
    fill: ${({ theme }) => theme.colors.secondaryAlpha1};
    filter: blur(3px);
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

const Title = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryAlpha12};
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
  opacity: 1; /* Agora sempre visível */
  visibility: visible; /* Agora sempre visível */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${CardContainer}:hover & {
    opacity: 1; /* Reafirma visibilidade no hover */
    visibility: visible;
  }

  span {
    background-color: ${({ theme }) => theme.colors.secondaryAlpha1};
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;


const MovieCard = ({ movie }) => {
  const { posterUrl, title, voteAverage, genres } = useMovieCard(movie);
  const navigate = useNavigate();

  console.log("Gêneros recebidos:", genres);


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
