import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL, API_KEY } from "../services/env";
import { useFetchMovieVideos } from "../hooks/useFetchMovieVideos";

const MoviePage = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 2rem auto;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Poster = styled.img`
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const Genres = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

const ProgressCircle = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  .circle {
    stroke-dasharray: 100;
    stroke-dashoffset: ${({ percentage }) => 100 - percentage};
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 8;
    fill: none;
  }

  .background {
    stroke: #ddd;
    stroke-width: 8;
    fill: none;
  }

  .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Overview = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    text-align: justify;
  }
`;

const TrailerContainer = styled.div`
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 10px;
  }
`;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { trailer, loading: trailerLoading } = useFetchMovieVideos(id);

  const getMovie = async () => {
    try {
      const url = `${BASE_URL}movie/${id}?${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Erro ao buscar detalhes do filme");
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error("Erro:", error.message);
    }
  };

  const formatCurrency = (number) =>
    number
      ? number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
      : "N/A";

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <MoviePage>
      {movie && (
        <>
          <MovieDetailsContainer>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Details>
              <h1>{movie.title}</h1>
              <p>{movie.tagline}</p>

              <Genres>
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </Genres>

              <ProgressCircle percentage={movie.vote_average * 10}>
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="45" className="background" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="circle"
                  />
                </svg>
                <div className="percentage">{movie.vote_average * 10}%</div>
              </ProgressCircle>

              <Info>
                <h3>
                  Lançamento:
                </h3>
                <p>{movie.release_date}</p>

                <h3>
                  Duração:
                </h3>
                <p>{movie.runtime} minutos</p>

                <h3>
                  Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>

                <h3>
                  Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>

                <h3>
                  Popularidade:
                </h3>
                <p>{movie.popularity.toFixed(2)}</p>

                <h3>Votos:</h3>
                <p>{movie.vote_count}</p>

                <h3>Situação:</h3>
                <p>{movie.status}</p>

                <h3>Lucro:</h3>
                <p>
                  {formatCurrency(movie.revenue - movie.budget > 0
                    ? movie.revenue - movie.budget
                    : 0)}
                </p>
              </Info>
            </Details>
          </MovieDetailsContainer>

          <Overview>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </Overview>

          <TrailerContainer>
            {trailerLoading ? (
              <p>Carregando trailer...</p>
            ) : (
              trailer && <iframe src={trailer} title="Trailer" allowFullScreen></iframe>
            )}
          </TrailerContainer>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;
