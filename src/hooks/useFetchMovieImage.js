import { useState, useEffect } from "react";
import { fetchFromAPI, BASE_URL } from "../services/apiService";

export const useFetchMovieImage = (movieId) => {
  const [movieImage, setMovieImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const endpoint = `movie/${movieId}/images?language=en`;
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await fetchFromAPI(endpoint);
          if (data?.backdrops[0]?.file_path) {
            setMovieImage(data.backdrops[0].file_path);
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [movieId]);

  return { movieImage, loading, error };
};
