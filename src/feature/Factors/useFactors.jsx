import { useEffect, useState } from "react";
import API from "../../api/API";
import useDebounce from "../../utility/useDebounce";

function useFactors(year, { limit, country }) {
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedLimit = useDebounce(limit, 300);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await API.getFactors(year, {
          limit: debouncedLimit,
          country,
        });
        setFactors(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [year, debouncedLimit, country]);

  return { factors, loading, error };
}

export default useFactors;
