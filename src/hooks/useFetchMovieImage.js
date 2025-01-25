import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../services/env";

export const useFetchMovieImage = (movieId) => {
  const [movieImage, setMovieImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieImage = async () => {
      try {
        setLoading(true);
        const url = `${BASE_URL}movie/${movieId}/images?${API_KEY}&language=en`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar detalhes do filme");
        const data = await res.json();
        if (data?.backdrops[0]?.file_path != undefined) {
          setMovieImage(data?.backdrops[0]?.file_path);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieImage();
    }
  }, [movieId]);

  return { movieImage, loading, error };
};
