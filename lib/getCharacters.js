import { useState, useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useFetchCharacters() { 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getCharacters = async (page) => {
    if (!hasMore) return;

    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}?page=${page}`);
      const data = await response.json();

      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setHasMore(data.info.next !== null);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  return { characters, loading, setPage };
}