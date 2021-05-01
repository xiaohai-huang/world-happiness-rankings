import { useEffect, useState } from "react";
import API from "../../api/API";

function useFactors(year, { limit, country }) {
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await API.getFactors(year, { limit, country });
        setFactors(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [year, limit, country]);

  return { factors, loading, error };
}

export default useFactors;
