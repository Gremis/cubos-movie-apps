import { useEffect, useState } from "react";
import { fetchFromAPI } from "../services/api";

export const useFetchMovies = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchFilteredMovies = async (filters = {}, page = 1) => {
    setLoading(true);

    const query = new URLSearchParams({
      ...filters,
      page,
    }).toString();

    const url = `${endpoint}?${query}`;
    try {
      const result = await fetchFromAPI(url);
      setData(result.results || []);
      setTotalPages(result.total_pages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredMovies();
  }, []);

  return { data, loading, fetchFilteredMovies, currentPage, totalPages };
};
