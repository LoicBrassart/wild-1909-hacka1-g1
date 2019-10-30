import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/FilmPage" component={FilmPage} />
    </Switch>
  );
}

export default Main;
