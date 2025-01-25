import { useState, useEffect } from "react";
import { fetchFromAPI } from "../services/apiService";

export const useFetchMovieVideos = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const endpoint = `movie/${movieId}/videos`;
      const fetchData = async () => {
        try {
          const data = await fetchFromAPI(endpoint, "GET", null, true);
          setVideos(data.results || []);
          const trailerVideo = data.results.find(
            video => video.type === "Trailer" && video.site === "YouTube"
          );
          setTrailer(trailerVideo ? `https://www.youtube.com/embed/${trailerVideo.key}` : null);
        } catch (err) {
          console.error("Erro ao buscar vídeos:", err.message);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [movieId]);

  return { trailer, videos, loading, error };
};
