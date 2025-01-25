export const API_KEY = "api_key=d9bba562c336fff7ea825a581d45769d";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJiYTU2MmMzMzZmZmY3ZWE4MjVhNTgxZDQ1NzY5ZCIsIm5iZiI6MTczNzU3MzczMi4zNDQsInN1YiI6IjY3OTE0NTY0NTUwZTZmYzNjZGUwMTYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YeUpFtyLufBJyfUh74f2Jyvm4hF9Kd3JYpCiHfJg0l8";

export const fetchFromAPI = async (endpoint, method = "GET", body = null, useBearer = false) => {
    try {
        const url = `${BASE_URL}${endpoint}${!useBearer ? `&${API_KEY}` : ''}`;
        const headers = {
            "Content-Type": "application/json;charset=utf-8"
        };

        if (useBearer) {
            headers.Authorization = `Bearer ${BEARER_TOKEN}`;
        }

        const options = {
            method: method,
            headers: headers,
        };

        if (method !== "GET" && method !== "HEAD" && body) {
            options.body = JSON.stringify(body);
        }

        const res = await fetch(url, options);

        if (!res.ok) throw new Error(`Erro ao buscar dados: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("Erro na API:", error.message);
        return null;
    }
};
