import { useEffect, useState } from "react";

import API from "../../api/API";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.getCountries()
      .then((data) => {
        setCountries(data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading, error };
}

export default useCountries;
