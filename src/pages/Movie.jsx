import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetchMovieVideos } from "../hooks/useFetchMovieVideos";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";

const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Poster = styled.img`
  width: 354.51px;
  height: 542px;
  max-width: 400px;
  border-radius: 4px;
  margin: 0 0 32px 32px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  width: 100%;

  h1 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    line-height: 39.01px;
    font-weight: 600;
    text-align: left;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin-bottom: 5px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
  }

  p:first-of-type {
    font-style: normal; 
  }

  p:nth-of-type(2) {
    font-style: italic;
    margin-top: 19px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  > div:nth-child(1),
  > div:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.secondary3};
    padding: 10px;
    border-radius: 4px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin-bottom: 5px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;

    > div:nth-child(1),
  > div:nth-child(2) {
    padding: 16px;
  }
  }
`;

const InfoRelease = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: start;

  div {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin: 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
    margin: 0;
  }
`;

const Genres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin-bottom: 8px;
  }

  div {
    display: flex; 
    gap: 8px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.primary12};
    background-color: ${({ theme }) => theme.colors.primaryAlpha3};
    padding: 8px;
    border-radius: 2px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

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
    background: none; 
    padding: 0; 
    border: none;
  }
`;


const Overview = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  border-radius: 4px;
  padding: 16px;
  width: 417px;
  height: 300px;
  margin-bottom: 16px;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin-bottom: 5px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  `;

const TrailerContainer = styled.div`
  width: 100%;
  max-width: 1238px;
  height: 647px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 32px 0;
  max-width: 1302px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  border-radius: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

const PosterSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;

`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 32px 32px;

`;

const DetailsOverview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OverviewSection = styled.div`
  flex: 1;
`;

const GenresSection = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  border-radius: 4px;
  padding: 16px;
  width: auto;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ReleaseInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  width: 390px;
`;

const FinancialInfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: center;
  justify-items: start;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  padding: 16px;
  border-radius: 4px;
  width: 120px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};
    margin: 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondaryAlpha12};
    margin: 0;
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
    const absoluteNumber = Math.abs(number); // Trabalha com o valor absoluto

    if (absoluteNumber >= 1_000_000_000) {
      return `${isNegative ? "-" : ""}$${(absoluteNumber / 1_000_000_000).toFixed(2)}B`;
    } else if (absoluteNumber >= 1_000_000) {
      return `${isNegative ? "-" : ""}$${(absoluteNumber / 1_000_000).toFixed(2)}M`;
    } else {
      return `${isNegative ? "-" : ""}$${absoluteNumber.toLocaleString("en-US")}`;
    }
  };


  if (loading) return <p>Carregando detalhes do filme...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <MoviePage>
      {movie && (
        <>
          <GridContainer>
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
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="45" className="background" />
                      <circle cx="50" cy="50" r="45" className="circle" />
                    </svg>
                    <div className="percentage">{Math.round(movie.vote_average * 10)}%</div>
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
                        {movie.spoken_languages.map((lang) => lang.name).join(" - ")}
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
