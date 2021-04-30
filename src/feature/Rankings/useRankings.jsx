import { useEffect, useState } from "react";

import API from "../../api/API";

function useRankings({ country, year }) {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!year && !country) return;
    setLoading(true);
    API.getRankings({ country, year })
      .then((data) => {
        setRankings(data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [country, year]);
  return { rankings, loading, error };
}

export default useRankings;
