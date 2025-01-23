import { BASE_URL, API_KEY, BEARER_TOKEN } from "./env";

export const fetchFromAPI = async (endpoint) => {
  try {
    const url = `${BASE_URL}${endpoint}`; // Remove o ?api_key do endpoint para usar o token
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar dados da API");
    return await res.json();
  } catch (error) {
    console.error("Erro na API:", error.message);
    return null;
  }
};
