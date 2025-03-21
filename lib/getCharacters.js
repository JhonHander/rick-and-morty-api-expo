import { useState, useEffect, useCallback } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useFetchCharacters() { 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getCharacters = useCallback(async (pageNumber, shouldReset = false) => {
    if (!hasMore && !shouldReset) return;

    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}?page=${pageNumber}`);
      const data = await response.json();

      setCharacters((prevCharacters) => shouldReset ? data.results : [...prevCharacters, ...data.results]);
      setHasMore(data.info.next !== null);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  }, [hasMore]);

  // Carga inicial de datos o cuando cambia la página
  useEffect(() => {
    getCharacters(page, page === 1);
  }, [page, getCharacters]);

  // Función para refrescar y cargar la primera página
  const refreshCharacters = useCallback(() => {
    setPage(1);
    getCharacters(1, true);
  }, [getCharacters]);

  return { 
    characters, 
    loading, 
    setPage, 
    refreshCharacters 
  };
}