import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../services/env";

export const useFetchMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const url = `${BASE_URL}movie/${movieId}?${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar detalhes do filme");
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  return { movie, loading, error };
};
