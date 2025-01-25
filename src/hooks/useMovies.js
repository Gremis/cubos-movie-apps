import { useState, useEffect } from "react";
import { fetchFromAPI } from "../services/apiService";

export const useMovies = (endpoint, defaultQuery = {}, itemsPerPage = 10) => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(defaultQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (query = {}, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        ...filters,
        ...query,
        page: Math.ceil(page / 2)
      }).toString();
      const data = await fetchFromAPI(`${endpoint}?${params}&language=pt-BR`);

      const results = data.results || [];
      setAllMovies(results);

      const startIndex = (page - 1) % 2 * itemsPerPage;
      const visibleMovies = results.slice(startIndex, startIndex + itemsPerPage);

      setMovies(visibleMovies);
      setTotalPages(data.total_pages * 2);
    } catch (err) {
      setError("Erro ao carregar filmes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies({}, currentPage);
  }, [filters, currentPage]);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(defaultQuery);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return {
    movies,
    loading,
    error,
    filters,
    totalPages,
    currentPage,
    handleFilterChange,
    resetFilters,
    changePage,
  };
};
