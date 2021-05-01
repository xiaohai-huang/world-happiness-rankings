// append the object to the url as query params
const appendQueryParams = (url, queryObject) => {
  const URL_object = new URL(url);
  Object.keys(queryObject).forEach((key) => {
    if (queryObject[key]) URL_object.searchParams.set(key, queryObject[key]);
  });
  return URL_object.toString();
};
const API = (() => {
  // { country, year }
  function getRankings(searchParams) {
    const RANKINGS_URL = "http://131.181.190.87:3000/rankings";
    const RANKINGS_URL_QUERIES = appendQueryParams(RANKINGS_URL, searchParams);

    return fetch(RANKINGS_URL_QUERIES).then((res) => res.json());
  }

  function getCountries() {
    const COUNTRIES_URL = "http://131.181.190.87:3000/countries";
    return fetch(COUNTRIES_URL).then((res) => res.json());
  }

  function register(email, password) {
    return fetch("http://131.181.190.87:3000/user/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const response = await res.json();
      if (response.error) throw Error(response.message);
      return response;
    });
  }

  function login(email, password) {
    return fetch("http://131.181.190.87:3000/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const response = await res.json();
      if (response.error) throw Error(response.message);
      return response;
    });
  }

  // {limit,country }
  function getFactors(year, params) {
    const FACTORS_URL = `http://131.181.190.87:3000/factors/${year}`;
    const FACTORS_URL_QUERIES = appendQueryParams(FACTORS_URL, params);
    const token = localStorage.getItem("token");
    return fetch(FACTORS_URL_QUERIES, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const response = await res.json();
      if (response.error) throw Error(response.message);
      return response;
    });
  }

  return { getRankings, getCountries, getFactors, register, login };
})();

export default API;
