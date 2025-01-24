import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetchMovieVideos } from "../hooks/useFetchMovieVideos";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";

const MoviePage = styled.div`
  color: ${({ theme }) => theme.colors.secondary12};
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr 1fr;
    grid-template-areas:
      "poster details info"
      "trailer trailer trailer";
  }
`;

const Poster = styled.img`
  grid-area: poster;
  width: 100%;
  max-width: 354.51px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto; /* Centraliza no modo responsivo */
`;

const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 767px) {
    align-items: center; /* Centraliza no responsivo */
    text-align: center;
  }

  h1 {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    color: #eeeeee;
    font-weight: 600;
    margin: 0;
    padding: 0.5rem;
    border-radius: 4px;
  }

  p {
    padding: 0.5rem;
    border-radius: 4px;
    color: #eeeeee;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  h3 {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #eeeeee;
    font-weight: 700;
  }
`;

const Genres = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryAlpha4};
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  @media (max-width: 767px) {
    flex-direction: column; /* Gêneros em coluna no responsivo */
    align-items: center;
    text-align: center;
  }

  h3 {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #eeeeee;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }

  span {
    background-color: ${({ theme }) => theme.colors.primaryAlpha3};
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column; /* No responsivo, informações ficam em coluna */
  gap: 1rem;

  div {
    padding: 1rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondaryAlpha4};
    text-align: center;

    h3 {
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      color: #eeeeee;
      font-weight: 700;
    }

    p {
      font-size: 0.9rem;
      padding: 0.3rem;
      border-radius: 4px;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* No desktop, 2 colunas */
    gap: 1rem;
  }
`;

const ProgressCircle = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;

  .circle {
    stroke-dasharray: 100;
    stroke-dashoffset: ${({ percentage }) => 100 - percentage};
    stroke: ${({ theme }) => theme.colors.secondaryAlpha4};
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
    color: ${({ theme }) => theme.colors.secondary12};
  }
`;

const Overview = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryAlpha4};
  border-radius: 4px;

  h3 {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #eeeeee;
    font-weight: 700;
  }

  p {
    line-height: 1.5;
    text-align: justify;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #eeeeee;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 4px;
  }
`;

const TrailerContainer = styled.div`
  grid-area: trailer;
  width: 100%;

  iframe {
    width: 100%;
    height: 250px; /* Altura menor no responsivo */
  }

  @media (min-width: 768px) {
    iframe {
      height: 500px; /* Altura maior no desktop */
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(id);
  const { trailer, loading: trailerLoading } = useFetchMovieVideos(id);

  const formatCurrency = (number) =>
    number
      ? number.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      : "N/A";

  if (loading) return <p>Carregando detalhes do filme...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <MoviePage>
      {movie && (
        <>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Details>
            <h1>{movie.title}</h1>
            <p>Título original: {movie.original_title}</p>
            <p>{movie.tagline}</p>
            <Overview>
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </Overview>
            <Genres>
              <h3>Gêneros</h3>
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </Genres>
          </Details>
          <Info>
            <div>
              <h3>Popularidade</h3>
              <p>{movie.popularity.toFixed(2)}</p>
            </div>
            <div>
              <ProgressCircle percentage={movie.vote_average * 10}>
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="45" className="background" />
                  <circle cx="50" cy="50" r="45" className="circle" />
                </svg>
                <div className="percentage">{Math.round(movie.vote_average * 10)}%</div>
              </ProgressCircle>
            </div>
            <div>
              <h3>Lançamento</h3>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <h3>Situação</h3>
              <p>{movie.status}</p>
            </div>
            <div>
              <h3>Orçamento</h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div>
              <h3>Receita</h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div>
              <h3>Duração</h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div>
              <h3>Votos</h3>
              <p>{movie.vote_count}</p>
            </div>
          </Info>
          <TrailerContainer>
            {trailerLoading ? (
              <p>Carregando trailer...</p>
            ) : trailer ? (
              <iframe src={trailer} title="Trailer" allowFullScreen></iframe>
            ) : (
              <p>Trailer não disponível.</p>
            )}
          </TrailerContainer>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;
