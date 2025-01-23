import { useEffect, useState } from "react";
import { fetchFromAPI } from "../services/api";

export const useFetchMovies = (endpoint) => {
  const [allMovies, setAllMovies] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const fetchFilteredMovies = async (filters = {}, page = 1) => {
    setLoading(true);

    const query = new URLSearchParams({
      ...filters,
      page: Math.ceil(page / 2),
    }).toString();

    const url = `${endpoint}?${query}`;
    try {
      const result = await fetchFromAPI(url);
      const results = result.results || [];
      setAllMovies(results);

      const startIndex = (page - 1) % 2 * itemsPerPage;
      const visibleMovies = results.slice(startIndex, startIndex + itemsPerPage);

      setData(visibleMovies);
      setTotalPages(result.total_pages * 2);
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
