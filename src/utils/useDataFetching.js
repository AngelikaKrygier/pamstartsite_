import { useState, useEffect } from "react";

export const useDataFetching = (fetchFunction) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error) {}
    };
    fetchData();
  }, [fetchFunction]);

  return { data };
};
