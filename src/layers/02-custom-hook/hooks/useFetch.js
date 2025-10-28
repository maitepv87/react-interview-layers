import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to load response");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setFetchError(err.message || "Unexpected error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, fetchError };
};
