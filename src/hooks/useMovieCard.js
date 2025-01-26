import { useState, useEffect } from "react";
import { fetchFromAPI, IMAGE_BASE_URL } from "../services/apiService";
import logo from "/src/assets/pexels-cup-of-couple.jpg";

export const useMovieCard = (movie) => {
  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI('genre/movie/list?language=pt-BR');
        setGenresList(data.genres || []);
      } catch (error) {
        console.error("Erro ao buscar os gêneros:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const posterUrl = movie?.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : logo;

  const title = movie?.title || "Título Indisponível";
  const voteAverage = movie?.vote_average || "N/A";

  const genres = movie?.genre_ids
    ? movie.genre_ids.map(
      id => genresList.find(genre => genre.id === id)?.name
    )
    : [];

  return { posterUrl, title, voteAverage, genres, loading };
};
