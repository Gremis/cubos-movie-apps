import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Styled Components
const MoviePage = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  max-width: 600px;
  margin: 2rem auto;
`;

const Icon = styled.svg`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Description = styled(Info)`
  p {
    line-height: 1.4rem;
  }
`;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <MoviePage>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <Tagline>{movie.tagline}</Tagline>
          <Info>
            <h3>
              <BsWallet2 as={Icon} /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </Info>
          <Info>
            <h3>
              <BsGraphUp as={Icon} /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </Info>
          <Info>
            <h3>
              <BsHourglassSplit as={Icon} /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </Info>
          <Description>
            <h3>
              <BsFillFileEarmarkTextFill as={Icon} /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </Description>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;
