import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilmPage from "./components/FilmPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/FilmPage" component={FilmPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
