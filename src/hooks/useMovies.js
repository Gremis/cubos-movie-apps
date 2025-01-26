import { useState, useEffect } from "react";
import { fetchFromAPI } from "../services/apiService";

export const useMovies = (endpoint, defaultQuery = {}, itemsPerPage = 10) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(defaultQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams({
      ...filters,
      language: 'pt-BR',
      page: currentPage
    }).toString();

    try {
      const data = await fetchFromAPI(`${endpoint}?${params}`);
      setMovies(data.results || []);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Erro ao carregar filmes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [filters, currentPage]);
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const resetFilters = () => {
    setFilters(defaultQuery);
  };


  return {
    movies,
    loading,
    error,
    filters,
    totalPages,
    currentPage,
    handleFilterChange,
    changePage,
    resetFilters,
  };
};
