import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/FilmPage" component={FilmPage} />
      </Switch>
    </div>
  );
}

export default App;
