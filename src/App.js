import { Route } from "react-router";
import NavBar from "./feature/Navigation/NavBar";
import HomePage from "./feature/Home/HomePage";
import SearchPage from "./feature/Search/SearchPage";
import RankingsPage from "./feature/Rankings/RankingsPage";
import LoginPage from "./feature/User/LoginPage";
import RegisterPage from "./feature/User/RegisterPage";
import LogoutPgae from "./feature/User/LogoutPgae";
import AuthRoute from "./feature/User/AuthRoute";
import FactorsPage from "./feature/Factors/FactorsPage";

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
      <AuthRoute exact path="/factors">
        <FactorsPage />
      </AuthRoute>
      <Route exact path="/regitser">
        <RegisterPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <AuthRoute exact path="/logout">
        <LogoutPgae />
      </AuthRoute>
    </div>
  );
}

export default App;
