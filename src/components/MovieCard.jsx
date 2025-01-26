import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieCard } from "../hooks/useMovieCard";
import { CardContainer, Content, ProgressCircle, Genres, Title } from "../styles/MovieCardStyles";

const MovieCard = ({ movie, loading, error }) => {
  const { posterUrl, title, voteAverage, genres } = useMovieCard(movie);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  if (loading) {
    return (
      <CardContainer>
        <Content>
          <h2>Carregando...</h2>
        </Content>
      </CardContainer>
    );
  }

  if (error) {
    return (
      <CardContainer>
        <Content>
          <h2 style={{ color: 'red' }}>Erro ao carregar filmes</h2>
        </Content>
      </CardContainer>
    );
  }

  return (
    <CardContainer onClick={handleClick} percentage={voteAverage * 10}>
      <img src={posterUrl} alt={title} />
      <Content>
        <ProgressCircle percentage={voteAverage * 10}>
          <svg viewBox="0 0 160 160">
            <circle cx="60" cy="60" r="50" className="background" />
            <circle cx="60" cy="60" r="50" className="circle" />
          </svg>
          <div className="percentage">{Math.round(voteAverage * 10)}<span>%</span></div>
        </ProgressCircle>
        <Title>{title}</Title>
        <Genres>
          {genres.join(" / ")}
        </Genres>
      </Content>
    </CardContainer>
  );
};

export default MovieCard;
