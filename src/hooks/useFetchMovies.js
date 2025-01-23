import { useState, useEffect } from "react";
import { fetchFromAPI } from "../services/api";

export const useFetchMovies = (endpoint) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchNextPage = async (page = 1) => {
    setLoading(true);
    try {
      const result = await fetchFromAPI(`${endpoint}?page=${page}`);
      if (result) {
        setData(result.results);
        setTotalPages(result.total_pages);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNextPage();
  }, [endpoint]);

  return { data, loading, fetchNextPage, currentPage, totalPages };
};
