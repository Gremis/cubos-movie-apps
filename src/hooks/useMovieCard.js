import { IMAGE_BASE_URL } from "../services/env";
import logo from "/src/assets/pexels-cup-of-couple.jpg";

export const useMovieCard = (movie) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : logo;

  const title = movie.title || "Título Indisponível";
  const voteAverage = movie.vote_average || "N/A";
  const genres = movie.genres || [];

  return { posterUrl, title, voteAverage, genres };
};
