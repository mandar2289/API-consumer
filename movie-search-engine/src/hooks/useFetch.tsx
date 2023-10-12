import { useState } from "react";
import { ApiResponse, Detail } from "../Type/type";

export const useGetQuery = () => {
  const [data, setData] = useState<ApiResponse<Detail>>({ results: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string, options: object) => {
    try {
      setLoading(true); // set loading to true to indicate that the data is being fetched

      const response = await fetch(url, options);
      const json: ApiResponse<Detail> = await response.json();

      setData(json); // shape the data to our model

      setLoading(false); // set loading to false to indicate that the api call has ended
    } catch (error: any) {
      setError(error.message);
      setLoading(false); // set loading to false to indicate that the api call has ended
    }
  };

  return { data, loading, error, fetchData };
};
