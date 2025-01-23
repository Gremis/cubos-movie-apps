import { BASE_URL, BEARER_TOKEN } from "./env";

export const fetchFromAPI = async (endpoint) => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!res.ok) throw new Error(`Erro ao buscar dados: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Erro na API:", error.message);
    return null;
  }
};
