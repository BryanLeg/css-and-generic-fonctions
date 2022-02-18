import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { isLoading, data };
};

export default useFetch;
