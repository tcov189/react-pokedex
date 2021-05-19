import Header from "./Layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./Layout/Footer";
import PokemonList from "./Pages/PokemonList";
import PokemonDetail from "./Pages/PokemonDetail";

function App() {
  return (
    <div className="bg-blue-300 min-h-screen flex flex-col justify-between">
      <Router>
        <Header />
        <Switch>
          <Route path="/pokemon/:id">
            <PokemonDetail />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
