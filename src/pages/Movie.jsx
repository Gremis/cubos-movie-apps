import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovieVideos } from "../hooks/useFetchMovieVideos";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";
import { useFetchMovieImage } from "../hooks/useFetchMovieImage";
import {
  MoviePage,
  Poster,
  Details,
  Info,
  InfoRelease,
  Genres,
  ProgressCircle,
  Overview,
  TrailerContainer,
  GridContainer,
  PosterSection,
  DetailsSection,
  DetailsOverview,
  OverviewSection,
  GenresSection,
  ReleaseInfoSection,
  FinancialInfoSection
} from "../styles/MovieStyles";

const Movie = () => {
  const { id } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(id);
  const { trailer, loading: trailerLoading } = useFetchMovieVideos(id);
  const { movieImage, loading: imageLoading, error: imageError } = useFetchMovieImage(id);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const formatDuration = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };


  const formatAbbreviatedCurrency = (number) => {
    if (number === undefined || number === null) return "N/A";

    const isNegative = number < 0;
    const absoluteNumber = Math.abs(number);

    if (absoluteNumber >= 1_000_000_000) {
      return `${isNegative ? "-" : ""}$${(absoluteNumber / 1_000_000_000).toFixed(2)}B`;
    } else if (absoluteNumber >= 1_000_000) {
      return `${isNegative ? "-" : ""}$${(absoluteNumber / 1_000_000).toFixed(2)}M`;
    } else {
      return `${isNegative ? "-" : ""}$${absoluteNumber.toLocaleString("en-US")}`;
    }
  };


  if (loading || imageLoading) return <p>Carregando detalhes do filme...</p>;
  if (error || imageError) return <p>Erro: {error || imageError}</p>;
  const backImageUrl = `url(https://image.tmdb.org/t/p/original${movieImage})`;
  return (
    <MoviePage>
      {movie && (
        <>
          <GridContainer style={{
            backgroundImage: `linear-gradient(90deg, #121113 0%, rgba(18, 17, 19, 0.8) 50%, rgba(18, 17, 19, 0) 100%), ${backImageUrl}`
          }}>
            <PosterSection>
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </PosterSection>
            <DetailsSection>
              <Details>
                <div>
                  <h1>{movie.title}</h1>
                  <p>Título original: {movie.original_title}</p>
                  <p>{movie.tagline}</p>
                </div>
                <Info>
                  <div>
                    <h3>Popularidade</h3>
                    <p>{movie.popularity.toFixed(2)}</p>
                  </div>
                  <div>
                    <h3>Votos</h3>
                    <p>{movie.vote_count}</p>
                  </div>
                  <ProgressCircle percentage={movie.vote_average * 10}>
                    <svg viewBox="0 0 160 160">
                      <circle cx="60" cy="60" r="50" className="background" />
                      <circle cx="60" cy="60" r="50" className="circle" />
                    </svg>
                    <div className="percentage">{Math.round(movie.vote_average * 10)}<span>%</span></div>
                  </ProgressCircle>
                </Info>
              </Details>
              <DetailsOverview>
                <OverviewSection>
                  <Overview>
                    <h3>Sinopse</h3>
                    <p>{movie.overview}</p>
                  </Overview>
                  <GenresSection>
                    <Genres>
                      <h3>Gêneros</h3>
                      <div>
                        {movie.genres.map((genre) => (
                          <p key={genre.id}>{genre.name}</p>
                        ))}
                      </div>
                    </Genres>
                  </GenresSection>
                </OverviewSection>
                <ReleaseInfoSection>
                  <InfoRelease>
                    <div>
                      <h3>Lançamento</h3>
                      <p>{formatDate(movie.release_date)}</p>
                    </div>
                    <div>
                      <h3>Duração</h3>
                      <p>{formatDuration(movie.runtime)}</p>
                    </div>
                    <div>
                      <h3>Situação</h3>
                      <p>{movie.status}</p>
                    </div>
                    <div>
                      <h3>Idiomas</h3>
                      <p>
                        {movie.spoken_languages.map((lang) => lang.english_name).join(" - ")}
                      </p>
                    </div>
                  </InfoRelease>
                  <FinancialInfoSection>
                    <div>
                      <h3>Orçamento</h3>
                      <p>{formatAbbreviatedCurrency(movie.budget)}</p>
                    </div>
                    <div>
                      <h3>Receita</h3>
                      <p>{formatAbbreviatedCurrency(movie.revenue)}</p>
                    </div>
                    <div>
                      <h3>Lucro</h3>
                      <p>{formatAbbreviatedCurrency(movie.revenue - movie.budget)}</p>
                    </div>
                  </FinancialInfoSection>
                </ReleaseInfoSection>
              </DetailsOverview>
            </DetailsSection>
          </GridContainer>
          <TrailerContainer>
            <h1>Trailer</h1>
            {trailerLoading ? (
              <p>Carregando trailer...</p>
            ) : trailer ? (
              <iframe
                src={trailer}
                title="Trailer"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
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
