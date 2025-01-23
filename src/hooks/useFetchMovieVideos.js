import { useEffect, useState } from "react";
import { BASE_URL, BEARER_TOKEN } from "../services/env";

export const useFetchMovieVideos = (movieId) => {
  const [trailer, setTrailer] = useState(null); // Link do trailer
  const [videos, setVideos] = useState([]); // Todos os vídeos disponíveis
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/videos`, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Erro ao buscar vídeos: ${response.statusText}`);
        }

        setVideos(data.results || []);
        const trailerVideo = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailer(trailerVideo ? `https://www.youtube.com/embed/${trailerVideo.key}` : null);
      } catch (err) {
        console.error("Erro ao buscar vídeos:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) fetchVideos();
  }, [movieId]);

  return { trailer, videos, loading, error };
};
