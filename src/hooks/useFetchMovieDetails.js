import { useState, useEffect } from "react";
import { fetchFromAPI, BASE_URL } from "../services/apiService";

export const useFetchMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const endpoint = `movie/${movieId}?language=pt-BR`;
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await fetchFromAPI(endpoint);
          setMovie(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [movieId]);

  return { movie, loading, error };
};
