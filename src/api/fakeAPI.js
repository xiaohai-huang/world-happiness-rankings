const API = (() => {
  function getRankings({ country, year }) {
    return fetch("/MockData/rankings.json").then((res) => res.json());
  }

  return { getRankings };
})();
export default API;
