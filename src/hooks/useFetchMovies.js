import { useEffect, useState } from "react";
import { fetchFromAPI } from "../services/api";

export const useFetchMovies = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFromAPI(endpoint);
      setData(result ? result.results : []);
      setLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return { data, loading };
};
