import { Route } from "react-router";
import NavBar from "./feature/Navigation/NavBar";
import HomePage from "./feature/Home/HomePage";
import SearchPage from "./feature/Search/SearchPage";
import RankingsPage from "./feature/Rankings/RankingsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/rankings">
        <RankingsPage />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
    </div>
  );
}

export default App;
