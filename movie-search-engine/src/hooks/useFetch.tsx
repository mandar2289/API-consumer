import { useState, useCallback } from "react";
import { ApiResponse, Detail } from "../Type/type";

export const useFetchAPI = () => {
  const [data, setData] = useState<ApiResponse<Detail>>({ results: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string, options: object) => {
    try {
      setLoading(true);

      const response = await fetch(url, options);
      const json: ApiResponse<Detail> = await response.json();

      setData(json);

      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};
