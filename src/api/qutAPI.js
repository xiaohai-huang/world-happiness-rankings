const API = (() => {
  // { country, year }
  function getRankings(searchParams) {
    const RANKINGS_URL = new URL("http://131.181.190.87:3000/rankings");
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key])
        RANKINGS_URL.searchParams.set(key, searchParams[key]);
    });
    return fetch(RANKINGS_URL).then((res) => res.json());
  }

  function getCountries() {
    const COUNTRIES_URL = "http://131.181.190.87:3000/countries";
    return fetch(COUNTRIES_URL).then((res) => res.json());
  }

  return { getRankings, getCountries };
})();

export default API;
