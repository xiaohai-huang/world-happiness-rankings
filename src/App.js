import { Route } from "react-router";
import NavBar from "./feature/Navigation/NavBar";
import HomePage from "./feature/Home/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
