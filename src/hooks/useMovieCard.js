import { useState, useEffect } from "react";
import { IMAGE_BASE_URL, BASE_URL, API_KEY } from "../services/env";
import logo from "/src/assets/pexels-cup-of-couple.jpg";

export const useMovieCard = (movie) => {
  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${BASE_URL}genre/movie/list?${API_KEY}`);
        const data = await response.json();
        setGenresList(data.genres || []);
      } catch (error) {
        console.error("Erro ao buscar os gêneros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : logo;

  const title = movie.title || "Título Indisponível";
  const voteAverage = movie.vote_average || "N/A";

  const genres =
    movie.genre_ids?.map(
      (id) => genresList.find((genre) => genre.id === id)?.name
    ) || [];

  return { posterUrl, title, voteAverage, genres, loading };
};
